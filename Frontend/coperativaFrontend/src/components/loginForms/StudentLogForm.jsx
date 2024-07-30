//Importación de librerías
import { useContext } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
//Importación de componentes
import { RoomContext } from "../../context/RoomContext";
//Importación de iconos
import { IoMdLogIn } from "react-icons/io";

/**
 * Formulario de inicio de sesión para estudiantes.
 * 
 * Este componente proporciona un formulario para que los estudiantes ingresen a una sala
 * utilizando un código. Utiliza la biblioteca react-hook-form para el manejo de formularios
 * y validaciones.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {Function} props.onSubmit - Función para manejar el envío del formulario.
 * @returns {JSX.Element} Elemento JSX que representa el formulario de inicio de sesión para estudiantes.
 */
const StudentLogForm = ({onSubmit}) =>{

  const { roomError } = useContext(RoomContext);

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

  return(
    <form
      className="flex flex-col items-center bg-transparent rounded-md gap-3"
      onSubmit={handleSubmit(onSubmit)}
      >
      <IoMdLogIn className="bg-transparent text-unicoop text-4xl"/>
      <h1 className="bg-transparent text-unicoop text-xl font-medium text-center">Ingresa a una sala con el código</h1>
      {roomError && (
        <p className="text-[red] text-sm bg-transparent">{roomError}</p>
      )}
      <input
        type="text"
        placeholder="Código"
        name="roomPassword"
        className="w-11/12 p-2.5 rounded-md text-xl text-unicoop text-center bg-background border-solid border-unicoop border"
        {...register("roomPassword", { required: true })}
      />
      {errors.roomPassword && (
        <p className="text-[red] text-sm bg-transparent">Debes ingresar el código de la sala</p>
      )}
      <button className="bg-buttons-login text-unicoop-white w-11/12 p-2.5 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in font-medium">
        Ingresar
      </button>
    </form>
  );
};

StudentLogForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default StudentLogForm;