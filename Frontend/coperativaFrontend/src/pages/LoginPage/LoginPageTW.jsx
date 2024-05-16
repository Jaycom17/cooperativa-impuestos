import { useForm } from "react-hook-form";
import { login } from "../../services/login.service";
import { useNavigate } from "react-router-dom";

const LoginPageTW = () => {
    
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <main className="flex flex-col max-w-md  mx-auto items-center min-h-screen place-content-center">
      <img
        src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png"
        alt="logo universidad cooperativa"
      />
      <section className="p-6 w-96">
        <form
          className="flex flex-col items-center bg-[#385075] rounded-md"
          onSubmit={handleSubmit((values) => {
            console.log(values);
            if(values.usuEmail == 'admin'){
              navigate('/lista')
            }else{
              navigate('/teacher')
            }
            login(values)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          })}
        >
          <h1 className="text-2xl text-white bg-[#385075] mt-4">
            Iniciar sesión
          </h1>
          {errors.usuEmail && (
            <p className="text-[red] text-sm bg-[#385075]">
              debe ingresar el email
            </p>
          )}
          <input
            type="text"
            placeholder="Usuario"
            name="username"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2 text-unicoop-white"
            {...register("usuEmail", { required: true, type: "email" })}
          />
          {errors.usuPassword && (
            <p className="text-[red] text-sm bg-[#385075]">
              debe ingresar la contraseña
            </p>
          )}
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"
            {...register("usuPassword", { required: true })}
          />
          <button className="bg-[#404142] text-unicoop-white w-[90%] p-2 rounded-md my-4 hover:bg-gray-600 focus:ring-2 transition-colors duration-200 ease-in">
            Ingresar
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPageTW;
