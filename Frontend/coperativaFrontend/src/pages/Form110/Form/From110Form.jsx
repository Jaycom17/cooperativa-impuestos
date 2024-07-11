import jsonData from '../../../formsData/Form110.json';
import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import Form110Tabs from '../../../components/Form110Values/Form110Tabs';
import { useState } from "react";

const From110Form = () => {

    const [data, setData] = useState(jsonData);

    const handleChange = (e) => {
        let { name, value } = e.target;

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
        console.log(updatedData);
        setData(updatedData);
    };

    return (
        <main className="flex md:flex-row w-full">
            <AsideStudent />
            <Form110Tabs json={jsonData} handleChange={handleChange}/>
        </main>
    );
};

export default From110Form;
