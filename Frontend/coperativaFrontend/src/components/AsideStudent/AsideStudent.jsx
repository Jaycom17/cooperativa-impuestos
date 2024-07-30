//Importación de librerías
import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//Importación de componentes
import { RoomContext } from "../../context/RoomContext";
import { StudentContext } from "../../context/StuContext";
//Importación de iconos
import { GrFormClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";

/**
 * Componente lateral para navegación y visualización de formularios del estudiante.
 *
 * Este componente proporciona un menú lateral para navegar entre diferentes formularios,
 * así como un botón para salir de la sala.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el componente de menú lateral para el estudiante.
 */
const AsideStudent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const asideRef = useRef(null);

  const { leaveRoom } = useContext(RoomContext);
  const { logout } = useContext(StudentContext);

  /**
   * Maneja la salida de la sala y la sesión del estudiante.
   *
   * @async
   * @function
   */
  const handleLeaveRoom = async() => {
    leaveRoom();
    await logout();
  };

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
   * Maneja la apertura y cierre del menú lateral.
   */
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const forms = [
    { label: "Formulario 110", to: "/form110" },
    { label: "Detalle reglones 110", to: "/detalleReng" },
    { label: "Caratula", to: "/caratulaform" },
    { label: "ESF patrimonio", to: "/esfpatrimonioform" },
    { label: "Renta liquida", to: "/rentaliquida" },
    { label: "Impuesto diferido", to: "/impuestodiferido" },
    { label: "Ingresos y facturación", to: "/ingrefactform" },
    { label: "Activos fijos", to: "/activosfijos" },
    { label: "Resumen ESF ERI", to: "/resumenesf" },
  ];

  return (
    <section className="absolute md:relative">
      <button className="flex md:hidden cursor-pointer items-center text-unicoop rounded-br-lg h-12 px-2 bg-primary hover:bg-unicoop-slate-blue duration-200" onClick={handleMenuOpen}>
        <MdMenu className="text-2xl"/>
      </button>
      <aside className={`fixed md:relative overflow-auto top-0 min-h-screen h-full w-[200px] bg-primary md:translate-x-0 transition-transform duration-150 ${ isMenuOpen ? "translate-x-0" : "-translate-x-full" }`} ref={asideRef} >
        <button className="flex w-full justify-center hover:bg-unicoop-slate-blue mt-2 md:hidden " onClick={handleMenuOpen}>
          <GrFormClose className="hover:animate-spin-once cursor-pointer text-unicoop hover:text-buttons-closing-red text-3xl"  />
        </button>
        <Link className="flex items-center justify-center w-full md:mt-6 p-3 bg-transparent text-white text-sm md:text-base hover:bg-buttons-list-blue duration-200 font-medium" to="/student">
          Inicio
        </Link>
        <div className="flex flex-col items-center md:mt-2 p-4 text-center font-semibold">
          <h1 className="text-white md:text-xl bg-transparent">FORMULARIOS</h1>
        </div>
        <section className="flex flex-col text-center bg-transparent text-unicoop border-y-2">
          {forms.map((form, index) => (
            <Link
              key={index}
              className="flex items-center justify-center w-full p-4 bg-transparent text-white text-sm md:text-base hover:bg-unicoop-slate-blue duration-200 font-medium"
              to={form.to}
            >
              {form.label}
            </Link>
          ))}
        </section>
        <button
          className="flex items-center justify-center w-full p-4 bg-transparent text-white hover:bg-buttons-closing-red duration-200 font-medium mt-[20px]"
          onClick={handleLeaveRoom}
        >
          Salir de la sala
        </button>
      </aside>
    </section>
  );
};

export default AsideStudent;
