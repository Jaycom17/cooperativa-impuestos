import React from 'react';
import ItemLista from '../../components/ItemLista/ItemLista';
import Navbar from '../../components/Navbar/Navbar';
import './ListaItems.css';

const ListaItems = () => {
  const items = [
    { id: 1, nombre: 'Item 1', estado: 'Activo' },
    { id: 2, nombre: 'Item 2', estado: 'Inactivo' },
    { id: 3, nombre: 'Item 3', estado: 'Desconocido' },
    // ...otros items
  ];

  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
  };

  const handleCrearProfesor = () => {
    // Lógica para crear un profesor
    console.log('Crear profesor');
  };

  const handleActualizarDatos = () => {
    // Lógica para actualizar datos
    console.log('Actualizar datos');
  };

  const handleActualizar = (id) => {
    // Lógica para actualizar el item con el id proporcionado
    console.log(`Actualizar item con id: ${id}`);
  };

  const handleEliminar = (id) => {
    // Lógica para eliminar el item con el id proporcionado
    console.log(`Eliminar item con id: ${id}`);
  };

  return (
    <div className="app-container">
      <Navbar
        onCerrarSesion={handleCerrarSesion}
        onCrearProfesor={handleCrearProfesor}
        onActualizarDatos={handleActualizarDatos}
      />
      <ul className="lista-items">
        {items.map((item) => (
          <li key={item.id}>
            <ItemLista
              nombre={item.nombre}
              estado={item.estado}
              onActualizar={() => handleActualizar(item.id)}
              onEliminar={() => handleEliminar(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItems;
