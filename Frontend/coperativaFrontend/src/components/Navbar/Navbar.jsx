import React from 'react';
import './Navbar.css';

const Navbar = ({ onCerrarSesion, onCrearProfesor, onActualizarDatos,onLista }) => {
  return (
    
    <nav className="navbar">
      <div className="navbar-brand">Administador</div>
      <div className="navbar-actions">
      <button onLista={onLista} className="btn-lista">
          Lista de profesores
        </button>
        <button onClick={onCrearProfesor} className="btn-crear-profesor">
          Crear Profesor
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

export default Navbar;
