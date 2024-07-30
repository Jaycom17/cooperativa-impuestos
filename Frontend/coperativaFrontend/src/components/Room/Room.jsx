//Importación de librerías
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Importación de componentes
import FloatingContainer from "../FloatingContainer/FloatingContainer";
import RoomForm from "../RoomForm/RoomForm";
//Importación de servicios
import { updateRoomState, deleteRoom } from "../../services/room.service";
//Importación de utilidades
import cutString from "../../utils/CropName";
//Importación de iconos
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

/**
 * Componente que representa una sala con opciones para actualizar, revisar o eliminar.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.room - Información de la sala.
 * @param {string} props.room.roomID - ID de la sala.
 * @param {string} props.room.roomName - Nombre de la sala.
 * @param {string} props.room.roomPassword - Contraseña de la sala.
 * @param {string} props.room.roomStatus - Estado de la sala (abierta o cerrada).
 * @param {string} props.room.roomDate - Fecha de creación de la sala.
 * @param {string} props.usuId - ID del usuario.
 * @param {Function} props.onRefresh - Función para refrescar la lista de salas.
 * @returns {JSX.Element} Elemento JSX que representa una sala.
 */
const Room = ({ room, usuId, onRefresh }) => {
  const [activated, setActivated] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  /**
   * Efecto que actualiza el estado de la sala al montar el componente y cuando cambia `room.roomStatus`.
   */
  useEffect(() => {
    setActivated(room.roomStatus.toLowerCase() === 'open');
  }, [room.roomStatus]);

  /**
   * Alterna el estado de activación de la sala.
   */
  const toggleActivated = () => {
    const roomStatus = !activated ? 'open' : 'closed';
    try {
      updateRoomState({ roomStatus }, room.roomID);
      setActivated(!activated);
    } catch (error) {
      console.error('Error al actualizar el estado de la sala:', error);
    }
  };

  /**
   * Formatea una fecha en una cadena con el formato "dd / mm / yyyy".
   *
   * @param {string} dateString - La fecha en formato de cadena.
   * @returns {string} La fecha formateada.
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + (date.getDate() + 1)).slice(-2);
    return `${day} / ${month} / ${year}`;
  };

  /**
   * Maneja la eliminación de una sala.
   */
  const handleDelete = () =>{
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar la sala ${room.roomName}?`);
    if (confirmDelete) {
        deleteRoom(room.roomID).then((response) =>{
            if(response.status === 201){
                alert("Se ha eliminado la sala correctamente");
                onRefresh();
            }
        }).catch(() =>{
            alert("Error al eliminar la sala");
        });
    }
  };

  return (
    <section className="flex flex-col items-center w-11/12 sm:1/3 lg:w-[375px] bg-primary rounded-lg text-unicoop">
      <div className="w-full text-center mt-2">
        <h1 className="text-2xl font-bold mx-1" title={room.roomName}>{cutString(room.roomName)}</h1>
        <h2 className="text-slate-200 text-center  text-2xl mb-2 font-semibold" title={room.roomPassword}>{cutString("Código: " + room.roomPassword)}</h2>
        <h2><span className="font-medium">Fecha de creación:</span> {formatDate(room.roomDate)}</h2>
      </div>
      <div className="flex flex-row my-1">
        <h1 className="font-medium mr-2">Estado:</h1>
        <span className={`mr-1 w-14 text-center`}>{activated ? 'Activa' : 'Inactiva'}</span>
        <label className="flex items-center cursor-pointer">
          {/* Input oculto para manejar el estado */}
          <input type="checkbox" className="hidden" checked={activated} onChange={toggleActivated}/>
          {/* El interruptor deslizante */}
          <div className={`toggle-wrapper relative w-10 h-6 mt-0.5 rounded-full transition-colors duration-150 ${activated ? 'bg-[green]/40':'bg-[red]/40'} `}>
            <div className={`toggle absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${activated ? 'translate-x-full bg-[green]' : 'bg-[red]'}`}></div>
          </div>
        </label>
      </div>
      <div className="flex gap-3 mt-2 mb-3">
        <button onClick={() => setFormOpen(true)} className="flex items-center p-1.5 bg-buttons-update-green hover:bg-buttons-update-green-h duration-150 rounded">
          <FaPencilAlt className='bg-transparent mr-1'/> Actualizar
        </button>
        <Link to={`/roomreport/${room.roomID}`} className="flex items-center p-1.5 bg-buttons-login hover:bg-[#696969] duration-150 rounded">
          <FaEye className="bg-transparent mr-1"/> Revisar
        </Link>
        <button onClick={handleDelete} className="flex items-center p-1.5 bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded">
         <FaRegTrashAlt className='bg-transparent mr-1'/> Eliminar
        </button>
      </div>

      <FloatingContainer open={formOpen} setOpen={setFormOpen}>
        <RoomForm roomId={room.roomID} usuID={usuId} onRefresh={onRefresh} setOpen={setFormOpen}/>
      </FloatingContainer>
    </section>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
      roomID: PropTypes.string,
      roomName: PropTypes.string,
      roomPassword: PropTypes.string,
      roomStatus: PropTypes.string,
      roomDate: PropTypes.string
  }),
  usuId: PropTypes.string,
  onRefresh: PropTypes.func
}