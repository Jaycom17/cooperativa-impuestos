import ItemListaTW from '../../components/ItemLista/ItemListaTW';
import NavbarTW from '../../components/Navbar/NavbarTW';
import './ListaItems.css';

const ListaItemsTW = () => {
  const items = [
    { id: 1, nombre: 'Carlos Andrés García Solarte'},
    { id: 2, nombre: 'Juan Camilo Orejuela Meneses'},
    { id: 3, nombre: 'Juan Esteban Sotelo Palta'},
    { id: 4, nombre: 'Jose Esteban Narvaez Maldonado'},
    { id: 5, nombre: 'Francisco Javier Obando'},
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
      <div className="">
        <section className="p-2 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {items.map((item) => (
            <article key={item.id} className="mx-auto">
              <ItemListaTW 
                nombre={item.nombre}
                onActualizar={() => handleActualizar(item.id)}
                onEliminar={() => handleEliminar(item.id)}
              />
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ListaItemsTW;
