import React from 'react';
import './ItemLista.css';

const ItemLista = ({ nombre, estado, onActualizar, onEliminar }) => {
  // Check if nombre and estado have values and estado is a string
  if (!nombre || !estado || typeof estado !== 'string') {
    nombre = 'Jose Esteban Narvaez Maldonaldo';
    estado = 'INACTIVO';
  }

  return (
    <div className="item-lista">
      <span className="nombre">{nombre}</span>
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

export default ItemLista;
