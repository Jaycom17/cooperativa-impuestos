import React from 'react';
import { useNavigate } from "react-router-dom";
import StudentLogForm from '../../components/loginForms/StudentLogForm'
import { login } from '../../services/login.service';

function MainPage() {
    const navigate = useNavigate();

    const onSubmit = (values) => {
        console.log(values);
        if(values.roomID) { navigate('/student');}
        login(values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    return (
        <main className="flex flex-col mx-auto items-center min-h-screen place-content-center bg-background">
            <img src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="logo universidad cooperativa" className="w-11/12 md:w-96"/>
            <section className="p-6 w-11/12 md:w-[400px] bg-unicoop-black rounded-lg">
                <StudentLogForm onSubmit={onSubmit}/>
            </section>
            <p className="text-unicoop mt-5 font-medium text-center">¿No eres un estudiante? <a className="text-unicoop-blue hover:text-buttons-list-blue " href='/login'>¡Inicia sesión!</a></p>
        </main>
    );
}

export default MainPage;
