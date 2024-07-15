import { useState, useContext, useEffect } from "react";
import { IoCaretBackSharp } from "react-icons/io5";
import { RoomContext } from "../../context/RoomContext";
import { StudentContext } from "../../context/StuContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const OPTIONS = {
  SI: "SI",
  NO: "NO",
  NOTHING: "NOTHING",
};

function MiddlewareStudent() {
  const [firstTime, setFirstTime] = useState(OPTIONS.NOTHING);

  const [animationClass, setAnimationClass] = useState("");

  const { leaveRoom, currentRoom } = useContext(RoomContext);
  const { student, checkStudent, sStudent, studentError } =
    useContext(StudentContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!currentRoom) {
      navigate("/");
    }

    if (student) {
      navigate("/student");
    }
  }),
    [student];

  const onSubmitNew = async (data) => {
    await checkStudent(data);
  };

  const onSubmitSaved = async (data) => {
    await sStudent(data.stuName);
  };

  useEffect(() => {
    console.log(student);
  }, [student]);

  const handleSetFirstTime = (option) => {
    if (option === OPTIONS.SI) {
      setAnimationClass("animate-slide-from-top");
    } else if (option === OPTIONS.NO) {
      setAnimationClass("animate-slide-from-bottom");
    } else {
      setAnimationClass("animate-fade-in");
    }
    setFirstTime(option);
  };

  return (
    <div className="bg-background w-full h-screen flex justify-center items-center flex-col text-white">
      {firstTime === OPTIONS.NOTHING && (
        <div className={`flex flex-col items-center ${animationClass}`}>
          <h2 className="font-semibold text-lg">
            ¿Es la primera vez que entras a la sala?
          </h2>
          <section className="flex gap-6 mt-3">
            <button
              onClick={() => handleSetFirstTime(OPTIONS.SI)}
              className="p-2 bg-green-400 w-16 text-black rounded-md hover:bg-green-300 duration-150 text-lg font-semibold"
            >
              SI
            </button>
            <button
              onClick={() => handleSetFirstTime(OPTIONS.NO)}
              className="p-2 bg-red-400 w-16 text-black rounded-md hover:bg-red-300 duration-150 text-lg font-semibold"
            >
              NO
            </button>
          </section>
          <button
            onClick={() => leaveRoom()}
            className="p-2 bg-unicoop-blue w-auto mt-5 text-black rounded-md hover:bg-buttons-list-blue duration-150 text-lg font-semibold"
          >
            Regresar al inicio
          </button>
        </div>
      )}

      {firstTime === OPTIONS.NO && (
        <div className={`flex flex-col items-center p-3 ${animationClass}`}>
          <h2 className="font-semibold text-3xl">Bienvenido a la sala</h2>
          <p className="text-center mt-3">
            A continuación, escribe el nombre con el cual ingresaste previamente
            a la sala.
          </p>
          <form
            className="flex flex-col w-full items-center gap-2"
            onSubmit={handleSubmit(onSubmitSaved)}
          >
            {studentError && (
              <p className="text-[red] text-sm bg-transparent">
                {studentError}
              </p>
            )}
            <input
              type="text"
              className="w-1/2 p-2 rounded-md border border-gray-300 mt-3 text-black"
              {...register("stuName", { required: true })}
            />
            {errors.stuName && (
              <p className="text-[red] text-sm bg-transparent">
                Debe ingresar un nombre
              </p>
            )}
            <button
              type="submit"
              className="p-2 bg-buttons-login w-24 text-unicoop rounded-md hover:bg-gray-600 duration-150 focus:ring-2 transition-colors ease-in font-medium"
            >
              Buscar
            </button>
          </form>

          <div className="w-full">
            <button
              onClick={() => handleSetFirstTime(OPTIONS.NOTHING)}
              className="flex items-center text-start bg-unicoop-blue w-20 py-1 rounded-lg text-unicoop hover:bg-buttons-list-blue font-semibold"
            >
              <IoCaretBackSharp className="text-sm mt-1 ml-2 mr-1" /> Atrás
            </button>
          </div>
        </div>
      )}

      {firstTime === OPTIONS.SI && (
        <div className={`flex flex-col items-center p-3 ${animationClass}`}>
          <h2 className="font-semibold text-3xl">Bienvenido a la sala</h2>
          <p className="text-center mt-3">
            A continuación escribe el nombre con el cual deseas registrarte en
            la sala.
          </p>
          <form
            className="flex flex-col w-full items-center gap-2"
            onSubmit={handleSubmit(onSubmitNew)}
          >
            {studentError && (
              <p className="text-[red] text-sm bg-transparent">
                {studentError}
              </p>
            )}
            <input
              type="text"
              className="w-1/2 p-2 rounded-md border border-gray-300 mt-3 text-black"
              {...register("stuName", { required: true })}
            />
            {errors.stuName && (
              <p className="text-[red] text-sm bg-transparent">
                Debe ingresar un nombre
              </p>
            )}
            <button
              type="submit"
              className="p-2 bg-buttons-login w-24 text-unicoop rounded-md hover:bg-gray-600 duration-150 focus:ring-2 transition-colors ease-in font-medium"
            >
              Ingresar
            </button>
          </form>
          <div className="w-full">
            <button
              onClick={() => handleSetFirstTime(OPTIONS.NOTHING)}
              className="flex items-center text-start bg-unicoop-blue w-20 py-1 rounded-lg text-unicoop hover:bg-buttons-list-blue font-semibold"
            >
              <IoCaretBackSharp className="text-sm mt-1 ml-2 mr-1" /> Atrás
            </button>
          </div>
          <p className="mt-3 text-center">
            <span className="font-bold">Recomendación:</span> Anota este nombre
            para futuros ingresos a esta sala ;)
          </p>
        </div>
      )}
    </div>
  );
}

export default MiddlewareStudent;
