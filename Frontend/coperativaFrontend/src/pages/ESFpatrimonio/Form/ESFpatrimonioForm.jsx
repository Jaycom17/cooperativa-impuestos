import jsonData from "../../../formsData/ESFpatrimonio.json";
import AsideStudent from "../../../components/AsideStudent/AsideStudent.jsx";
import EsfValues from '../../../components/ESFvalues/ESFvalues.jsx';
import Accordeon from '../../../components/Accordeon/Accordeon.jsx';
import TabBar from '../../../components/TabBar/TabBar.jsx';
import { ValuesNames } from "../../../utils/esfPatrimonio.js"
import { useState } from "react";

const ESFpatrimonio = () => {

    const [data, setData] = useState(jsonData);



    const handleChange = (e) => {
        let { name, value } = e.target;
        if (value === '') value = 0;

        // Crear una copia del objeto data
        const updatedData = { ...data };

        // Navegar al valor específico usando la ruta (name)
        let currentLevel = updatedData;
        const pathArray = name.split('.');
        for (let i = 0; i < pathArray.length - 1; i++) {
            currentLevel = currentLevel[pathArray[i]];
        }

        const lastKey = pathArray[pathArray.length - 1];

        // Detectar el tipo de dato actual
        const currentValueType = typeof currentLevel[lastKey];

        // Convertir el valor al tipo correcto
        if (currentValueType === 'number') {
            value = parseFloat(value);
        } else if (currentValueType === 'boolean') {
            value = value === 'true';
        }
        // No es necesario convertir si es una cadena de texto (string)

        // Actualizar el valor
        currentLevel[lastKey] = value;
        
        // Actualizar el estado con el objeto modificado

        // Calculo de los totales
        setData(updatedData);
        console.log(data)
        
    };

    const tabs = [
        { name: 'Activos', label: 'Activos' },
        { name: 'Pasivos', label: 'Pasivos' },
        { name: 'TotalPatrimonio', label: 'Patrimonio Total' },
        { name: 'PatrimonioContable', label: 'Patrimonio' },
        { name: 'DatosInformativos', label: 'Datos Informativos' }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const renderSections = (sectionData, pathPrefix, excludeSection = "", ValuesNamess = []) => {
        if (Array.isArray(sectionData)) {
            return Object.keys(sectionData).map((sectionKey) => {
                if (sectionKey === excludeSection) return null;

                const ValuesNames = sectionData[sectionKey].Anio.toString();

                return (
                    <Accordeon
                        key={sectionKey}
                        title={ValuesNames}
                        arrayIndex={sectionKey}
                    >
                        <EsfValues
                            title={ValuesNames}
                            path={`${pathPrefix}.${sectionKey}`}
                            data={sectionData[sectionKey]}
                            handleChange={handleChange}
                        />
                    </Accordeon>
                );
            });
        }

        return Object.keys(sectionData).map((sectionKey) => {
            if (sectionKey === excludeSection) return null;

            const ValuesNames = ValuesNamess[sectionKey] || sectionKey;

            if(typeof sectionData[sectionKey] !== 'object'){
                return (
                    <div key={sectionKey}>
                        <EsfValues
                            title={ValuesNames}
                            path={`${pathPrefix}.${sectionKey}`}
                            data={sectionData[sectionKey]}
                            handleChange={handleChange}
                        />
                    </div>
                );
            }
            return (
                <Accordeon key={sectionKey} title={ValuesNames}>
                    <EsfValues
                        title={ValuesNames}
                        path={`${pathPrefix}.${sectionKey}`}
                        data={sectionData[sectionKey]}
                        handleChange={handleChange}
                    />
                </Accordeon>
            );
        });
    };


    return (
        <main className="flex md:flex-row w-full">
            <AsideStudent />
            <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
                <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 'Activos' && renderSections(data.Activos, 'Activos', 'Total' , ValuesNames)}
                {activeTab === 'Pasivos' && renderSections(data.Pasivos, 'Pasivos', 'Total' , ValuesNames)}
                {activeTab === 'TotalPatrimonio' && renderSections(data.TotalPatrimonio, 'TotalPatrimonio', 'Total' , ValuesNames)}
                {activeTab === 'PatrimonioContable' && renderSections(data.PatrimonioContable, 'PatrimonioContable', 'Total', ValuesNames)}
                {activeTab === 'DatosInformativos' && renderSections(data.DatosInformativos, 'DatosInformativos', 'Total' , ValuesNames)}
                


            </section>
        </main>
    );
};

export default ESFpatrimonio;
