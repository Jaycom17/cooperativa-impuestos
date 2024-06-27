import { useState, useRef, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import AccountDropdown from "../AccountDrop/AccountDropdown";
import PropTypes from 'prop-types'

const TeacherNavbarTW = ({nombreProfesor, onCerrarSesion, onCrearSala, onActualizarDatos, onLista }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (!nombreProfesor || typeof nombreProfesor !== 'string') {
        nombreProfesor = 'Nombre_docente';
    }

    const tNavRef = useRef(null);

    // Función para cerrar el menú desplegable al hacer clic fuera de él
    useEffect(() => {
        function handleClickOutside(event) {
            if (tNavRef.current && !tNavRef.current.contains(event.target)) {
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
            label: "Lista de salas",
            hoverProps: "hover:bg-buttons-list-blue",
            onClick: onLista
        },
        {
            label: "Actualizar datos",
            hoverProps: "hover:bg-unicoop-green",
            onClick: onCrearSala
        }
    ];

    const buttonStyle = "text-unicoop-white bg-primary w-40 h-10 rounded transition-colors duration-200 ease-in";

    return (

      <nav className="flex justify-between items-center p-4 bg-primary w-full z-50">

        <h1 className="bg-primary font-semibold text-2xl text-unicoop-white my-auto">{nombreProfesor}</h1>
        <div className="flex gap-3 bg-primary font-semibold">
            <MdMenu className="text-3xl bg-primary text-unicoop-white md:hidden cursor-pointer hover:text-unicoop-yellow" onClick={() => setIsMenuOpen(true)}/>
        </div>
        <section className="gap-3 bg-primary font-semibold hidden md:flex">
            {navButtons.map((data, i)=>(
                <button key={i} className={`${buttonStyle} ${data.hoverProps}`} onClick={data.onClick}>{data.label}</button>
            ))}
            <AccountDropdown
            onActualizarDatos={onActualizarDatos}
            onCerrarSesion={onCerrarSesion}
            />
        </section>
        
        
        {/*Menu lateral*/}
        <div className={`fixed w-full h-screen md:hidden bg-primary/50 backdrop-blur-sm top-0 right-0 transition-transform duration-150 ${isMenuOpen ? '-translate-x-0': 'translate-x-full'} z-20`}>
            <section className="text-unicoop-white bg-primary flex-col absolute right-0 top-0 h-screen p-8 gap-4 z-50 flex font-semibold w-56 items-center" ref={tNavRef}>
                <GrFormClose onClick={() => setIsMenuOpen(false)} className="text-3xl bg-primary cursor-pointer hover:animate-spin-once hover:text-buttons-closing-red"/>
                <AccountDropdown
                    onActualizarDatos={onActualizarDatos}
                    onCerrarSesion={onCerrarSesion}
                    />
                {navButtons.map((data, i)=>(
                    <button key={i} className={`${buttonStyle} ${data.hoverProps}`} onClick={data.onClick}>{data.label}</button>
                ))}
            </section>
        </div>
        {/*Hasta aquí el menú lateral*/}
      </nav>
    );
  };

  TeacherNavbarTW.propTypes = {
    nombreProfesor: PropTypes.string.isRequired,
    onCerrarSesion: PropTypes.func.isRequired,
    onCrearSala: PropTypes.func.isRequired,
    onActualizarDatos: PropTypes.func.isRequired,
    onLista: PropTypes.func.isRequired
  };
  
  export default TeacherNavbarTW;