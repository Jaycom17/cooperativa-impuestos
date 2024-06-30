import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import { useState, useEffect, useContext } from 'react';
import { getRooms } from '../../services/room.service';
import { AuthContext } from '../../context/AuthContext';
import InfoBubble from '../../components/InfoBubble/InfoBubble';

const TeacherPage = () => {
  const [rooms, setRooms] = useState([]);

  const {user} = useContext(AuthContext);

  const dateInfo = 'La fecha se encuentra en formato: - Día / Mes / Año'

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

  return (
    <>
      <TeacherNavbar professorName={user.usuName}/>
      <main className="flex flex-col items-center min-h-screen bg-background">
        {/**Aquí, en esta sección la idea sería poner los filtros (Barra de busqueda, ordenar por?) */}
        <section className="lg:w-11/12 mt-5">
          <InfoBubble info={dateInfo}/>
        </section>
        <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
          {rooms.map((room) => (
            <Room key={room.roomID} room={room} onRefresh={refreshRooms}/>
          ))}
        </section>
      </main>
    </>
  );
};

export default TeacherPage;
