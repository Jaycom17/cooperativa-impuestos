//Importación de librerías
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//Importación de componentes
import UsersLogForm from "../../components/LoginForms/UsersLogForm";
//Importación de hooks
import { AuthContext } from "../../context/AuthContext";
//Importación de imágenes
import logo from '../../assets/LogoUniversidadCooperativa.png';

/**
 * Componente para la página de inicio de sesión.
 *
 * Este componente maneja la autenticación de los usuarios y redirige a las rutas correspondientes
 * según el rol del usuario (admin o profesor).
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página de inicio de sesión.
 */
const LoginPage = () => {
  const navigate = useNavigate();

  const { singin, user } = useContext(AuthContext);

  // Efecto que redirige a los usuarios autenticados a sus respectivas rutas
  useEffect(() => {
    if (!user) return;

    if (user.usuRole === "admin") {
      navigate("/admin");
      return;
    }

    if (user.usuRole === "profesor") {
      navigate("/professor");
      return;
    }
  }, [user, navigate]);

  /**
   * Maneja el evento de envío del formulario de inicio de sesión.
   *
   * @param {Object} values - Los valores del formulario de inicio de sesión.
   */
  const onSubmit = async (values) => {
    await singin(values);
  };

  return (  
    <main className="flex flex-col bg-background mx-auto items-center min-h-screen place-content-center">
      <img src={logo} alt="logo universidad cooperativa" className="w-11/12 md:w-96"/>
      <section className="p-6 w-11/12 md:w-[400px] bg-unicoop-black rounded-lg">
        <UsersLogForm onSubmit={onSubmit}/>
      </section>
      <p className="text-unicoop mt-5 font-medium text-center">¿Tienes un código de sala? <Link className="text-unicoop-blue hover:text-buttons-list-blue " to='/'>¡Únete!</Link></p>
    </main>
  );
};

export default LoginPage;
