import Room from '../../components/Room/Room';
import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const TeacherPage = () => {

  const { singout } = useContext(AuthContext);

  const Salas = [
    { id: 1, nombre: 'Investigación de operaciones',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    { id: 2, nombre: 'Sala 2',codigo: "123",fecha: '2021-09-30' ,estado: 'Inactivo' },
    { id: 3, nombre: 'Sala 3',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    { id: 3, nombre: 'Sala 3',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    { id: 3, nombre: 'Sala 3',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    { id: 3, nombre: 'Sala 3',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    { id: 3, nombre: 'Sala 3',codigo: "123",fecha: '2021-09-30' ,estado: 'Activo' },
    // ...otros items
  ];

  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    singout();
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
    <>
      <TeacherNavbar
        onCerrarSesion={handleCerrarSesion}
        onCrearSala={handleCrearProfesor}
        onActualizarDatos={handleActualizarDatos}
      />
      <main className="flex flex-col items-center min-h-screen bg-background">
        <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
          {Salas.map((Sala,i) => (
              <Room key={i} nombre={Sala.nombre} codigo={Sala.codigo} fecha={Sala.fecha} estado={Sala.estado} onActualizar={() => handleActualizar(Sala.id)} onEliminar={() => handleEliminar(Sala.id)}
              />
          ))}
        </section>
      </main>
      
    </>
  );
};

export default TeacherPage;
