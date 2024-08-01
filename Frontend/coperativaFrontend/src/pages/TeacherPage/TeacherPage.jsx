//Importación de librerías
import { useState, useEffect } from 'react';
//Importación de componentes
import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
//Importación de servicios
import { getRooms } from '../../services/room.service';
//Importación de iconos
import InfoBubble from '../../components/InfoBubble/InfoBubble';
import { IoIosArrowDown } from "react-icons/io";

/**
 * Componente TeacherPage.
 * 
 * Este componente muestra una lista de salas con opciones para ordenar por fecha o nombre.
 * 
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la vista de la página del profesor.
 */
const TeacherPage = () => {
  const [rooms, setRooms] = useState([]);
  const [isDateAscending, setIsDateAscending] = useState(false);
  const [isNameAscending, setIsNameAscending] = useState(false);

  const dateInfo = 'La fecha se encuentra en formato: - Día / Mes / Año'

   /**
    * Obtiene y ordena las salas al montar el componente.
    */
  useEffect(() => {
    getRooms()
      .then((response) => {
        if (response.status === 201) {
          const sortedRooms = response.data.sort((a, b) => a.roomName.localeCompare(b.roomName))
          setRooms(sortedRooms);
        }
      })
      .catch(() => {
        alert("Error al cargar las salas");
      });
  }, []);

  /**
   * Refresca la lista de salas.
   */
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

  /**
   * Ordena las salas por fecha en orden ascendente o descendente.
   */
  const orderByDate = () => {
    const sortedRooms = [...rooms].sort((a, b) =>
      isDateAscending
        ? new Date(a.roomDate) - new Date(b.roomDate)
        : new Date(b.roomDate) - new Date(a.roomDate)
    );
    setRooms(sortedRooms);
    setIsDateAscending(!isDateAscending);
  };

  /**
   * Ordena las salas por nombre en orden ascendente o descendente.
   */
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
