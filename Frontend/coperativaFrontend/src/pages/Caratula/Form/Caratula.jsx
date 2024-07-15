import AsideStudent from '../../../components/AsideStudent/AsideStudent';
import YesNoSelect from '../../../components/YesNoSelect/YesNoSelect';

function CaratulaForm(){

    return(
        <div className="flex bg-gray-100 rounded shadow-md">
            <AsideStudent/>
            <main className='overflow-auto max-h-screen w-full'>
                <section className='p-2'>
                <h2 className='font-bold text-xl mb-3 pl-10 md:pl-[0px]'>
                    Datos del declarante
                </h2>
                <article className='gap-2 grid grid-cols-1 lg:grid-cols-2 bg-gray-200 rounded'>
                    <label className='flex justify-between p-2 gap-2 items-center' htmlFor=""> <p>Número de Identificación Tributaria (NIT)</p>
                    <input className='' type="text" /></label>
                    <label className='flex justify-between p-2 gap-2 items-center' htmlFor=""> DV
                    <input className='' type="text" /></label>
                    <label className='flex justify-between p-2 gap-2 items-center' htmlFor="">Primer apellido
                    <input className='' type="text" /></label>
                    <label className='flex justify-between p-2 gap-2 items-center' htmlFor="">Segundo apellido
                    <input className='' type="text" /></label>
                    <label className='flex justify-between p-2 gap-2 items-center' htmlFor="">Primer nombre
                    <input className='' type="text" /></label>
                    <label className='flex justify-between p-2 gap-2 items-center' htmlFor="">Otros nombres
                    <input className='' type="text" /></label>
                </article>
                </section>

                <section className='p-2'>
                    <h2 className='font-bold text-xl mb-3'>Datos informativos</h2>
                    <article className='flex flex-col gap-2'>
                        <YesNoSelect message={"Persona Natural sin residencia"}/>
                        <YesNoSelect message={"Contribuyente del Régimen Tributario Especial"}/>
                        <YesNoSelect message={"Entidad Cooperativa (artículo 19-4 Estatuto Tributario)"}/>
                        <YesNoSelect message={"Entidad del sector financiero"}/>
                        <YesNoSelect message={"Nueva sociedad -ZOMAC"}/>
                        <YesNoSelect message={"Obras por impuestos -ZOMAC"}/>
                        <YesNoSelect message={"Programa de reorganización empresarial durante el año gravable"}/>
                        <YesNoSelect message={"Sociedad extranjera"}/>
                        <YesNoSelect message={"Obligado a aplicar sistemas especiales de valoración de inversiones"}/>
                        <YesNoSelect message={"Costo de los inventarios establecidos por el sistema de juego de inventarios"}/>
                        <YesNoSelect message={"Costo de inventarios establecido simultáneamente por el juego de inventarios y por el sistema de inventario permanente"}/>
                        <YesNoSelect message={"Progresividad dela tarifa de impuesto de renta"}/>
                        <YesNoSelect message={"Contrato de estabilidad jurídica"}/>
                        <YesNoSelect message={"Moneda funcional diferente al peso colombiano"}/>
                        <YesNoSelect message={"Mega -Inversiones"}/>
                        <YesNoSelect message={"Empresa en Economía Naranja"}/>
                        <YesNoSelect message={"Compañia de Holding Colombiana"}/>
                        <YesNoSelect message={"Zona Económica y social especial"}/>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default CaratulaForm;