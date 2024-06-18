import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center bg-[#1f324e] w-full h-screen'>
                <img className="w-[500px] h-[200px] rounded-[20%]" src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="Logo" />
                <div className='p-[16px] flex flex-col justify-center items-center bg-[#385075] rounded'>
                    <input className= "w-[18rem] h-[3rem] text-xl text-[#666] text-center" type="text" placeholder="Introduzca el código" />
                    <button onClick={() => navigate('/student')} className='w-[18rem] h-[3rem] bg-[#404142] text-white text-xl border-none rounded flex justify-center items-center mt-[10px] hover:bg-[#365583]'>Enviar</button>
                </div>
                <h3 className='text-white mt-[40px]'>Si no eres estudiante, dale click <a className='text-cyan-400 hover:text-[#11a3f1]' href='/login'>aqui</a> para crear un codigo</h3>
                
        </div>
    );
}

export default MainPage;
