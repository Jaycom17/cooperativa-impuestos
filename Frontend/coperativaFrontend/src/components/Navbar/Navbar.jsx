import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import AccountDropdown from "../accountDrop/AccountDropdown";

const Navbar = ({ onCerrarSesion, onCrearProfesor, onActualizarDatos,onLista }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navButtons = [
        {
            label: "Lista de profesores",
            hoverProps: "hover:bg-buttons-list-blue",
            onClick: onLista
        },
        {
            label: "Crear profesor",
            hoverProps: "hover:bg-unicoop-green",
            onClick: onCrearProfesor
        }
    ];

    const buttonStyle = "text-unicoop-white bg-primary w-40 h-10 rounded transition-colors duration-200 ease-in";

    return (
      <nav className="flex justify-between items-center p-4 bg-primary">
        <h1 className="bg-primary font-semibold text-2xl text-unicoop-white my-auto">Administrador</h1>
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
        <div className={`fixed w-full h-screen md:hidden bg-primary/50 backdrop-blur-sm top-0 right-0 ${isMenuOpen ? '': 'hidden'}`}>
            <section className="text-unicoop-white bg-primary flex-col absolute right-0 top-0 h-screen p-8 gap-4 z-50 flex font-semibold w-56 items-center">
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
  
  export default Navbar;