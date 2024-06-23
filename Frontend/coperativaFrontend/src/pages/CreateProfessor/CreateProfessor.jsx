import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";

function CreateProfessor() {
    const [passwordMatch, setPasswordMatch] = useState(true);


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        if (data.usuPassword !== data.password) {
            setPasswordMatch(false);
            setTimeout(() => {
                setPasswordMatch(true);
            }, 5000);
            return;
        }
        console.log(data);
    }
  return (
    <div>
      <Navbar />
      <main className="w-full min-h-screen bg-[#1f324e] flex justify-center items-center flex-col">
        <article className="px-5 md:px-32 lg:px-60 xl:px-80 mb-5">
            <p className="text-center text-white">A continuación puede crear un profesor, tenga en cuenta que una vez creado este tendrá la capacidad de crear salas y gestionarlas, por lo cual revise bien la información aqui suministrada para asi evitar inconvenientes a futuro.</p>
        </article>
        <form className="flex flex-col items-center bg-[#385075] rounded-md w-80 md:w-96" onSubmit={handleSubmit((data) => onSubmit(data))}>
          <h1 className="text-2xl text-white bg-[#385075] mt-4">
            Crea un profesor
          </h1>
          <input
            type="text"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            placeholder="Nombre del profesor"
            {...register("usuName", { required: true })}
          />
          {errors.usuName && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              debe ingresar el nombre
            </p>
          )}
          <input
            type="email"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            placeholder="Correo electronico del profesor"
            {...register("usuEmail", { required: true })}
            />
            {errors.usuEmail && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              debe ingresar el email
            </p>
          )}
          <input
            type="password"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            placeholder="Contraseña del profesor"
            {...register("usuPassword", { required: true })}
            />
            {errors.usuPassword && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              debe ingresar la contraseña
            </p>
          )}
          {
            !passwordMatch && (
              <p className="text-red-500 text-sm bg-[#385075] font-semibold">
                las contraseñas no coinciden
              </p>
            )
          }
          <input
            type="password"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            placeholder="Repita la contraseña"
            {...register("password", { required: true })}
            />
            {errors.password && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              debe repetir la contraseña
            </p>
          )}
          <button className="bg-[#404142] text-unicoop-white w-[90%] p-2 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in">
            Crear
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreateProfessor;
