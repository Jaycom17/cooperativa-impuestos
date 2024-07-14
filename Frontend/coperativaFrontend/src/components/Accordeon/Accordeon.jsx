import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const Accordeon = ({title, children, arrayIndex, onAdd, onQuit}) =>{
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return(
        <article className={`${open ? "mb-2": ""}`}>
            {arrayIndex === '0' && (
                <div className="flex gap-2 justify-center">
                    <button onClick={onAdd}>Mas</button>
                    <button onClick={onQuit}>Menos</button>
                </div>
            )}
            <button className={`flex justify-between items-center text-lg w-full hover:bg-gray-200 duration-150 p-3 border-b-2 ${open ? "text-blue-500 font-semibold bg-gray-100": "text-black bg-white"}`} onClick={handleOpen} aria-expanded={open} aria-controls="accordion-contenido">
                <h2>{title}</h2>
                <IoIosArrowDown className={`md:text-lg transition-all duration-300 ${open ? 'rotate-180':''}`}/>
            </button>
            <div className={`ml-3 overflow-hidden ${open ? 'max-h-full' : 'max-h-0'}`}>
                <div className={`${children[0] && children[0].type === "div" && "grid grid-cols-3 gap-2  p-2"}`}>
                    {children}
                </div>
            </div>
        </article>
    );
}

export default Accordeon;

Accordeon.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    arrayIndex: PropTypes.string,
    onAdd: PropTypes.func,
    onQuit: PropTypes.func
}
