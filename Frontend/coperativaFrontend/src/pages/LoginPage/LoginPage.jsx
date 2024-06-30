import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import UsersLogForm from "../../components/loginForms/UsersLogForm";


const LoginPage = () => {
  const navigate = useNavigate();

  const { singin, user } = useContext(AuthContext);

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

  

  const onSubmit = async (values) => {
    await singin(values);
  };

  return (  
    <main className="flex flex-col bg-background mx-auto items-center min-h-screen place-content-center">
      <img src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="logo universidad cooperativa" className="w-11/12 md:w-96"/>
      <section className="p-6 w-11/12 md:w-[400px] bg-unicoop-black rounded-lg">
        <UsersLogForm onSubmit={onSubmit}/>
      </section>
      <p className="text-unicoop mt-5 font-medium text-center">¿Tienes un código de sala? <Link className="text-unicoop-blue hover:text-buttons-list-blue " to='/'>¡Únete!</Link></p>
    </main>
  );
};

export default LoginPage;
