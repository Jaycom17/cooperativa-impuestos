import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";

const TabBar = ({tabs, activeTab, setActiveTab})=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const asideRef = useRef(null);

    // Función para cerrar el menú desplegable al hacer clic fuera de él
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

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <section className="absolute z-10 right-0 top-0 md:relative">
            <div className="flex justify-end md:hidden cursor-pointer items-center text-black rounded-bl-lg h-12 w-28 bg-gray-200  hover:bg-gray-400 duration-200 p-3" onClick={handleMenuOpen}>
                <h1 className="text-sm font-medium">Secciones</h1>
                <MdMenu className="ml-2 text-2xl" />
            </div>
            <nav className={`fixed md:relative md:flex md:justify-between top-0 right-0 min-h-screen h-full w-[200px] md:w-full md:min-h-fit bg-gray-200 md:bg-transparent md:-translate-x-0 transition-transform duration-150 ${ isMenuOpen ? "-translate-x-0 " : "translate-x-full" }`} ref={asideRef}>
                <div className="flex w-full justify-center mt-2 md:hidden mb-2">
                    <GrFormClose className="hover:animate-spin-once cursor-pointer text-black hover:text-buttons-closing-red text-3xl" onClick={handleMenuOpen} />
                </div>
                {tabs && 
                (tabs.map((tab, i) => (
                    <button key={i} className={`p-4 w-full transition-all duration-150 text-center hover:bg-gray-100 ${activeTab === tab.name ? 'border-b-2 border-blue-400 bg-gray-50' : ''}`}
                    onClick={() => setActiveTab(tab.name)}
                    >
                    {tab.label}
                    </button>
                )))}
            </nav>
        </section>
        
    );
}

export default TabBar;

TabBar.propTypes ={
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
    })),
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
}

/**
 * "text-black text-sm lg:text-lg flex flex-col md:flex-row justify-between mt-2 md:mt-0"
 */