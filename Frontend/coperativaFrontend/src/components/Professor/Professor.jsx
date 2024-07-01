import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from 'react';
import PropTypes from "prop-types";
import FloatingContainer from "../FloatingContainer/FloatingContainer";
import ProfForm from "../ProfForm/ProfForm";

const Professor = ({professor, onRefresh}) => {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <section className="flex flex-col items-center w-4/5 sm:1/3 lg:w-[375px] bg-primary rounded-lg text-unicoop">
            <h1 className="text-2xl font-bold mx-1">{professor.usuName}</h1>
            <div className="flex items-center gap-3 mt-2 mb-3">
                <button onClick={() => setFormOpen(true)} className="flex items-center p-1.5 bg-buttons-update-green hover:bg-buttons-update-green-h duration-150 rounded">
                <FaPencilAlt className='bg-transparent'/> Actualizar
                </button>
                <button className="flex items-center p-1.5 bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded">
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
        usuID: PropTypes.string
    }),
    onRefresh: PropTypes.func
}