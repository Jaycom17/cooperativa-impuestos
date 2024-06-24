import { useForm } from "react-hook-form";
import { IoLogInOutline } from "react-icons/io5";


const UsersLogForm = ({onSubmit}) =>{
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
        <IoLogInOutline className="bg-transparent text-unicoop text-4xl"/>
        <h1 className="bg-transparent text-unicoop text-xl font-medium text-center">Inicia sesión con tus credenciales</h1>
        {errors.usuEmail && (
          <p className="text-[red] text-sm bg-transparent">Debe ingresar el email</p>
        )}
        <input
          type="text"
          placeholder="Correo electrónico"
          name="username"
          className="w-11/12 p-2.5 rounded-md text-xl text-unicoop text-center border-solid border-unicoop border"
          {...register("usuEmail", { required: true, type: "email" })}
        />
        {errors.usuPassword && (
          <p className="text-[red] text-sm bg-transparent">Debe ingresar la contraseña</p>
        )}
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="w-11/12 p-2.5 rounded-md text-xl text-unicoop text-center border-solid border-unicoop border"
          {...register("usuPassword", { required: true })}
        />
        <button className="bg-buttons-login text-unicoop-white w-11/12 p-2.5 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in font-medium">
          Ingresar
        </button>
      </form>
    )
    
};

export default UsersLogForm;