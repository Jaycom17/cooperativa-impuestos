//Importación de librerías
import { useState } from "react";
//Importación de componentes
import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import ActivosFijosValues from "../../../components/ActivosFijosValues/ActivosFijosValues";
import ActivosFijosTotals from "../../../components/ActivosFIjosTotals/ActivosFIjosTotal";
import basicInformation from '../../../formsData/ActivosFijos.json';
import Accordeon from "../../../components/Accordeon/Accordeon";
import TabBar from "../../../components/TabBar/TabBar";
//Importación de utilidades
import { friendlyNames,
         calculateCostoImpNetoFinPeriodo, 
         calculateAjusteImpNetoFinPeriodo,
         calculateSubTotalFinPeriodo,
         calculateTotalNetoFinPeriodo,
         calculateValorNetoFinPeriodo,
         calcultateTotal } from "../../../utils/activosFijos";

/**
 * Componente principal para la gestión del formulario de Activos Fijos.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el formulario de Activos Fijos.
 */
const ActivosFijosForm = () =>{
  const [data, setData] = useState(basicInformation);

    const tabs = [
        {name: 'PPE', label:'Propiedades, plantas y equipos'},
        {name: 'PI', label:'Propiedades de inversión'},
        {name: 'ANCMV', label: 'ANCMV'},
        {name: 'AI', label:'Activos Intangibles'},
        {name: 'TOTALES', label:'TOTALES'},
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    /**
     * Maneja los cambios en los inputs del formulario.
     *
     * @param {Event} e - El evento de cambio del input.
     * @param {string} path - La ruta dentro del objeto de datos donde se encuentra el valor.
     */
    const handleChange = (e, path) => {
        let { name, value } = e.target;
        if (value === '') value = 0;
        const pathArray = path.split('.');
        
        setData((prevData) => {
            let newData = { ...prevData };
            let temp = newData;
    
            for (let i = 0; i < pathArray.length; i++) {
                if (i === pathArray.length - 1) {
                    if (typeof temp[pathArray[i]] === 'object') {
                        temp[pathArray[i]][name] = parseFloat(value) || 0;
                    } else {
                        temp[pathArray[i]] = parseFloat(value) || 0;
                    }
                } else {
                    temp = temp[pathArray[i]];
                }
            }

            // Cálculo los valores basados en las nuevas entradas
            const keys = Object.keys(newData);

            keys.forEach((key) => {
                Object.keys(newData[key]).forEach((subKey) => {
                    const contables = newData[key][subKey].Contables;
                    const fiscales = newData[key][subKey].Fiscales;

                    if (contables && contables.ImporteNeto) {
                        contables.ImporteNeto.Costo = calculateCostoImpNetoFinPeriodo(newData[key][subKey]);
                        contables.ImporteNeto.Ajuste = calculateAjusteImpNetoFinPeriodo(newData[key][subKey]);
                    }

                    if (fiscales) {
                        fiscales.SubtotalFinalPeriodo = calculateSubTotalFinPeriodo(newData[key][subKey]);
                        fiscales.TotalNeto = calculateTotalNetoFinPeriodo(newData[key][subKey]);
                        fiscales.ValorNeto = calculateValorNetoFinPeriodo(newData[key][subKey]);
                    }
                });
            });
            // Cálculo los totales
            const PPE = newData.PropiedadesPlantasEquipos;
            const PI = newData.PropiedadesInversión;
            const ANCMV = newData.ANCMV.ANCMV;
            const AI = newData.ActivosIntangibles;
            const TotalPPEPIANCMV = newData.TotalPPEPIANCMV;
            const TotalTodo = newData.TotalTodo;

            const elementosPPE = [
                PPE.Terrenos,
                PPE.Edificios,
                PPE.Maquinaria,
                PPE.Buques,
                PPE.Aeronave,
                PPE.EquiposTransporte,
                PPE.EnseresAccesorios,
                PPE.EquiposInformaticos,
                PPE.EquiposRedesComunicacion,
                PPE.InfraestructuraRed,
                PPE.ActivosTangiblesExploracionEvaluacion,
                PPE.ActivosMineria,
                PPE.ActivosPetroleoGas,
                PPE.PPyEArrendamientoOperativo,
                PPE.PlantasProductoras,
                PPE.AnimalesProductores,
                PPE.ConstruccionesProceso,
                PPE.Otras,
            ];

            const elementosPI = [
                PI.Terrenos,
                PI.Edificios,
            ];

            const elementosAI = [
                AI.MarcasComerciales,
                AI.ActivosIntangiblesExploracionEvaluacion,
                AI.CabecerasOeriodicosRevistasTitulosPublicaciones,
                AI.ProgramasAplicacionesInformaticos,
                AI.LicenciasFranquicias,
                AI.PropiedadIntelectualPatentesPropiedadIndustrialServiciosDerechosOperacion,
                AI.RecetasFormulasModelosDiseñosPrototipos,
                AI.Concesiones,
                AI.DesembolsosDesarrolloCapitalizados,
                AI.ActivosIntangiblesDesarrollo,
                AI.Plusvalia,
                AI.MejorasDerechosArrendamiento,
                AI.SubvencionesEstado,
                AI.Otros,
            ];
            
            const elementosPPEPIANCMV = [
                PPE.Total,
                PI.Total,
                ANCMV,
            ];

            const elementosTodo = [
                TotalPPEPIANCMV,
                AI.Total,
            ];

            calcultateTotal(PPE.Total, elementosPPE);
            calcultateTotal(PI.Total, elementosPI);
            calcultateTotal(AI.Total, elementosAI);
            calcultateTotal(TotalPPEPIANCMV, elementosPPEPIANCMV);
            calcultateTotal(TotalTodo, elementosTodo);

            return newData;
        });
    };

    /**
     * Renderiza las secciones del formulario basado en los datos proporcionados.
     *
     * @param {Object} sectionData - Los datos de la sección a renderizar.
     * @param {string} pathPrefix - El prefijo de la ruta para los datos.
     * @param {string} excludeSection - Sección a excluir del renderizado.
     * @returns {JSX.Element[]} Un array de elementos JSX que representan las secciones.
     */
    const renderSections = (sectionData, pathPrefix, excludeSection = "") => {
        return Object.keys(sectionData).map((sectionKey) => {
            if (sectionKey === excludeSection) return null;

            const friendlyName = friendlyNames[sectionKey] || sectionKey;

            return (
                <Accordeon key={sectionKey} title={friendlyName }>
                    <ActivosFijosValues 
                        title={friendlyName } 
                        path={`${pathPrefix}.${sectionKey}`} 
                        data={sectionData[sectionKey]} 
                        handleChange={handleChange}
                    />
                </Accordeon>
            );
        });
    };

    return(
        <main className="flex md:flex-row w-full">
            <AsideStudent/>
            <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
                <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
                {activeTab === 'PPE' && renderSections(data.PropiedadesPlantasEquipos, 'PropiedadesPlantasEquipos', 'Total')}
                {activeTab === 'PI' && renderSections(data.PropiedadesInversión, 'PropiedadesInversión', 'Total')}
                {activeTab === 'ANCMV' && ( <ActivosFijosValues title={"ANCMV"} path={'ANCMV.ANCMV'} data={data.ANCMV.ANCMV} handleChange={handleChange} /> )}
                {activeTab === 'AI' && renderSections(data.ActivosIntangibles, 'ActivosIntangibles', 'Total')}
                {activeTab === 'TOTALES' && (
                    <div>
                        <Accordeon title={"Total Propiedades, plantas y equipos"}>
                            <ActivosFijosTotals title="Total PPE" data={data.PropiedadesPlantasEquipos.Total} />
                        </Accordeon>
                        <Accordeon title={"Total Propiedades de inversión"}>
                            <ActivosFijosTotals title="Total PI" data={data.PropiedadesInversión.Total} />
                        </Accordeon>
                        <Accordeon title={"Total Activos Intangibles"}>
                            <ActivosFijosTotals title="Total AI" data={data.ActivosIntangibles.Total} />
                        </Accordeon>
                        <Accordeon title={"Total PPE, PI y ANCMV"}>
                            <ActivosFijosTotals title="Total PPE, PI y ANCMV" data={data.TotalPPEPIANCMV} />
                        </Accordeon>
                        <Accordeon title={"Total PPE, PI, ANCMV y AI"}>
                            <ActivosFijosTotals title="Total PPE, PI, ANCMV y AI" data={data.TotalTodo} />
                        </Accordeon>
                    </div>
                )}
            </section>
        </main>
    );
};

export default ActivosFijosForm;