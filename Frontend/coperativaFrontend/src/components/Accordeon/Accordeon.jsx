import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const Accordeon = ({title, children}) =>{
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return(
        <article className={`${open ? "mb-2": ""}`}>
            <button className={`flex justify-between items-center text-lg w-full hover:bg-gray-200 duration-150 p-3 border-b-2 ${open ? "text-blue-500 font-semibold bg-gray-100": "text-black bg-white"}`} onClick={handleOpen} aria-expanded={open} aria-controls="accordion-contenido">
                <h2>{title}</h2>
                <IoIosArrowDown className={`md:text-lg transition-all duration-300 ${open ? 'rotate-180':''}`}/>
            </button>
            <div className={`ml-3 overflow-hidden ${open ? 'max-h-full' : 'max-h-0'}`}>
                {children}
            </div>
        </article>
    );
}

export default Accordeon;

Accordeon.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}