import jsonData from "../../../formsData/ESFpatrimonio.json";
import AsideStudent from "../../../components/AsideStudent/AsideStudent.jsx";
import Form110Values from '../../../components/ESFvalues/ESFvalues.jsx';
import Accordeon from '../../../components/Accordeon/Accordeon.jsx';
import TabBar from '../../../components/TabBar/TabBar.jsx';
import { ValuesNames } from "../../../utils/esfPatrimonio.js"
import { useState } from "react";

const ESFpatrimonio = () => {

    const [data, setData] = useState(jsonData);

    const calculateTotalPatBruto = (currentData) => {
        return (currentData.EfectvEquiEfect || 0) + (currentData.InvInstFinDeriv || 0) + (currentData.CuentDocArreFinCob || 0) + (currentData.Inv || 0) + (currentData.ActivInt || 0) + (currentData.ActivBio || 0) + (currentData.PPEPANCMC || 0) + (currentData.Otro || 0);
    }


    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(name,value)

        

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
        updatedData.Activos.ActivosEquivalentesEfectivo.Efectivo = calculateTotalPatBruto(updatedData.DatosResum.Patrim);

        // Calculo de los totales
        setData(updatedData);
        console.log(data)
        
    };

    const tabs = [
        { name: 'DatoPers', label: 'Datos Personales' },
        { name: 'DatosResum', label: 'Datos Resumidos' },
        { name: 'Totales', label: 'Totales' }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const renderSections = (sectionData, pathPrefix, excludeSection = "", friendlyNames = []) => {
        if (Array.isArray(sectionData)) {
            return Object.keys(sectionData).map((sectionKey) => {
                if (sectionKey === excludeSection) return null;

                const friendlyName = sectionData[sectionKey].Anio.toString();

                return (
                    <Accordeon
                        key={sectionKey}
                        title={friendlyName}
                        arrayIndex={sectionKey}
                    >
                        <Form110Values
                            title={friendlyName}
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

            const friendlyName = friendlyNames[sectionKey] || sectionKey;

            if(typeof sectionData[sectionKey] !== 'object'){
                return (
                    <div key={sectionKey}>
                        <Form110Values
                            title={friendlyName}
                            path={`${pathPrefix}.${sectionKey}`}
                            data={sectionData[sectionKey]}
                            handleChange={handleChange}
                        />
                    </div>
                );
            }
            return (
                <Accordeon key={sectionKey} title={friendlyName}>
                    <Form110Values
                        title={friendlyName}
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
                {activeTab === 'DatoPers' && renderSections(
                    data.DatoPers,
                    "DatoPers",
                    "",
                    ValuesNames
                )}
                {activeTab === 'DatosResum' && renderSections(
                    data.DatosResum,
                    "DatosResum",
                    "",
                    ValuesNames
                )}
                {activeTab === 'Totales' && renderSections(
                    data.Totales,
                    "Totales",
                    "",
                    ValuesNames
                )}
            </section>
        </main>
    );
};

export default ESFpatrimonio;
