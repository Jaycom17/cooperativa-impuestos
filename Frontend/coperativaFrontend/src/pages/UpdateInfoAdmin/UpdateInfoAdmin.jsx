import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { profile } from "../../services/login.service";
import { updateAdmin } from "../../services/admin.service";

function UpdateInfoAdmin() {
  const [passwordMatch, setPasswordMatch] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    profile()
      .then((response) => {
        if (response.status === 200) {
          const userData = response.data;
          setValue("usuName", userData.usuName);
          setValue("usuEmail", userData.usuEmail);
        }
      })
      .catch(() => {
        alert("Error al cargar la información del usuario");
      });
  }, [setValue]);

  const onSubmit = (data) => {
    if (data.usuPassword !== data.confirmPassword) {
      setPasswordMatch(false);
      setTimeout(() => {
        setPasswordMatch(true);
      }, 5000);
      return;
    }

    const userData = {
      usuName: data.usuName,
      usuEmail: data.usuEmail,
      usuPassword: data.usuPassword,
    };

    updateAdmin(userData).then((response) => {
        if (response.status === 200) {
            alert("Se han actualizado los datos del usuario");
        } else {
            alert("Error al actualizar los datos del usuario");
        }
        }).catch(() => {
            alert("Error al actualizar los datos del usuario");
        });
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-screen flex justify-center items-center bg-background text-white">
        <form
          className="flex flex-col items-center w-[90%] lg:w-[60%] bg-unicoop-black rounded-md gap-3 p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <article className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-center">
              Actualiza tus datos
            </h1>
            <p className="text-center">
              A continuación, puede actualizar sus datos.
            </p>
          </article>
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
                  El nombre no puede quedar vacío
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
                  El email no puede quedar vacío
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
              type={"password"}
              className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
              placeholder="Contraseña"
              {...register("usuPassword", { required: true })}
            />
          </div>
          {errors.usuPassword && (
            <p className="text-red-500 text-sm font-semibold">
              Debe ingresar una contraseña
            </p>
          )}
          <div className="relative w-11/12">
            <input
              type={"password"}
              className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
              placeholder="Repita la contraseña"
              {...register("confirmPassword", { required: true })}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm font-semibold">
              Debe repetir la contraseña
            </p>
          )}
          <button
            type="submit"
            className="flex items-center p-1.5 mt-4 gap-1 bg-buttons-update-green hover:bg-buttons-update-green-h text-unicoop duration-150 rounded"
          >
            {" "}
            Confirmar
          </button>
        </form>
      </main>
    </>
  );
}

export default UpdateInfoAdmin;
