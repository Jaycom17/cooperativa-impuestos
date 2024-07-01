import ListItem from '../../components/ItemLista/ListItem';
import Navbar from '../../components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { getProfessors } from '../../services/professor.service';
import Professor from '../../components/Professor/Professor';

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

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="">
        <section className="p-2 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {professors.map((professor) => (
            <Professor key={professor.usuID} professor={professor}/>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MainAdminPage;
