//Importación de librerías
import { useState } from "react";
import PropTypes from "prop-types";
//Importación de iconos
import { FaCircleInfo } from "react-icons/fa6";

/**
 * Componente de burbuja de información.
 *
 * Este componente muestra un icono de información que, al pasar el mouse sobre él,
 * despliega una burbuja con información adicional.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.info - El texto de información a mostrar en la burbuja.
 * @param {string} props.colorMode - El modo de color del componente, puede ser 'light' o 'dark'.
 * @returns {JSX.Element} Elemento JSX que representa una burbuja de información.
 */
const InfoBubble = ({info, colorMode}) => {
    const [hovered, setHovered] = useState(false);

    const color = colorMode === 'light' ? "text-primary hover:text-unicoop-slate-blue bg-transparent": "text-unicoop hover:text-slate-300 bg-primary";

    return(
        <div className="relative inline-block items-center">
            <FaCircleInfo
                className={`size-5 rounded-full duration-150 cursor-pointer ${color}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <div className={`absolute top-full left-32 -translate-x-1/2 mt-2 p-2 w-64 bg-white text-black rounded shadow-lg z-10 ${hovered ? '' : 'hidden'}`}>
                {info}
            </div>
        </div>
    );
};

export default InfoBubble;

InfoBubble.propTypes = {
    info: PropTypes.string,
    colorMode: PropTypes.string
};

