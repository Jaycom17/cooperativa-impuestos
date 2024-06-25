import { useState, useEffect, useRef } from "react";
import { VscAccount } from "react-icons/vsc";

const AccountDropdown = ({onActualizarDatos, onCerrarSesion})=>{
    const [isAccountOptOpen, setIsAccountOptOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleAccOpt = () =>{
        setIsAccountOptOpen(!isAccountOptOpen);
    }
    
    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsAccountOptOpen(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const accountButtons = [
            {
                label: "Cambiar contraseña",
                hoverProps: "hover:bg-unicoop-blue ",
                onClick: onActualizarDatos
            },
            {
                label: "Cerrar sesión",
                hoverProps: "hover:bg-buttons-closing-red",
                onClick: onCerrarSesion
            }
    ]

    const buttonStyle2 = "text-unicoop-black font-semibold bg-unicoop-white w-[100%] h-10 transition-colors duration-200 ease-in hover:text-unicoop-white"

    return(
        <div className="relative inline-block bg-primary mt-5 md:my-auto md:mx-0" ref={dropdownRef}>
            <button
                className="text-3xl text-unicoop-white my-auto mx-auto md:mr-8 transition-colors duration-100 ease-in hover:text-buttons-list-blue cursor-pointer" onClick={handleAccOpt}
            >
            <VscAccount className="bg-primary"/>
            </button>
            {isAccountOptOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-md">
                {accountButtons.map((data, i) => (
                    <li key={i}><button className={`${buttonStyle2} ${data.hoverProps}`} onClick={data.onClick}>{data.label}</button></li>
                ))}
                </ul>
            )}
        </div>
    );
};

export default AccountDropdown;