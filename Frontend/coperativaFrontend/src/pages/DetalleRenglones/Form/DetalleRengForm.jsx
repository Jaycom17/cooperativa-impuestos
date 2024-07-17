import jsonData from '../../../formsData/DetalleReng.json';
import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import Form110Tabs from '../../../components/Form110Values/FormTabs.jsx';
import { useState } from "react";
import { TabsNames, CalculatedValues, ValuesNames } from "../../../utils/DetalleReng.js";

const DetalleReng = () => {
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

    return (
        <main className="flex md:flex-row w-full">
            <AsideStudent />
            <Form110Tabs json={jsonData} handleChange={handleChange} TabsNames={TabsNames} 
            CalculatedValues={CalculatedValues} ValuesNames={ValuesNames}/>
        </main>
    );
};
export default DetalleReng;