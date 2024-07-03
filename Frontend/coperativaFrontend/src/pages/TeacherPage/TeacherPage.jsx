import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import { useState, useEffect } from 'react';
import { getRooms } from '../../services/room.service';
import InfoBubble from '../../components/InfoBubble/InfoBubble';
import { IoIosArrowDown } from "react-icons/io";

const TeacherPage = () => {
  const [rooms, setRooms] = useState([]);
  const [isDateAscending, setIsDateAscending] = useState(true);
  const [isNameAscending, setIsNameAscending] = useState(true);

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
    const sortedRooms = [...rooms].sort((a, b) =>
      isDateAscending
        ? new Date(a.roomDate) - new Date(b.roomDate)
        : new Date(b.roomDate) - new Date(a.roomDate)
    );
    setRooms(sortedRooms);
    setIsDateAscending(!isDateAscending);
  };

  const orderByName = () => {
    const sortedRooms = [...rooms].sort((a, b) =>
      isNameAscending
        ? a.roomName.localeCompare(b.roomName)
        : b.roomName.localeCompare(a.roomName)
    );
    setRooms(sortedRooms);
    setIsNameAscending(!isNameAscending);
  };

  return (
    <>
      <TeacherNavbar/>
      <main className="flex flex-col items-center min-h-screen bg-background">
        {/**Aquí, en esta sección la idea sería poner los filtros (Barra de busqueda, ordenar por?) */}
        <section className="flex justify-between items-center w-11/12 mt-5">
          <InfoBubble info={dateInfo} />
          <div className="flex gap-4 text-background text-xs md:text-base">
            <button className="bg-unicoop p-1.5 rounded-md font-medium hover:bg-slate-200 duration-150 flex items-center" onClick={orderByDate}>
              Ordenar por fecha
              <IoIosArrowDown className={`ml-1 md:text-lg transition-transform duration-300 ${isDateAscending ? 'rotate-180':''}`}/>
            </button>
            <button className="bg-unicoop p-1.5 rounded-md font-medium hover:bg-slate-200 duration-150 flex items-center" onClick={orderByName}>
              Ordenar por nombre
              <IoIosArrowDown className={`ml-1 md:text-lg transition-transform duration-300 ${isNameAscending ? 'rotate-180':''}`}/>
            </button>
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
