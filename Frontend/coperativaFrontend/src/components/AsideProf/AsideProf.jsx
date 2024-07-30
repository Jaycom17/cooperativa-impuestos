//Importación de librerías
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { getStudentsByRoom } from "../../services/student.service";
import PropTypes from "prop-types";
//Importación de componentes
import FloatingContainer from "../FloatingContainer/FloatingContainer";
//Importación de utilidades
import { forms } from "../../utils/report";
//Importación de iconos
import { GrFormClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

/**
 * Componente lateral para navegación y visualización de estudiantes y formularios.
 *
 * Este componente proporciona un menú lateral para seleccionar estudiantes, buscar estudiantes,
 * y navegar entre diferentes formularios asociados a un estudiante seleccionado.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {Function} props.toNav - Función para navegar a diferentes rutas basadas en la interacción del usuario.
 * @param {Function} props.getStudent - Función para obtener el estudiante que se se ha seleccionado.
 * @returns {JSX.Element} Elemento JSX que representa el componente de menú lateral.
 */
const AsideProf = ({ toNav, getStudent }) => {
  const { roomID } = useParams();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentsCopy, setStudentsCopy] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const asideRef = useRef(null);
  const [contOpen, setContOpen] = useState(false);

  /**
   * Función para cerrar el menú desplegable al hacer clic fuera de él.
   * 
   * @function
   * @param {Event} event - El evento de clic del mouse.
   */
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
  
  /**
   * Hook efecto para obtener la lista de estudiantes al cambiar la ID de la sala.
   */
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await getStudentsByRoom(roomID);
        const sortedData = data.sort((a, b) =>
          a.stuName.localeCompare(b.stuName)
        );
        setStudents(sortedData);
        setStudentsCopy(sortedData);
      } catch (error) {
        console.error("Error al obtener los estudiantes de la sala:", error);
      }
    };
    fetchStudents();
  }, [roomID]);

  /**
   * Maneja la apertura y cierre del menú lateral.
   */
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Maneja la búsqueda de estudiantes en la lista.
   * 
   * @function
   * @param {Event} e - El evento de cambio del input.
   */
  const searchStudent = (e) => {
    const searchValue = e.target.value;
    const filteredStudents = studentsCopy.filter((student) =>
      student.stuName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setStudents(filteredStudents);
  };
  
  /**
   * Maneja la selección de un estudiante de la lista.
   * 
   * @function
   * @param {Object} student - El objeto del estudiante seleccionado.
   */
  const handleSelectedStud = (student) => {
    setSelectedStudent(student);
    setContOpen(false);
    toNav("stuSelect", student.stuID);
    getStudent(student)
  };

  return (
    <section className="absolute md:relative flex">
      <button
        className="flex md:hidden cursor-pointer items-center text-unicoop rounded-br-lg h-12 px-2 bg-primary hover:bg-unicoop-slate-blue duration-200"
        onClick={handleMenuOpen}
      >
        <MdMenu className="text-2xl" />
      </button>
      <aside
        className={`fixed md:relative top-0 min-h-screen h-full w-[200px] bg-primary md:translate-x-0 transition-transform duration-150 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={asideRef}
      >
        <button
          className="flex w-full justify-center mt-2 md:hidden hover:bg-unicoop-slate-blue" onClick={handleMenuOpen}>
          <GrFormClose className="hover:animate-spin-once cursor-pointer text-unicoop hover:text-buttons-closing-red text-3xl" />
        </button>
        <div className="flex flex-col items-center bg-transparent p-4 text-center font-semibold">
          <h1 className="text-white md:text-xl md:mt-[10px] bg-transparent">
            {selectedStudent
              ? selectedStudent.stuName
              : "Nombre del estudiante"}
          </h1>
        </div>
        <button
          className="flex items-center justify-center w-full h-[40px] md:h-[50px] bg-transparent text-white text-sm md:text-base hover:bg-buttons-list-blue duration-200 font-medium"
          onClick={() => setContOpen(true)}
        >
          Estudiantes
        </button>
        {selectedStudent && (
          <article>
            <div className="flex flex-col items-center md:mt-2 p-4 text-center font-semibold">
              <h1 className="text-white md:text-xl bg-transparent">
                FORMULARIOS
              </h1>
            </div>
            <section className="flex flex-col text-center bg-transparent text-unicoop border-y-2">
              {forms.map((form, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center w-full h-[40px] md:h-[50px] bg-transparent text-white text-sm md:text-base hover:bg-unicoop-slate-blue duration-200 font-medium"
                  onClick={() => toNav(form.to, selectedStudent.stuID)}
                >
                  {form.label}
                </button>
              ))}
            </section>
          </article>
        )}
      </aside>
      <FloatingContainer open={contOpen} setOpen={setContOpen}>
        <section className="bg-primary rounded-md text-black">
          <div className="relative w-10/12 p-2 mx-auto">
            <input
              className="w-full mx-auto p-1.5 rounded-md mt-2"
              placeholder="Buscar estudiante"
              type="text"
              onChange={searchStudent}
            />
            <FaSearch className="absolute inset-y-0 right-4 top-1 text-xl my-auto cursor-text text-black/65" />
          </div>
          {students.length === 0 && (
            <p className="text-center mt-2 px-4 md:text-lg text-unicoop">Aún no hay estudiantes registrados en esta sala :(</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3">
            {students.map((student) => (
              <button
                key={student.stuID}
                onClick={() => handleSelectedStud(student)}
                className={`hover:bg-unicoop-slate-blue w-full text-white p-2 rounded-sm duration-150 text-center ${
                  selectedStudent?.stuID === student.stuID
                    ? "bg-unicoop-slate-blue"
                    : ""
                }`}
              >
                {student.stuName}
              </button>
            ))}
          </div>
        </section>
      </FloatingContainer>
    </section>
  );
};

AsideProf.propTypes = {
  toNav: PropTypes.func,
  getStudent: PropTypes.func,
};

export default AsideProf;
