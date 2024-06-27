import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import PropTypes from "prop-types";

const CreateProfForm = ({ onSubmit, passwordMatch, errors, register }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = (field) => {
    if(field === 1) {setShowPassword(!showPassword);}
    else if(field === 2){setShowPassword2(!showPassword2)};
  };

  return (
    <form
      className="flex flex-col items-center bg-unicoop-black rounded-md gap-3"
      onSubmit={onSubmit}
    >
      <h1 className="flex bg-transparent text-unicoop text-3xl mt-2 gap-4 font-medium text-center">
        <MdCreate />
        <FaChalkboardTeacher />
      </h1>
      <section className="flex flex-col md:flex-row gap-3 w-11/12">
        <div className="w-full flex flex-col items-center">
          <input
            type="text"
            className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
            placeholder="Nombre"
            {...register("usuName", { required: true })}
          />
          {errors.usuName && (
            <p className="text-red-500 text-sm font-semibold">
              Debe ingresar el nombre del docente
            </p>
          )}
        </div>
        <div className="w-full flex flex-col items-center">
          <input
            type="email"
            className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
            placeholder="Correo electronico"
            {...register("usuEmail", { required: true })}
          />
          {errors.usuEmail && (
            <p className="text-red-500 text-sm font-semibold">
              Debe ingresar el email del docente
            </p>
          )}
        </div>
      </section>

      {!passwordMatch && (
        <p className="text-red-500 text-sm font-semibold">
          Las contraseñas no coinciden
        </p>
      )}
      <div className="relative w-11/12">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
          placeholder="Contraseña"
          {...register("usuPassword", { required: true })}
        />
        <button
          type="button"
          onClick={() => togglePasswordVisibility(1)}
          className="absolute inset-y-0 right-0 flex items-center px-2 text-xl text-unicoop hover:text-unicoop-blue duration-150"
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
      {errors.usuPassword && (
        <p className="text-red-500 text-sm font-semibold">
          Debe ingresar la contraseña
        </p>
      )}
      <div className="relative w-11/12">
        <input
          type={showPassword2 ? "text" : "password"}
          className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
          placeholder="Repita la contraseña"
          {...register("confirmPassword", { required: true })}
        />
        <button
          type="button"
          onClick={() => togglePasswordVisibility(2)}
          className="absolute inset-y-0 right-0 flex items-center px-2 text-xl text-unicoop hover:text-unicoop-blue duration-150"
        >
          {showPassword2 ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm font-semibold">
          Debe repetir la contraseña
        </p>
      )}
      <button className="bg-buttons-login text-unicoop-white w-11/12 p-2.5 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in font-medium">
        Crear
      </button>
    </form>
  );
};

CreateProfForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateProfForm;
