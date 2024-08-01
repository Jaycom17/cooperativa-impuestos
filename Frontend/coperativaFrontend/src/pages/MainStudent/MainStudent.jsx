//Importación de componentes
import AsideStudent from "../../components/AsideStudent/AsideStudent";
import FormItem from "../../components/FormItem/FormItem";
//Importación de imágenes
import logo from '../../assets/LogoUniversidadCooperativa.png';

/**
 * Componente principal de la página del estudiante.
 *
 * Este componente muestra un menú lateral y una lista de formularios que el estudiante puede seleccionar y diligenciar.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página principal del estudiante.
 */
const MainStudent = () => {

  const forms = [
    { label: "Formulario 110", to: "/form110" },
    { label: "Detalle reglones 110", to: "/student" },
    { label: "Caratula", to: "/caratulaform" },
    { label: "ESF patrimonio", to: "/esfpatrimonioform" },
    { label: "Renta liquida", to: "/student" },
    { label: "Impuesto diferido", to: "/student" },
    { label: "Ingresos y facturación", to: "/ingrefactform" },
    { label: "Activos fijos", to: "/activosfijos" },
    { label: "Resumen ESF ERI", to: "/student" },
  ];

  return (
    <main className="flex">
      <AsideStudent />
      <div className="flex flex-col justify-center w-full max-h-screen h-screen items-center p-2 md:p-6 lg:p-10 md:mt-0 mt-12">
        <img className="w-[300px] md:w-[400px] rounded-[20%]" src={logo} alt="Logo universidad cooperativa" />
        <h2 className="text-2xl font-semibold pb-8 text-center">Selecciona el formulario que desea diligenciar</h2>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-10">
          {forms.map((form, index) => (
            <FormItem key={index} name={form.label} to={form.to} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default MainStudent;
