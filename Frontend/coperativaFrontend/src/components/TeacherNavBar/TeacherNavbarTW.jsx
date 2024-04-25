const TeacherNavbarTW = ({ onCerrarSesion, onCrearProfesor, onActualizarDatos,onLista }) => {
    return (
      <nav className="flex justify-between items-center p-4 bg-[#18273E]">
        <h1 className="bg-[#18273E] font-semibold text-2xl text-unicoop-white my-auto">Nombre Profesor</h1>
        <section className="flex gap-3 bg-[#18273E]">
            <button onLista={onLista} className="text-unicoop-black w-32 h-10 rounded transition-colors duration-200 ease-in hover:bg-[#628dce] hover:text-unicoop-white">
                Lista de Salas
            </button>
            <button onClick={onCrearProfesor} className="text-unicoop-black w-32 h-10 rounded transition-colors duration-200 ease-in hover:bg-unicoop-green hover:text-unicoop-white">
                Crear Sala
            </button>
            <button onClick={onActualizarDatos} className="text-unicoop-black w-32 h-10 rounded transition-colors duration-200 ease-in hover:bg-unicoop-blue hover:text-unicoop-white">
                Actualizar Datos
            </button>
            <button onClick={onCerrarSesion} className="text-unicoop-black w-28 h-10 rounded transition-colors duration-200 ease-in bg-buttons-warning-yellow font-semibold hover:bg-buttons-closing-red hover:text-unicoop-white">
                Cerrar Sesión
            </button>
        </section>
      </nav>
    );
  };
  
  export default TeacherNavbarTW;