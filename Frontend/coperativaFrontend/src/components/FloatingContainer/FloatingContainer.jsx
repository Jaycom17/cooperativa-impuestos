//Importación de librerías
import PropTypes from "prop-types";
//Importación de iconos
import { MdCancel } from "react-icons/md";

/**
 * Componente de contenedor flotante.
 *
 * Este componente muestra un contenedor flotante centrado en la pantalla con una superposición oscura de fondo.
 * El contenedor puede abrirse y cerrarse mediante un botón de cierre.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {boolean} props.open - Estado que indica si el contenedor está abierto.
 * @param {Function} props.setOpen - Función para cambiar el estado de apertura del contenedor.
 * @param {React.ReactNode} props.children - Elementos secundarios a mostrar dentro del contenedor.
 * @returns {JSX.Element} Elemento JSX que representa el contenedor flotante.
 */
const FloatingContainer = ({open, setOpen, children}) =>{
  return(
      <div className={`fixed inset-0 bg-black bg-opacity-50 h-screen flex flex-col justify-center items-center transition-opacity duration-300 text-unicoop ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{zIndex:120}}>
        <div className={`shadow-md mt-5 border rounded-md mx-auto w-4/5 md:w-2/3 transition-transform duration-300 transform overflow-auto ${open ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-10'}`}>
          {children}
        </div>
        <button type="button" className="flex items-center my-3 gap-1 p-1.5 mx-auto bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded" onClick={() => setOpen(false)}>
            <MdCancel className='bg-transparent text-lg'/> Cerrar
        </button>
      </div>
  );
}

export default FloatingContainer;

FloatingContainer.propTypes = {
  open: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node
}