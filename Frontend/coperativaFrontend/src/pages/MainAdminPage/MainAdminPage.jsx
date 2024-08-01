//Importación de librerías
import { useState, useEffect } from 'react';
//Importación de componentes
import Navbar from '../../components/Navbar/Navbar';
import Professor from '../../components/Professor/Professor';
//Importación de servicios
import { getProfessors } from '../../services/professor.service';
//Importación de iconos
import { FaSearch } from "react-icons/fa";

/**
 * Componente principal de la página de administración.
 *
 * Este componente se encarga de mostrar una lista de profesores, permitir la búsqueda
 * de profesores y actualizar la lista de profesores.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página principal de administración.
 */
const MainAdminPage = () => {
  const [professors, setProfessors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar la lista de profesores al montar el componente
  useEffect(() => {
    getProfessors().then((response) => {
      if (response.status === 200) {
        const sortedProfessors = response.data.sort((a, b) => a.usuName.localeCompare(b.usuName));
        setProfessors(sortedProfessors);
      }
    }).catch(() => {
      alert("Error al cargar los profesores");
    });
  }, []);

  /**
   * Actualiza la lista de profesores.
   *
   * Esta función se llama para volver a cargar y actualizar la lista de profesores.
   */
  const refreshProfessors = () => {
    getProfessors().then((response) => {
      if (response.status === 200) {
        const sortedProfessors = response.data.sort((a, b) => a.usuName.localeCompare(b.usuName));
        setProfessors(sortedProfessors);
      }
    }).catch(() => {
      alert("Error al cargar los profesores");
    });
  };

  /**
   * Maneja el cambio en el campo de búsqueda.
   *
   * @param {Object} e - El evento de cambio.
   */
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrar los profesores según el término de búsqueda
  const filteredProfessors = professors.filter(professor =>
    professor.usuName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-background min-h-screen pb-3 ">
      <Navbar />
      <div className="relative w-3/4 md:w-1/3 mt-5 mx-auto ">
        <input
          className="w-full p-2.5 rounded-md text-xl text-unicoop bg-background border-solid border-unicoop border"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <FaSearch className="absolute inset-y-0 right-2 text-2xl my-auto text-unicoop cursor-text"/>
      </div>
      <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
        {filteredProfessors.map((professor) => (
          <Professor key={professor.usuID} professor={professor} onRefresh={refreshProfessors} />
        ))}
      </section>
    </main>
  );
};

export default MainAdminPage;
