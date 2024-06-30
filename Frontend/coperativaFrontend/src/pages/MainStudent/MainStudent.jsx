import AsideStudent from "../../components/AsideStudent/AsideStudent";
import FormItem from "../../components/FormItem/FormItem";

const MainStudent = () => {

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
    <main className="flex">
      <AsideStudent />
      <div className="flex flex-col w-full overflow-auto max-h-screen h-screen items-center p-2 md:p-6 lg:p-10 md:mt-0 mt-12">
        <img className="w-[300px] md:w-[400px] rounded-[20%]" src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="Logo universidad cooperativa" />
        <h2 className="text-2xl font-semibold pb-8 text-center">Seleccione el formulario que desea diligenciar</h2>
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
