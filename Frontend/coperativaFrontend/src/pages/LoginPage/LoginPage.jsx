import { login } from "../../services/login.service";
import { useNavigate } from "react-router-dom";

import UsersLogForm from "../../components/loginForms/UsersLogForm";


const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    if(values.usuEmail === 'admin') { navigate('/admin');}
    else { navigate('/teacher'); }
    login(values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="flex flex-col bg-background mx-auto items-center min-h-screen place-content-center">
      <img src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="logo universidad cooperativa" className="w-11/12 md:w-96"/>
      <section className="p-6 w-11/12 md:w-[400px] bg-unicoop-black rounded-lg">
        <UsersLogForm onSubmit={onSubmit}/>
      </section>
      <p className="text-unicoop mt-5 font-medium text-center">¿Tienes un código de sala? <a className="text-unicoop-blue hover:text-buttons-list-blue " href='/'>¡Únete!</a></p>
    </main>
  );
};

export default LoginPage;
