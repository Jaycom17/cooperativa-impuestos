import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from 'react';
import PropTypes from "prop-types";
import FloatingContainer from "../FloatingContainer/FloatingContainer";
import ProfForm from "../ProfForm/ProfForm";
import { deleteProfessor } from "../../services/professor.service";

const Professor = ({professor, onRefresh}) => {
    const [formOpen, setFormOpen] = useState(false);

    const handleDelete = (profId) =>{
        const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar al profesor ${professor.usuName}?`);
        if (confirmDelete) {
            deleteProfessor(profId).then((response) =>{
                if(response.status === 200){
                    alert("Se ha eliminado el profesor correctamente");
                    onRefresh();
                }
            }).catch(() =>{
                alert("Error al eliminar al profesor");
            });
        }
    };

    return (
        <section className="flex flex-col items-center w-4/5 sm:1/3 lg:w-[375px] bg-primary rounded-lg text-unicoop">
            <h1 className="text-2xl font-bold mx-1">{professor.usuName}</h1>
            <h2 className="text-lg"><span className="font-medium">E-mail:</span> {professor.usuEmail}</h2>
            <div className="flex items-center gap-3 mt-2 mb-3">
                <button onClick={() => setFormOpen(true)} className="flex items-center p-1.5 bg-buttons-update-green hover:bg-buttons-update-green-h duration-150 rounded">
                <FaPencilAlt className='bg-transparent'/> Actualizar
                </button>
                <button onClick={() => handleDelete(professor.usuID)} className="flex items-center p-1.5 bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded">
                <FaRegTrashAlt className='bg-transparent'/> Eliminar
                </button>
            </div>

            <FloatingContainer open={formOpen} setOpen={setFormOpen}>
                <ProfForm profId={professor.usuID} onRefresh={onRefresh} setOpen={setFormOpen}/>
            </FloatingContainer>
        </section>
    );
};

export default Professor;

Professor.propTypes = {
    professor: PropTypes.shape({
        usuName: PropTypes.string,
        usuEmail: PropTypes.string,
        usuID: PropTypes.string
    }),
    onRefresh: PropTypes.func
}