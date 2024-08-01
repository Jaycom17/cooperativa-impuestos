//Importación de librerías
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//Importación de componentes
import StudentLogForm from "../../components/LoginForms/StudentLogForm";
//Importación de hooks
import { RoomContext } from "../../context/RoomContext";
//Importación de imágenes
import logo from '../../assets/LogoUniversidadCooperativa.png';

/**
 * Componente principal de la página de inicio.
 *
 * Este componente se encarga de manejar la lógica de inicio de sesión para estudiantes.
 * Si un estudiante es validado correctamente, se redirige a la página del middleware.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página principal.
 */
function MainPage() {
  const { checkRoom, currentRoom } = useContext(RoomContext);
  
  const navigate = useNavigate();

  // Efecto que redirige al middleware del estudiante si hay una sala actual
  useEffect(() => {
    if (!currentRoom) return;

    navigate('/middlewarestudent');
  }, [currentRoom, navigate]);


  /**
   * Maneja el envío del formulario de inicio de sesión.
   *
   * @param {Object} values - Los valores ingresados en el formulario.
   * @returns {Promise<void>} Promesa que se resuelve cuando se verifica la sala.
   */
  const onSubmit = async(values) => {
      await checkRoom(values);
    };

  return (
    <main className="flex flex-col mx-auto items-center min-h-screen place-content-center bg-background">
      <img src={logo} alt="logo universidad cooperativa" className="w-11/12 md:w-96"/>
      <section className="p-6 w-11/12 md:w-[400px] bg-unicoop-black rounded-lg">
        <StudentLogForm onSubmit={onSubmit}/>
      </section>
      <p className="text-unicoop mt-5 font-medium text-center">¿No eres un estudiante? <Link className="text-unicoop-blue hover:text-buttons-list-blue " to='/login'>¡Inicia sesión!</Link></p> 
    </main>
  );
}

export default MainPage;
