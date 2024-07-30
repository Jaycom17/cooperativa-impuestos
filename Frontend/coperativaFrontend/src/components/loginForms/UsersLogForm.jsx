//Importación de librerías
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
//Importación de componentes
import { AuthContext } from "../../context/AuthContext";
//Importación de iconos
import { IoLogInOutline, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

/**
 * Formulario de inicio de sesión para usuarios.
 *
 * Este componente proporciona un formulario para que los usuarios inicien sesión
 * utilizando su correo electrónico y contraseña. Utiliza la biblioteca react-hook-form
 * para el manejo de formularios y validaciones.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {Function} props.onSubmit - Función para manejar el envío del formulario.
 * @returns {JSX.Element} Elemento JSX que representa el formulario de inicio de sesión para usuarios.
 */
const UsersLogForm = ({onSubmit}) =>{
  const [showPassword, setShowPassword] = useState(false);
  const { loginError } = useContext(AuthContext);

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

  /**
   * Alterna la visibilidad de la contraseña.
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return(
        <form
        className="flex flex-col items-center bg-transparent rounded-md gap-3"
        onSubmit={handleSubmit(onSubmit)}
        >
        <IoLogInOutline className="bg-transparent text-unicoop text-4xl"/>
        <h1 className="bg-transparent text-unicoop text-xl font-medium text-center">Inicia sesión con tus credenciales</h1>
        {loginError && (
          <p className="text-[red] text-sm bg-transparent">Credenciales incorrectas</p>
        )}
        <input
          type="email"
          placeholder="Correo electrónico"
          name="username"
          className="w-11/12 p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
          {...register("usuEmail", { required: true, type: "email" })}
        />
        {errors.usuEmail && (
          <p className="text-[red] text-sm bg-transparent">Debe ingresar el email</p>
        )}
        <div className="relative w-11/12">
            <input
              className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register("usuPassword", { required: true })}
            />
            
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-xl text-unicoop hover:text-unicoop-blue duration-150"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
          {errors.usuPassword && (
              <p className="text-[red] text-sm bg-transparent ">Debe ingresar la contraseña</p>
            )}  
        <button className="bg-buttons-login text-unicoop-white w-11/12 p-2.5 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in font-medium">
          Ingresar
        </button>
      </form>
    )
    
}

UsersLogForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default UsersLogForm;