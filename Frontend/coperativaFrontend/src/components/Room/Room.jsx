import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import FloatingContainer from "../FloatingContainer/FloatingContainer";
import RoomForm from "../RoomForm/RoomForm";
import { updateRoomState } from "../../services/room.service";

const Room = ({ room, usuId, onRefresh }) => {
  const [activated, setActivated] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    setActivated(room.roomStatus.toLowerCase() === 'open');
  }, [room.roomStatus]);

  const toggleActivated = () => {
    const roomStatus = !activated ? 'open' : 'closed';
    try {
      updateRoomState({ roomStatus }, room.roomID);
      setActivated(!activated);
    } catch (error) {
      console.error('Error al actualizar el estado de la sala:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + (date.getDate() + 1)).slice(-2);
    return `${day} / ${month} / ${year}`;
  };

  return (
    <section className="flex flex-col items-center w-4/5 sm:1/3 lg:w-[375px] bg-primary rounded-lg text-unicoop">
      <div className="w-full text-center mt-2">
        <h1 className="text-2xl font-bold mx-1">{room.roomName}</h1>
        <h2 className="text-unicoop-green text-lg"><span className="font-medium">Código de acceso:</span> {room.roomPassword}</h2>
        <h2><span className="font-medium">Fecha de creación:</span> {formatDate(room.roomDate)}</h2>
      </div>
      <div className="flex flex-row my-1">
        <h1 className="font-medium mr-2">Estado:</h1>
        <span className={`mr-1 w-14 text-center`}>{activated ? 'Activa' : 'Inactiva'}</span>
        <label className="flex items-center cursor-pointer">
          {/* Input oculto para manejar el estado */}
          <input
            type="checkbox"
            className="hidden"
            checked={activated}
            onChange={toggleActivated}
          />
          {/* El interruptor deslizante */}
          <div className={`toggle-wrapper relative w-10 h-6 mt-0.5 rounded-full transition-colors duration-150 ${activated ? 'bg-[green]/40':'bg-[red]/40'} `}>
            <div className={`toggle absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${activated ? 'translate-x-full bg-[green]' : 'bg-[red]'}`}></div>
          </div>
        </label>
      </div>
      <div className="flex items-center gap-3 mt-2 mb-3">
        <button onClick={() => setFormOpen(true)} className="flex items-center p-1.5 bg-buttons-update-green hover:bg-buttons-update-green-h duration-150 rounded">
          <FaPencilAlt className='bg-transparent'/> Actualizar
        </button>
        <button className="flex items-center p-1.5 bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded">
         <FaRegTrashAlt className='bg-transparent'/> Eliminar
        </button>
      </div>

      <FloatingContainer open={formOpen} setOpen={setFormOpen}>
        <RoomForm roomId={room.roomID} usuID={usuId} onRefresh={onRefresh} setOpen={setFormOpen}/>
      </FloatingContainer>
    </section>
  );
};

export default Room;

