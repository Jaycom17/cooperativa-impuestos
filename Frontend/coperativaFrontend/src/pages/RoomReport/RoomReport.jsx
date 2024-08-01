//Importación de librerías
import { useParams } from "react-router-dom";
import { useState } from "react";
//Importación de componentes
import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import AsideProf from "../../components/AsideProf/AsideProf";
import ingFact from "../../formsData/IngFact.json";
import GenericTabs from "../../components/ShowFormsGeneric/GenericTabs";
//Importación de servicios
import { getIngresosFacturacionStu } from "../../services/ingFac.service";
//Importación de utilidades
import { forms } from "../../utils/report";
//Importación de imágenes
import Formulario from '../../assets/Formulario.png'
import logo from "../../assets/LogoUniversidadCooperativa.png";

/**
 * Componente RoomReport.
 * 
 * Este componente muestra los reportes de una sala y permite seleccionar formularios para revisarlos.
 * 
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la vista de reportes de una sala.
 */
function RoomReport() {
  const { roomID } = useParams();
  const [form, setForm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [data, setData] = useState({});

  /**
   * Actualiza el valor en el objeto de datos utilizando una ruta específica.
   * 
   * @param {any} value - El valor a actualizar.
   * @param {string} path - La ruta en el objeto de datos donde se debe actualizar el valor.
   * @param {Object} form - El objeto de formulario en el que se deben actualizar los datos.
   */
  const updateValue = (value, path, form) => {
    // Crear una copia del objeto data
    const updatedData = { ...form };
    // Navegar al valor específico usando la ruta (path)
    let currentLevel = updatedData;
    const pathArray = path.split(".");
    for (let i = 0; i < pathArray.length - 1; i++) {
      currentLevel = currentLevel[pathArray[i]];
    }

    const lastKey = pathArray[pathArray.length - 1];

    // Actualizar el valor
    currentLevel[lastKey] = value;
    setData(updatedData);
  };

  /**
   * Establece el ID del estudiante seleccionado.
   * 
   * @param {Object} student - El objeto del estudiante.
   */
  const getStudentID = (student) =>{
    setSelectedStudent(student.stuID)
  }

  /**
   * Recibe los datos y actualiza el objeto de datos utilizando una ruta específica.
   * 
   * @param {Object|any} key - Los datos a recibir, que pueden ser un objeto o un valor.
   * @param {string} path - La ruta en el objeto de datos donde se deben actualizar los datos.
   * @param {Object} form - El objeto de formulario en el que se deben actualizar los datos.
   */
  const receiveData = (key, path, form) => {
    if (typeof key === "object") {
      Object.entries(key).map(([key, val]) => {
        receiveData(val, `${path}.${key}`, form);
      });
    } else {
      updateValue(key, path, form);
    }
  };

  /**
   * Navega a una sección específica y actualiza el formulario y los datos.
   * 
   * @param {string} formTo - La sección a la que se debe navegar.
   * @param {string} [stuID] - El ID del estudiante, si es necesario.
   */
  const toNav = (formTo, stuID) => {
    setForm(formTo);
    if (formTo === "stuSelect") {
      setSelectedStudent(stuID || null);
    }
    switch (formTo) {
      case "form110":
        break;
      case "detalleReng":
        break;
      case "caratulaform":
        break;
      case "esfpatrimonioform":
        break;
      case "rentaliquida":
        break;
      case "impuestodiferido":
        break;
      case "ingrefactform":
        setData(ingFact);
        getIngresosFacturacionStu(stuID, roomID)
          .then((res) => {
            console.log(res.data.ingContent);
            Object.entries(res.data.ingContent).map(([key, val]) => {
              receiveData(val, [key], ingFact);
            });
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      case "activosfijos":
        break;
      case "stuSelect":
        break;
    }
    console.log(formTo, stuID);
  };

  return (
    <>
      <TeacherNavbar />
      <main className="flex">
        <AsideProf toNav={toNav} getStudent={getStudentID} />
        {form === "" && (
          <div className="flex flex-col items-center justify-center mb-32 text-center w-10/12 md:w-5/12 md:mx-auto">
            <img
              src={logo}
              alt="Logo universidad cooperativa"
              className="w-11/12 md:w-96"
            />
            <h1 className="text-4xl font-semibold">
              Bienvenido al reporte de la sala
            </h1>
            <h2 className="text-lg lg:text-xl">
              Para empezar a revisar los avances de un estudiante en los
              formularios, escoge uno dando clic en el botón &quot;
              <span className="text-unicoop-blue font-medium">Estudiantes</span>
              &quot;, en la barra de navegación lateral.
            </h2>
          </div>
        )}
        {form === "stuSelect" && selectedStudent && (
          <div className="flex flex-col items-center text-center w-full h-screen justify-center">
            <img
              className="w-[300px] md:w-[400px] rounded-[20%]"
              src={logo}
              alt="Logo universidad cooperativa"
            />
            <h2 className="text-2xl font-semibold pb-8 text-center">
              Selecciona el formulario que desea revisar
            </h2>
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-10">
              {forms.map((form, index) => (
                <button
                  key={index}
                  onClick={() => toNav(form.to, selectedStudent)}
                  className="flex items-center hover:scale-105 hover:bg-slate-100 duration-150 justify-center w-full flex-col rounded-2xl p-2"
                >
                  <img
                    src={Formulario}
                    alt="Logo Formulario"
                    className="h-10 rounded-t-lg"
                  />
                  <h3 className=" font-semibold text-center">{form.label}</h3>
                </button>
              ))}
            </section>
          </div>
        )}
        {form !== "" && form !== "stuSelect" && (
          <GenericTabs
            json={data}
            ValuesNames={[]}
            TabsNames={[]}
            onReport={true}
          />
        )}
      </main>
    </>
  );
}

export default RoomReport;
