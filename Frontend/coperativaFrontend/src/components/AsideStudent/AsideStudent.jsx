import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { GrFormClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";


const AsideStudent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Función para cerrar el menú desplegable al hacer clic fuera de él
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuOpen = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const forms = [
        {label: "Formulario 110", to:"/"},
        {label: "Detalle reglones 110", to:"/"},
        {label: "Caratula", to:"/"},
        {label: "ESF patrimonio", to:"/esfpatrimonioform"},
        {label: "Renta liquida", to:"/"},
        {label: "Impuesto diferido", to:"/"},
        {label: "Ingresos y facturación", to:"/"},
        {label: "Activos fijos", to:"/"},
        {label: "Resumen ESF ERI", to:"/"},
    ];

    return (
        <section className="absolute md:relative">
            <div className="flex md:hidden cursor-pointer items-center text-unicoop rounded-br-lg h-12 w-28 bg-primary hover:bg-unicoop-slate-blue duration-200" onClick={handleMenuOpen}>
                <MdMenu className="text-2xl"/>
                <h1 className="text-sm font-medium">MENÚ</h1>
            </div>
            <aside className={`fixed md:relative top-0 min-h-screen h-full w-[200px] bg-primary md:translate-x-0 backdrop-blur-sm transition-transform duration-150 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} ref={menuRef}>
                <div className="flex w-full justify-center mt-2 md:hidden ">
                    <GrFormClose className="hover:animate-spin-once cursor-pointer text-unicoop hover:text-buttons-closing-red text-3xl" onClick={handleMenuOpen}/>
                </div>
                <div className="flex flex-col items-center bg-transparent p-4 text-center font-semibold">
                    <h1 className="text-white md:text-xl md:mt-[10px] bg-transparent">Nombre del estudiante</h1>
                </div>
                <Link className="flex items-center justify-center w-full h-[40px] md:h-[50px] bg-transparent text-white text-sm md:text-base hover:bg-buttons-list-blue duration-200 font-medium" to="/student">Inicio</Link>
                <div className="flex flex-col items-center md:mt-2 p-4 text-center font-semibold">
                    <h1 className="text-white md:text-xl bg-transparent">FORMULARIOS</h1>
                </div>
                <section className="flex flex-col text-center bg-transparent text-unicoop border-y-2">
                    {forms.map((form, index) => (
                        <Link key={index} className="flex items-center justify-center w-full h-[40px] md:h-[50px] bg-transparent text-white text-sm md:text-base hover:bg-unicoop-slate-blue duration-200 font-medium" to={form.to}>{form.label}</Link>
                    ))}
                </section>
                <Link className="flex items-center justify-center w-full h-[50px] bg-transparent text-white hover:bg-buttons-closing-red duration-200 font-medium mt-[20px]" to="">Salir de la sala</Link>
            </aside>
        </section>
        
    );
};

export default AsideStudent;