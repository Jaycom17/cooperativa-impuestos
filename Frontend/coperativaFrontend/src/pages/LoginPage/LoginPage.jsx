import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, user, loginError } = useContext(AuthContext);

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

  return (
    <main className="flex flex-col   mx-auto items-center min-h-screen place-content-center bg-[#1f324e] w-screen">
      <img
        src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png"
        alt="logo universidad cooperativa"
      />
      <section className="px-6 w-96">
        <form
          className="flex flex-col items-center bg-[#385075] rounded-md"
          onSubmit={handleSubmit(async (values) => {
            await singin(values);
          })}
        >
          <h1 className="text-2xl text-white bg-[#385075] mt-4">
            Iniciar sesión
          </h1>
          {loginError && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              {loginError}
            </p>
          )}
          <input
            type="email"
            placeholder="Usuario"
            name="username"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            {...register("usuEmail", { required: true })}
          />
          {errors.usuEmail && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              debe ingresar el email
            </p>
          )}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            name="password"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            {...register("usuPassword", { required: true })}
          />
          {errors.usuPassword && (
            <p className="text-red-500 text-sm bg-[#385075] font-semibold">
              debe ingresar la contraseña
            </p>
          )}
          <label className="text-white w-[90%] text-start">
            <input
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
            />
            Mostrar contraseña
          </label>
          <button className="bg-[#404142] text-unicoop-white w-[90%] p-2 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in">
            Ingresar
          </button>
        </form>
      </section>
      <h3 className='text-white mt-[40px]'>Si eres estudiante, dale click <Link className='text-cyan-400 hover:text-[#11a3f1]' to='/'>aqui</Link> para acceder a una sala</h3>
    </main>
  );
};

export default LoginPage;
