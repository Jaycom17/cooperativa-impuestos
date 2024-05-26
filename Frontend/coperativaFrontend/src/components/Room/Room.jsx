import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

const Room = ({ nombre,codigo,fecha, estado ,onActualizar, onEliminar }) => {
  // Check if nombre and estado have values and estado is a string
  if (!nombre || !estado || typeof estado !== 'string') {
    nombre = 'Sala 1';
    codigo = '1234';
    fecha = '2021-09-30';
    estado = 'INACTIVO';
  }

  return (
    <div className="flex justify-between mt-8 items-center mb-[15px] p-[10px] rounded bg-[#18273E] text-white w-full">
      <span className="bg-transparent">{nombre}</span>
      <span className="bg-transparent">{codigo}</span>
      <span className="bg-transparent">{fecha}</span>
      <span className={`${estado.toLowerCase() === 'activo' ? "bg-green-400" : "bg-red-400"} p-1 w-20 text-center rounded`}>{estado}</span>
      <section className='flex justify-between w-1/5 bg-transparent'>
      <button onClick={onActualizar} className="bg-transparent rounded">
        <FaPencilAlt className='bg-transparent' />
      </button>
      <button onClick={onEliminar} className="bg-transparent rounded">
      <FaRegTrashAlt className='bg-transparent'/>
      </button>
      <button onClick={onEliminar} className={`${estado.toLowerCase() === 'activo' ? "bg-red-600" : "bg-green-600"} pr-2 pl-2 pt-1 pb-1 rounded w-24`}>
        {estado.toLowerCase() === 'activo' ? "Desactivar" : "Activar"}
      </button>
      </section>
    </div>
  );
};

export default Room;
