import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import { useState, useEffect } from 'react';
import { getRooms } from '../../services/room.service';
import InfoBubble from '../../components/InfoBubble/InfoBubble';

const TeacherPage = () => {
  const [rooms, setRooms] = useState([]);

  const dateInfo = 'La fecha se encuentra en formato: - Día / Mes / Año'

  useEffect(() => {
    getRooms()
      .then((response) => {
        if (response.status === 201) {
          setRooms(response.data);
        }
      })
      .catch(() => {
        alert("Error al cargar las salas");
      });
  }, []);

  const refreshRooms = () => {
    getRooms()
      .then((response) => {
        if (response.status === 201) {
          setRooms(response.data);
        }
      })
      .catch(() => {
        alert("Error al cargar las salas");
      });
  };

  const orderByDate = () => {
    const sortedRooms = [...rooms].sort(
      (a, b) => new Date(a.roomDate) - new Date(b.roomDate)
    );
    setRooms(sortedRooms);
  };

  const orderByName = () => {
    const sortedRooms = [...rooms].sort((a, b) =>
      a.roomName.localeCompare(b.roomName)
    );
    setRooms(sortedRooms);
  };

  return (
    <>
      <TeacherNavbar/>
      <main className="flex flex-col items-center min-h-screen bg-background">
        {/**Aquí, en esta sección la idea sería poner los filtros (Barra de busqueda, ordenar por?) */}
        <section className="w-11/12 mt-5 flex">
          <InfoBubble className="w-10" info={dateInfo}/>
          <div className="flex justify-between w-full text-white">
            <button onClick={orderByDate}>Ordenar por fecha</button>
            <button onClick={orderByName}>Ordenar por nombre</button>
          </div>
        </section>
        <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
          {rooms.map((room) => (
            <Room key={room.roomID} room={room} onRefresh={refreshRooms} />
          ))}
        </section>
      </main>
    </>
  );
};

export default TeacherPage;
