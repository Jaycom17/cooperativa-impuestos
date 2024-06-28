import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getRooms } from '../../services/room.service';
import InfoBubble from '../../components/InfoBubble/InfoBubble';

const TeacherPage = () => {
  const [rooms, setRooms] = useState([]);

  const { singout } = useContext(AuthContext);

  const dateInfo = "La fecha se encuentra en formato: - Día / Mes / Año"

  useEffect(() => {
    getRooms().then((response) =>{
      if(response.status === 201) {setRooms(response.data);}
    }).catch(() => {alert("Error al cargar las salas");});
  }, []);

  const refreshRooms = () =>{
    getRooms().then((response) =>{
      if(response.status === 201) {setRooms(response.data);}
    }).catch(() => {alert("Error al cargar las salas");});
  };

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
        {/**Aquí, en esta sección la idea sería poner los filtros (Barra de busqueda, ordenar por?) */}
        <section className="w-11/12 mt-5">
          <InfoBubble info={dateInfo}/>
        </section>
        <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
          {rooms.map((room) => (
              <Room key={room.roomID} name={room.roomName} code={room.roomPassword} date={formatDate(room.roomDate)} state={room.roomStatus} id={room.roomID} onDelete={() => handleEliminar(room.roomID)} onRefresh={refreshRooms}
              />
          ))}
        </section>
      </main>
      
    </>
  );
};

export default TeacherPage;
