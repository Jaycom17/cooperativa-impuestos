import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import AsideProf from "../../components/AsideProf/AsideProf";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { forms } from "../../utils/report";
import logo from '../../assets/LogoUniversidadCooperativa.png';
import { getIngresosFacturacionStu } from "../../services/ingFac.service";
import json from "../../formsData/IngFact.json"
import Form110Tabs from "../../components/GenericFormValues/FormTabs";

function RoomReport() {
  const { roomID } = useParams();
  const [form, setForm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [data, setData] = useState(null);

  const toNav = (formTo, stuID) => {
    setForm(formTo);
    if (formTo === "stuSelect") {
      setSelectedStudent(stuID || null);
    }
    switch(formTo) {
      case "form110":
        /**setData(getForm110(stuID)) (algo así?)*/
        break;
      case "detalleReng":
      //getter del elefante
        break;
      case "caratulaform":
      //getter del cartulina
        break;
      case "esfpatrimonioform":
      //getter del esefeo
        break;
      case "rentaliquida":
      //getter del liquido
        break;
      case "impuestodiferido":
      //getter del aja
        break;
      case "ingrefactform":
        setData(json)
        getIngresosFacturacionStu(stuID, roomID).then(res =>{
          console.log(res.data.ingContent);
          setData(res.data.ingContent);
          console.log(data)
        }).catch(error => {console.log(error)});
        break;
      case "activosfijos":
      //getter del infierno
        break; 
      case "stuSelect":
      //getter del fedelobo
        break; 
    }
    console.log(formTo, stuID);
  };

  return (
    <>
      <TeacherNavbar />
      <main className="flex">
        <AsideProf toNav={toNav}/>
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
              Para empezar a revisar los avances de un estudiante en los formularios, escoge uno dando clic en el botón &quot;<span className="text-unicoop-blue font-medium">Estudiantes</span>&quot;, en la barra de navegación lateral.
            </h2>
          </div>
        )}
        {(form === "stuSelect" && selectedStudent) && (
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
                  onClick={() => toNav(form.to, selectedStudent.stuID)}
                  className="flex items-center hover:scale-105 hover:bg-slate-100 duration-150 justify-center w-full flex-col rounded-2xl p-2"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/14/48/sheet-1292828_1280.png"
                    alt="Logo Formulario"
                    className="h-10 rounded-t-lg"
                  />
                  <h3 className=" font-semibold text-center">{form.label}</h3>
                </button>
              ))}
            </section>
          </div>
        )}
        {(form !== "" && form!=="stuSelect") && (
          <Form110Tabs json={data} handleChange={() => console.log()} CalculatedValues={[]} TabsNames={[]} ValuesNames={[]} />
        )}
      </main>
    </>
  );
}

export default RoomReport;
