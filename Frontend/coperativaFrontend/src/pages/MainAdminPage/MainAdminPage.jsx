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

  const refreshProfessors = () =>{
    getProfessors().then((response) => {
      if (response.status === 200) {
        setProfessors(response.data);
      }
    }).catch(() => {
      alert("Error al cargar los profesores");
    });
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="">
        <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 mx-auto justify-items-center">
          {professors.map((professor) => (
            <Professor key={professor.usuID} professor={professor} onRefresh={refreshProfessors}/>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MainAdminPage;
