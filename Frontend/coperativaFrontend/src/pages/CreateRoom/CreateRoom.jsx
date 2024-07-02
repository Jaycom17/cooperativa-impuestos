import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';
import RoomForm from '../../components/RoomForm/RoomForm';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import InfoBubble from '../../components/InfoBubble/InfoBubble';

const CreateRoom = () =>{

  const {user} = useContext(AuthContext);

    return(
        <>
            <TeacherNavbar />
            <main className="w-full min-h-screen bg-background flex justify-center items-center flex-col">
                <article className="px-5 md:px-32 lg:px-60 xl:px-80 mb-5 text-center text-unicoop">
                <h1 className="font-bold text-4xl mb-3">CREAR SALA</h1>
                <h2 className="font-semibold text-xl mb-5">Ingresa los siguientes datos para crear la sala</h2>
                <p className="text-center text-lg"> <InfoBubble info={'La sala se crea con estado inactivo por defecto. Recuerda activarla :)'}/> A continuación, puede crear una sala. Una vez creada y activada, los estudiantes podrán ingresar y trabajar en la misma.</p>
                </article>
                <section className="w-10/12 md:w-4/5 lg:w-3/5">
                    <RoomForm usuId={user.usuID} />
                </section>
            </main>
        </>
    );
};

export default CreateRoom;
