//Importación de librerías
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
//Importación de iconos
import { GrFormClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";

/**
 * Componente de barra de pestañas que muestra una lista de pestañas y permite navegar entre ellas.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.tabs - Array de objetos que representan las pestañas.
 * @param {string} props.activeTab - Nombre de la pestaña activa.
 * @param {Function} props.setActiveTab - Función para cambiar la pestaña activa.
 * @param {boolean} [props.onReport=false] - Bandera para ajustar el estilo del componente en función de si está en una página de reporte.
 * @returns {JSX.Element} Elemento JSX que representa la barra de pestañas.
 */
const TabBar = ({ tabs, activeTab, setActiveTab, onReport = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const asideRef = useRef(null);

  /**
   * Función para cerrar el menú desplegable al hacer clic fuera de él.
   * 
   * @function
   * @param {Event} event - El evento de clic del mouse.
   */
  useEffect(() => {
    function handleClickOutside(event) {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Maneja la apertura y cierre del menú desplegable.
   */
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const manyOptions = tabs.length > 6;

  return (
    <section className={`absolute z-10 right-0 ${onReport ? "top-16 md:top-0" : "top-0"} md:relative`}>
      <button
        className={`text-black bg-gray-200 hover:bg-gray-300 flex duration-200 p-3 w-28 rounded-bl-lg md:rounded-none ${
          manyOptions ? "md:w-full justify-center" : "justify-end md:hidden"
        } items-center h-12 w-28 `}
        onClick={handleMenuOpen}
      >
        <h1 className="text-sm font-medium">Secciones</h1>
        <MdMenu className="ml-2 text-2xl" />
      </button>
      <nav
        className={`fixed w-[200px] md:w-full overflow-auto md:overflow-visible top-0 right-0 min-h-screen h-full bg-gray-200  md:min-h-fit ${
          manyOptions
            ? `md:absolute ${isMenuOpen ? "" : "hidden"}`
            : `md:bg-transparent md:relative`
        } md:-translate-x-0 transition-transform duration-150 ${
          isMenuOpen ? "-translate-x-0 " : "translate-x-full"
        }`}
        ref={asideRef}
      >
        <button
          className={`flex w-full justify-center text-black hover:text-buttons-closing-red bg-gray-200 hover:bg-gray-100 ${
            manyOptions ? `p-3 ` : "mt-2 md:hidden mb-2"
          }`}
          onClick={handleMenuOpen}
        >
          <GrFormClose className="hover:animate-spin-once text-3xl" />
        </button>
        <section
          className={`${
            manyOptions
              ? "bg-gray-200 p-1 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-0.5"
              : "md:flex md:justify-between"
          }`}
        >
          {tabs &&
            tabs.map((tab, i) => (
              <button
                key={i}
                className={` w-full transition-all duration-150 text-center hover:bg-gray-100 ${
                  manyOptions
                    ? `rounded-md p-3 ${
                        activeTab === tab.name
                          ? "border border-blue-400 bg-gray-50"
                          : ""
                      }`
                    : `p-4 ${
                        activeTab === tab.name
                          ? "border-b-2 border-blue-400 bg-gray-50"
                          : ""
                      }`
                } `}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.label}
              </button>
            ))}
        </section>
      </nav>
    </section>
  );
};

export default TabBar;

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  onReport: PropTypes.bool,
};

/**
 * "text-black text-sm lg:text-lg flex flex-col md:flex-row justify-between mt-2 md:mt-0"
 */
