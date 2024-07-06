import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const Accordeon = ({title, children}) =>{
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contenidoRef = useRef(null);

    const handleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (open) {
          setHeight(`${contenidoRef.current.scrollHeight}px`);
        } else {
          setHeight("0px");
        }
      }, [open]);

    return(
        <article>
            <button className={`flex justify-between items-center text-lg w-full hover:bg-gray-200 duration-150 p-3 border-b-2 ${open ? "text-blue-500 font-semibold bg-gray-100": "text-black bg-white"}`} onClick={handleOpen} aria-expanded={open} aria-controls="accordion-contenido">
                <h2>{title}</h2>
                <IoIosArrowDown className={`md:text-lg transition-all duration-300 ${open ? 'rotate-180':''}`}/>
            </button>
            <div ref={contenidoRef} style={{height}} className="ml-3 overflow-hidden transition-height duration-300 ease-in-out">
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