const ItemListaTW = ({ nombre, estado, onActualizar, onEliminar }) => {
  // Check if nombre and estado have values and estado is a string
  if (!nombre || !estado || typeof estado !== 'string') {
    nombre = 'Carlitos :3';
    estado = 'INACTIVO';
  }

  return (
    <section className="flex justify-between items-center mb-4 rounded-md bg-primary p-[10px] text-unicoop-white shadow-md">
      <h1 className="flex-1 rounded-l p-[5px] text-center font-medium ml-4">{nombre}</h1>
      <h1 className={`flex-1 text-center rounded-r p-[5px] font-bold
       ${estado.toLowerCase() === "inactivo" ? "bg-unicoop-green":"bg-unicoop-blue"}`} >{estado}</h1>
      <button onClick={onActualizar} className="text-unicoop-black py-[5px] px-4 ml-4 rounded transition-colors duration-200 ease-in hover:bg-unicoop-blue hover:text-unicoop-white">
        Actualizar
      </button>
      <button onClick={onEliminar} className="text-unicoop-black py-[5px] px-4 mx-4 rounded transition-colors duration-200 ease-in hover:bg-buttons-closing-red hover:text-unicoop-white">
        Eliminar
      </button>
    </section>
  );
};

export default ItemListaTW;
