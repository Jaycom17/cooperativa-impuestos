import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getRooms, updateRoomState } from '../../services/room.service';

const TeacherPage = () => {
  const [rooms, setRooms] = useState([]);

  const { singout } = useContext(AuthContext);

  useEffect(() => {
    getRooms().then((response) =>{
      if(response.status === 201) {setRooms(response.data);}
    }).catch(() => {alert("Error al cargar las salas");});
  }, []);

  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    singout();
  };

  const handleCrearProfesor = () => {
    // Lógica para crear un profesor
    console.log('Crear Sala');
  };

  const handleActualizarDatos = () => {
    // Lógica para actualizar datos
    console.log('Actualizar datos');
  };

  const handleActualizar = (id) => {
    // Lógica para actualizar el item con el id proporcionado
    console.log(`Actualizar item con id: ${id}`);
  };

  const handleUpdateRoomState = (id, newState) =>{
    
    const roomStatusToUp = {
      roomID: id,
      roomState: newState
    }
    
    try {
      updateRoomState(roomStatusToUp);
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.roomID === id ? { ...room, roomStatus: newState } : room
        )
      );
    } catch (error) {
      console.error('Error al actualizar el estado de la sala:', error);
    }
  };

  const handleEliminar = (id) => {
    // Lógica para eliminar el item con el id proporcionado
    console.log(`Eliminar item con id: ${id}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + (date.getDate() + 1)).slice(-2);
    return `${day} / ${month} / ${year}`;
  };

  return (
    <>
      <TeacherNavbar
        onCerrarSesion={handleCerrarSesion}
        onCrearSala={handleCrearProfesor}
        onActualizarDatos={handleActualizarDatos}
      />
      <main className="flex flex-col items-center min-h-screen bg-background">
        <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
          {rooms.map((room) => (
              <Room key={room.roomID} name={room.roomName} code={room.roomPassword} date={formatDate(room.roomDate)} state={room.roomStatus} id={room.roomID} onUpdateState={handleUpdateRoomState} onDelete={() => handleEliminar(room.roomID)}
              />
          ))}
        </section>
      </main>
      
    </>
  );
};

export default TeacherPage;
