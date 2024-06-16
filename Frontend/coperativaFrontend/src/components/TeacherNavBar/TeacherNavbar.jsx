import React from 'react';
import './TeacherNavbar.css';

const TeacherNavbar = ({ onCerrarSesion, onCrearProfesor, onActualizarDatos,onLista }) => {
  return (
    
    <nav className="navbar">
      <div className="navbar-brand">Nombre Profesor</div>
      <div className="navbar-actions">
      <button onLista={onLista} className="btn-lista">
          Lista de Salas
        </button>
        <button onClick={onCrearProfesor} className="btn-crear-profesor">
          Crear Sala
        </button>
        <button onClick={onActualizarDatos} className="btn-actualizar-datos">
          Actualizar Datos
        </button>
        <button onClick={onCerrarSesion} className="btn-cerrar-sesion">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default TeacherNavbar;
