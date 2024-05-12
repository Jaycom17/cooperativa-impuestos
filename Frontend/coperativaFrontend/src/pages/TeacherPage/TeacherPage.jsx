import React from 'react';
import Sala from '../../components/Sala/Sala';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import './TeacherPage.css';

const TeacherPage = () => {
  const Salas = [
    { id: 1, nombre: 'Sala 1',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    { id: 2, nombre: 'Sala 2',codigo: "123",fecha: '2021-09-30' ,estado: 'Inactivo' },
    { id: 3, nombre: 'Sala 3',codigo: "123",fecha: '2021-09-30' ,estado: 'Desconocido' },
    // ...otros items
  ];

  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
  };

  const handleCrearProfesor = () => {
    // Lógica para crear un profesor
    console.log('Crear Sala');
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
      <TeacherNavbar
        onCerrarSesion={handleCerrarSesion}
        onCrearSala={handleCrearProfesor}
        onActualizarDatos={handleActualizarDatos}
      />
      <ul className="lista-items">
        {Salas.map((Salas) => (
          <li key={Salas.id}>
            <Sala
              nombre={Salas.nombre}
              codigo={Salas.codigo}
              fecha={Salas.fecha}
              estado={Salas.estado}
              onActualizar={() => handleActualizar(Salas.id)}
              onEliminar={() => handleEliminar(Salas.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherPage;
