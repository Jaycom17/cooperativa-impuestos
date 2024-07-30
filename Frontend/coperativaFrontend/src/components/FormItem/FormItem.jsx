//Importación de librerías
import PropTypes from "prop-types";
//Importación de imágenes
import Formulario from '../../assets/Formulario.png'

/**
 * Componente de elemento de formulario.
 *
 * Este componente representa un enlace a un formulario específico con una imagen y un nombre.
 * Al pasar el mouse sobre el elemento, se amplía ligeramente y cambia el color de fondo.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.name - El nombre del formulario a mostrar.
 * @param {string} props.to - La URL a la que se redirige al hacer clic en el elemento.
 * @returns {JSX.Element} Elemento JSX que representa un elemento de formulario.
 */
const FormItem = ({name, to}) => {
    return (
        <a href={to} className="flex items-center hover:scale-105 hover:bg-slate-100 duration-150 justify-center w-full flex-col rounded-2xl p-2">
        <img src={Formulario} alt="Logo de formulario" className="h-10 rounded-t-lg" />
            <h3 className=" font-semibold text-center">
                {name}
            </h3>
        </a>
    );
};

FormItem.propTypes ={
    name: PropTypes.string,
    to: PropTypes.string
}

export default FormItem;
