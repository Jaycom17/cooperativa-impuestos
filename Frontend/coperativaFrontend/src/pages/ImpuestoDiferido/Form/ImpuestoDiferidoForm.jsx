import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import jsonData from '../../../formsData/ImpuestoDiferido.json';
import Form110Tabs from '../../../components/Form110Values/FormTabs';
import { useState } from "react";

function ImpuestoDiferidoForm() {

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

    console.log(updatedData)

    setData(updatedData);

  };

  return (
    <div className="flex">
        <AsideStudent />
        <Form110Tabs json={data} handleChange={handleChange} />
    </div>
  );
}

export default ImpuestoDiferidoForm;