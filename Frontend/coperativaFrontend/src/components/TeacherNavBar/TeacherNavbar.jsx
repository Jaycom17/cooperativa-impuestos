import React from 'react';
import './TeacherNavbar.css';

const TeacherNavbar = ({ onCerrarSesion, onCrearProfesor, onActualizarDatos,onLista }) => {
  return (
    
    <nav className="flex justify-between items-center p-[15px] bg-[#18273E] text-white w-screen">
      <div className="text-2xl bg-transparent">Nombre Profesor</div>
      <div className="flex gap-5 bg-transparent">
      <button onLista={onLista} className="p-2 rounded bg-[#54719b] hover:bg-[#3f5472]">
          Lista de Salas
        </button>
        <button onClick={onCrearProfesor} className="p-2 rounded bg-[#54719b] hover:bg-[#3f5472]">
          Crear Sala
        </button>
        <button onClick={onActualizarDatos} className="p-2 rounded bg-[#54719b] hover:bg-[#3f5472]">
          Actualizar Datos
        </button>
        <button onClick={onCerrarSesion} className="p-2 rounded bg-[#8d2f2f] hover:bg-[#723f42]">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default TeacherNavbar;
