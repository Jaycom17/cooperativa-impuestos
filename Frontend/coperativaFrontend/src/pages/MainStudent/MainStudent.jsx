import AsideStudent from "../../components/AsideStudent/AsideStudent";
import FormItem from "../../components/FormItem/FormItem";

const MainStudent = () => {
  return (
    <div className="flex">
      <AsideStudent />

      <div className="flex flex-col w-full h-screen md:justify-center items-center p-2 md:p-6 lg:p-10 md:mt-0 mt-12">
        
      <img className="w-[300px] h-[100px] rounded-[20%]" src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="Logo" />
        <h2 className="text-2xl text-white font-semibold pb-8">Seleccione el formulario que desea diligenciar</h2>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-10">
            <FormItem name="Formulario 110" to="/login" />
            <FormItem name="Detalle reglones 110" to="/login" />
            <FormItem name="Caratula" to="/login" />
            <FormItem name="ESF patrimonio" to="/login" />
            <FormItem name="Renta liquida" to="/login" />
            <FormItem name="Impuesto diferido" to="/login" />
            <FormItem name="Ingresos y facruración" to="/login" />
            <FormItem name="Activos fijos" to="/login" />
            <FormItem name="Resumen ESF ERI" to="/login" />
        </section>
      </div>
    </div>
  );
};

export default MainStudent;
