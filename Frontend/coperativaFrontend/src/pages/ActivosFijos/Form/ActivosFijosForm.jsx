import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import ActivosFijosValues from "../../../components/ActivosFijosValues/ActivosFijosValues";
import ActivosFijosTotals from "../../../components/ActivosFIjosTotals/ActivosFIjosTotal";
import basicInformation from '../../../formsData/ActivosFijos.json';
import Accordeon from "../../../components/Accordeon/Accordeon";
import TabBar from "../../../components/TabBar/TabBar";
import { useState } from "react";
import { friendlyNamesPPE, friendlyNamesAI } from "../../../utils/activosFijos";

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

    const calculateCostoImpNetoFinPeriodo = (currentData) => {
        return (currentData.Contables.Comienzo.Costo || 0) + (currentData.Contables.Comienzo.Conversion || 0) + (currentData.Contables.Incrementos.Transferencias || 0) - (currentData.Contables.Disminuciones.Transferencias || 0) - (currentData.Contables.Depreciacion.Costo || 0) - (currentData.Contables.Depreciacion.Conversion || 0) + (currentData.Contables.Deterioro || 0);
    }

    const calculateAjusteImpNetoFinPeriodo = (currentData) => {
        return (currentData.Contables.Comienzo.Ajuste || 0) + (currentData.Contables.Incrementos.CambiosValorRazonable || 0) - (currentData.Contables.Disminuciones.CambiosValorRazonable || 0) - (currentData.Contables.Depreciacion.Ajuste || 0)
    }

    const calculateSubTotalFinPeriodo = (currentData) => {
        return (currentData.Fiscales.SaldoComienzo || 0) + (currentData.Fiscales.IncrementosTransferencias || 0) - (currentData.Fiscales.DisminucionesTransferencias || 0)
    }

    const calculateTotalNetoFinPeriodo = (currentData) => {
        return (currentData.Fiscales.SubtotalFinalPeriodo || 0) - (currentData.Fiscales.Depreciacion || 0)
    }

    const calculateValorNetoFinPeriodo = (currentData) => {
        return (currentData.Fiscales.ValorTotal || 0) - (currentData.Fiscales.DepreacionFinal || 0)
    }

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

            
    
            return newData;
        });
    };

    const renderSections = (sectionData, pathPrefix, excludeSection = "", friendlyNames = []) => {
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
                {activeTab === 'PPE' && renderSections(data.PropiedadesPlantasEquipos, 'PropiedadesPlantasEquipos', 'Total', friendlyNamesPPE)}
                {activeTab === 'PI' && renderSections(data.PropiedadesInversión, 'PropiedadesInversión', 'Total')}
                {activeTab === 'ANCMV' && ( <ActivosFijosValues title={"ANCMV"} path={'ANCMV.ANCMV'} data={data.ANCMV.ANCMV} handleChange={handleChange} /> )}
                {activeTab === 'AI' && renderSections(data.ActivosIntangibles, 'ActivosIntangibles', 'Total', friendlyNamesAI)}
                {activeTab === 'TOTALES' && (
                    <div>
                        <Accordeon title={"Total Propiedades, plantas y equipos"}>
                            <ActivosFijosTotals title="Total PPE" data={data.PropiedadesPlantasEquipos.Total} />
                        </Accordeon>
                        <Accordeon title={"Total Propiedades de inversión"}>
                            <ActivosFijosTotals title="Total PI" data={data.ANCMV.ANCMV} />
                        </Accordeon>
                        <Accordeon title={"Total Activos Intangibles"}>
                            <ActivosFijosTotals title="Total AI" data={data.ANCMV.ANCMV} />
                        </Accordeon>
                        <Accordeon title={"Total PPE, PI y ANCMV"}>
                            <ActivosFijosTotals title="Total PPE, PI y ANCMV" data={data.TotalPPEPIANCMV} />
                        </Accordeon>
                        <Accordeon title={"Total Propiedades, plantas y equipos"}>
                            <ActivosFijosTotals title="Total Propiedades, plantas y equipos" data={data.ANCMV} />
                        </Accordeon>
                    </div>
                )}
            </section>
        </main>
    );
};

export default ActivosFijosForm;

