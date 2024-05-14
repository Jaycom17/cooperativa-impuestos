import ItemListaTW from '../../components/ItemLista/ItemListaTW';
import NavbarTW from '../../components/Navbar/NavbarTW';
import './ListaItems.css';

const ListaItemsTW = () => {
  const items = [
    { id: 1, nombre: 'Carlos Andrés García Solarte'},
    { id: 2, nombre: 'Juan Camilo Orejuela Meneses'},
    { id: 3, nombre: 'Juan Esteban Sotelo Palta'},
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
    <div className="">
      <NavbarTW
        onCerrarSesion={handleCerrarSesion}
        onCrearProfesor={handleCrearProfesor}
        onActualizarDatos={handleActualizarDatos}
      />
      <div className="grid-cols-1 gap-4  md:grid-cols-3">
        <ul className="p-2 sm:items-center">
          {items.map((item) => (
            <li key={item.id} className='max-w-[400px]'>
              <ItemListaTW 
                nombre={item.nombre}
                onActualizar={() => handleActualizar(item.id)}
                onEliminar={() => handleEliminar(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaItemsTW;
