import ListItem from '../../components/ItemLista/ListItem';
import Navbar from '../../components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { getProfessors } from '../../services/professor.service';

const MainAdminPage = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    getProfessors().then((response) => {
      if (response.status === 200) {
        setProfessors(response.data);
      }
    }).catch(() => {
      alert("Error al cargar los profesores");
    });
  }, []);

  const handleActualizar = (id) => {
    // Lógica para actualizar el item con el id proporcionado
    console.log(`Actualizar item con id: ${id}`);
  };

  const handleEliminar = (id) => {
    // Lógica para eliminar el item con el id proporcionado
    console.log(`Eliminar item con id: ${id}`);
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="">
        <section className="p-2 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {professors.map((item) => (
            <article key={item.usuID} className="mx-auto">
              <ListItem 
                nombre={item.usuName}
                onActualizar={() => handleActualizar(item.usuID)}
                onEliminar={() => handleEliminar(item.usuID)}
              />
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MainAdminPage;
