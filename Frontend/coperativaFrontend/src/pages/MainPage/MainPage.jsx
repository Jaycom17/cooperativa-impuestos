import { RoomContext } from "../../context/RoomContext";
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import StudentLogForm from '../../components/LoginForms/StudentLogForm'

function MainPage() {
  const { checkRoom, currentRoom } = useContext(RoomContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentRoom) return;

    navigate('/middlewarestudent');
  }, [currentRoom, navigate]);


    const onSubmit = async(values) => {
        await checkRoom(values);
      };

    return (
        <main className="flex flex-col mx-auto items-center min-h-screen place-content-center bg-background">
            <img src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="logo universidad cooperativa" className="w-11/12 md:w-96"/>
            <section className="p-6 w-11/12 md:w-[400px] bg-unicoop-black rounded-lg">
                <StudentLogForm onSubmit={onSubmit}/>
            </section>
            <p className="text-unicoop mt-5 font-medium text-center">¿No eres un estudiante? <Link className="text-unicoop-blue hover:text-buttons-list-blue " to='/login'>¡Inicia sesión!</Link></p>
        </main>
    );
}

export default MainPage;
