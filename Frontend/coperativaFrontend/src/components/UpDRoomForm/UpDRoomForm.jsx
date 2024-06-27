import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


const UpDRoomForm = ({formOpen, setFormOpen, onUpdate}) =>{
    return(
        <div className={`fixed inset-0 bg-black bg-opacity-50 h-screen flex justify-center items-center transition-opacity duration-300 text-unicoop ${formOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{zIndex:120}}>
            <form className={`bg-unicoop-black shadow-md mx-auto w-2/3 p-6 border rounded-md flex flex-col items-center transition-transform duration-300 transform ${formOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-10'}`}>
                <h1 className="text-2xl font-semibold text-center">Actualizar datos de la sala</h1>
                <p className="text-center">A continuación, puede actualizar el nombre o el código de la sala.</p>
                <section className="flex flex-col md:flex-row gap-3 w-11/12 mt-3">
                    <div className="w-full flex flex-col items-center">
                    <input
                        type="text"
                        className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
                        placeholder="Nombre"
                    />
                    </div>
                    <div className="w-full flex flex-col items-center">
                    <input
                        type="text"
                        className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background text-center border-solid border-unicoop border"
                        placeholder="Código"
                    />
                    </div>
                </section>
                <div className="flex items-center gap-3 mt-4 mb-3">
                    <button className="flex items-center p-1.5 gap-1 bg-buttons-update-green hover:bg-buttons-update-green-h duration-150 rounded">
                        <FaCheckCircle className='bg-transparent'/> Confirmar
                    </button>
                    <button type="button" className="flex items-center p-1.5 gap-1 bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded" onClick={() => setFormOpen(false)}>
                        <MdCancel className='bg-transparent'/> Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpDRoomForm;