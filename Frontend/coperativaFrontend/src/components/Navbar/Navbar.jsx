//Importación de librerías
import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//Importación de componentes
import AccountDropdown from "../AccountDrop/AccountDropdown";
import { AuthContext } from "../../context/AuthContext";
//Importación de iconos
import { MdMenu } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";

/**
 * Componente de barra de navegación.
 *
 * Este componente proporciona una barra de navegación para un administrador,
 * que incluye un menú desplegable para cuentas, botones de navegación y un
 * menú lateral para dispositivos móviles.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la barra de navegación.
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const { singout } = useContext(AuthContext);

    const navRef = useRef(null);

    /**
     * Función para cerrar el menú desplegable al hacer clic fuera de él.
     * 
     * @function
     * @param {Event} event - El evento de clic del mouse.
     */
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navButtons = [
        {
            label: "Lista de profesores",
            hoverProps: "hover:bg-buttons-list-blue",
            to: "/admin",
        },
        {
            label: "Crear profesor",
            hoverProps: "hover:bg-unicoop-green",
            to: "/createprofessor",
        }
    ];

    const buttonStyle = "text-unicoop-white bg-primary w-40 h-10 rounded transition-colors duration-200 ease-in flex justify-center items-center z-50";

    return (
      <nav className="flex justify-between items-center p-4 bg-primary">
        <h1 className="bg-primary font-semibold text-2xl text-unicoop-white my-auto">Administrador</h1>
        <div className="flex gap-3 bg-primary font-semibold">
            <MdMenu className="text-3xl bg-primary text-unicoop-white md:hidden cursor-pointer hover:text-unicoop-yellow" onClick={() => setIsMenuOpen(true)}/>
        </div>
        <section className="gap-3 bg-primary font-semibold hidden md:flex">
            {navButtons.map((data, i)=>(
                <Link to={data.to} key={i} className={`${buttonStyle} ${data.hoverProps}`}>{data.label}</Link>
            ))}
            <AccountDropdown
                onCerrarSesion={singout}
                onActualizarDatos={() => navigate("/updateinfoadmin")}
            />
        </section>
        
        <div className={`fixed w-full h-screen md:hidden bg-primary/50 backdrop-blur-sm top-0 right-0 transition-transform duration-150 ${isMenuOpen ? '-translate-x-0': 'translate-x-full'} z-20`} >
            <section className="text-unicoop-white bg-primary flex-col absolute right-0 top-0 h-screen p-8 gap-4 z-50 flex font-semibold w-56 items-center" ref={navRef}>
                <GrFormClose onClick={() => setIsMenuOpen(false)} className="text-3xl bg-primary cursor-pointer hover:animate-spin-once hover:text-buttons-closing-red"/>
                <AccountDropdown
                    onCerrarSesion={singout}
                    />
                {navButtons.map((data, i)=>(
                    <Link to={data.to} key={i} className={`${buttonStyle} ${data.hoverProps}`}>{data.label}</Link>
                ))}
            </section>
        </div>
      </nav>
    );
  };
  
  export default Navbar;