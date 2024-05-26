const ListItem = ({ nombre, onActualizar, onEliminar }) => {
  // Check if nombre have values and rol is a string
  if (!nombre || typeof nombre !== 'string') {
    nombre = 'Nombre_docente';
  }

  return (
    <section className="flex flex-col justify-between items-center mb-4 rounded-md w-[300px]  bg-primary p-[10px] text-unicoop-white shadow-md">
      <h1 className=" bg-transparent rounded-md flex-1 w-[90%] text-sm sm:rounded-l p-[5px] my-auto md:py-[5px] text-center font-medium">{nombre}</h1>

      <div className="flex mt-3 bg-primary">
        <button onClick={onActualizar} className="bg-white text-unicoop-black py-[5px] px-4 mr-2 rounded transition-colors duration-200 ease-in hover:bg-unicoop-blue hover:text-unicoop-white w-full ">
          Actualizar
        </button>
        <button onClick={onEliminar} className="bg-white text-unicoop-black py-[5px] px-4 ml-2 rounded transition-colors duration-200 ease-in hover:bg-buttons-closing-red hover:text-unicoop-white w-full">
          Eliminar
        </button>
      </div>
    </section>
  );
};

export default ListItem;