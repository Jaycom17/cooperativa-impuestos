import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createProfessor } from "../../services/professor.service";
import { useNavigate } from "react-router-dom";
import ProfForm from "../../components/ProfForm/ProfForm";

function CreateProfessor() {
    const [passwordMatch, setPasswordMatch] = useState(true);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
      if (data.usuPassword !== data.confirmPassword) {
        setPasswordMatch(false);
        setTimeout(() => {
          setPasswordMatch(true);
        }, 5000);
        return;
      }

        const professorToCreate = {
            usuName: data.usuName,
            usuEmail: data.usuEmail,
            usuPassword: data.usuPassword,
        }

        createProfessor(professorToCreate).then((response) => {
          if (response.status === 200) {
            alert("Profesor creado exitosamente");
            navigate("/admin");
          }else{
            alert("Error al crear el profesor");
          }
        }).catch(() => {
          alert("Error al crear el profesor");
        });
      };
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-background flex justify-center items-center flex-col">
        <article className="px-5 md:px-32 lg:px-60 xl:px-80 mb-5 text-center text-unicoop">
          <h1 className="font-bold text-4xl mb-3">CREAR PROFESOR</h1>
          <h2 className="font-semibold text-xl mb-5">Ingresa los siguientes datos del profesor para crearlo</h2>
          <p className="text-justify lg:text-center text-lg">A continuación, puede crear un profesor. Una vez creado, podrá crear y gestionar salas. Por favor, revise cuidadosamente la información para evitar inconvenientes futuros.</p>
        </article>
        <section className="w-10/12 md:w-3/5 lg:2/5">
          <ProfForm onSubmit={handleSubmit(onSubmit)} passwordMatch={passwordMatch} errors={errors} register={register}/>
        </section>
      </main>
    </>
  );
}

export default CreateProfessor;
