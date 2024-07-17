import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updatePassword } from "../../services/professor.service.js";

function ResetPasswordTeacher() {
  const [passwordMatch, setPasswordMatch] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const changaPassword = async (data) => {
    try {
      const res = await updatePassword(data);
      if (res.status === 200) {
        alert("Contraseña cambiada correctamente");
        setValue("usuOldPassword", "");
        setValue("usuPassword", "");
        setValue("confirmPassword", "");
      }
    } catch (error) {
      alert("Error al cambiar la contraseña");
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    if (data.usuPassword !== data.confirmPassword) {
      setPasswordMatch(false);
      setTimeout(() => {
        setPasswordMatch(true);
      }, 5000);
      return;
    }
    
    await changaPassword(data);
  };
  return (
    <>
      <TeacherNavbar />
      <main className="w-full h-screen flex justify-center items-center bg-background text-white">
        <section className="fflex flex-col items-center">
          <h1 className="text-2xl font-semibold text-center mb-2">
            Cambiar Contraseña
          </h1>
          <form className="flex flex-col items-center bg-unicoop-black rounded-md gap-3 p-6" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
              type="password"
              id="usuOldPassword"
              name="usuOldPassword"
              placeholder="Contraseña anterior"
              required
              {...register("usuOldPassword", { required: true })}
            />
            {errors.usuOldPassword && (
        <p className="text-red-500 text-sm font-semibold">
          Debe ingresar una contraseña
        </p>
      )}
            {!passwordMatch && (
              <p className="text-red-500 text-sm font-semibold">
                Las contraseñas no coinciden
              </p>
            )}
            <input
              className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
              type="password"
              id="usuPassword"
              name="usuPassword"
              placeholder="Nueva contraseña"
              required
              {...register("usuPassword", { required: true })}
            />
            {errors.usuPassword && (
        <p className="text-red-500 text-sm font-semibold">
          Debe ingresar una contraseña
        </p>
      )}
            <input
              className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              required
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
        <p className="text-red-500 text-sm font-semibold">
          Debe ingresar una contraseña
        </p>
      )}
            <button
              className="flex items-center p-1.5 mt-4 gap-1 bg-buttons-update-green hover:bg-buttons-update-green-h text-unicoop duration-150 rounded"
              type="submit"
            >
              Cambiar Contraseña
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default ResetPasswordTeacher;
