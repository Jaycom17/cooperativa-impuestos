import React from 'react';
import './Sala.css';

const Sala = ({ nombre,codigo,fecha, estado ,onActualizar, onEliminar }) => {
  // Check if nombre and estado have values and estado is a string
  if (!nombre || !estado || typeof estado !== 'string') {
    nombre = 'Sala 1';
    codigo = '1234';
    fecha = '2021-09-30';
    estado = 'INACTIVO';
  }

  return (
    <div className="item-lista">
      <span className="nombre">{nombre}</span>
      <span className="codigo">{codigo}</span>
      <span className="fecha">{fecha}</span>
      <span className={`estado ${estado.toLowerCase()}`}>{estado}</span>
      <button onClick={onActualizar} className="btn-actualizar">
        Actualizar
      </button>
      <button onClick={onEliminar} className="btn-eliminar">
        Eliminar
      </button>
    </div>
  );
};

export default Sala;
