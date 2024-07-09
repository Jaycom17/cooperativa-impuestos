import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { validateRoom } from "../services/room.service";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
    const [currentRoom, setCurrentRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [roomError, setRoomError] = useState(null);

    useEffect(() => {
        if (roomError) {
          const timer = setTimeout(() => {
            setRoomError(null);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [roomError]);
    

    useEffect(() => {
        const checkRoom = async () => {      
            try {

              if (!localStorage.getItem("room")) {
                setLoading(false);
                return;
              }

              const res = await validateRoom({roomPassword: JSON.parse(localStorage.getItem("room")).roomPassword});

              if (!res.data.roomID) {
                localStorage.removeItem("room");
                setLoading(false);
                return
            }

              setCurrentRoom(res.data);
              setLoading(false);
            } catch (error) {
              setLoading(false);
            }
          };
          checkRoom();
    }, []);

    const checkRoom = async (room) => {
        try {
            const res = await validateRoom(room);

            if (!res.data.roomID) {
                setRoomError(res.data.message ||"Codigo de sala incorrecto")
                return
            }

            setCurrentRoom(res.data);
            localStorage.setItem("room", JSON.stringify(res.data));
            setRoomError(null);
          } catch (error) {
            console.log(error);
            setRoomError("Codigo de sala incorrecto")
          }
    }

    const leaveRoom = () => {
        localStorage.removeItem("room");
        setCurrentRoom(null);
    }


    return (
        <RoomContext.Provider value={{checkRoom, currentRoom, loading, roomError, leaveRoom}}>
            {children}
        </RoomContext.Provider>
    );
}

RoomProvider.propTypes = {
    children: PropTypes.node.isRequired,
};