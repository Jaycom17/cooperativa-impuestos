import jsonData from '../../../formsData/DetalleReng.json';
import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import Form110Tabs from '../../../components/GenericFormValues/FormTabs.jsx';
import { useState } from "react";
import { TabsNames, CalculatedValues, ValuesNames, RSumNorm, RSumFisc } from "../../../utils/DetalleReng.js";

const DetalleReng = () => {
    const [data, setData] = useState(jsonData);

    const calculateSaldFisc = (currentData) => {
        for (let key in currentData) {
            if (currentData[key] && typeof currentData[key] === 'object') {
                currentData[key] = calculateSaldFisc(currentData[key])
            }
        }
        if ("SaldFisc" in currentData) {
            currentData.SaldFisc = (currentData.SaldCont || 0) + (currentData.Ajust1 || 0) - (currentData.Ajust3 || 0);
            if (currentData.SaldFisc < 0) currentData.SaldFisc = 0;
        }
        return currentData;
    }

    const calculateTotCont = (currentData) => {
        let result = 0;
        if (typeof currentData === "object") {
            for (let key in currentData) {
                if (typeof currentData[key] === 'object') {
                    if ("SaldCont" in currentData[key]) {
                        result += currentData[key].SaldCont
                    } else {
                        result += calculateTotCont(currentData[key])
                    }
                }
            }
        }
        return result;
    }

    const calculateTotFisc = (currentData) => {
        let result = 0;
        if (typeof currentData === "object") {
            for (let key in currentData) {
                if (typeof currentData[key] === 'object') {
                    if ("SaldFisc" in currentData[key]) {
                        result += currentData[key].SaldFisc
                    } else {
                        result += calculateTotFisc(currentData[key])
                    }
                }
            }
        }
        return result;
    }

    const calculateR44TotCont = (currentData) => {
        let result = (currentData.R36.TotCont || 0) + ((currentData.R37.TotCont || 0)) + (currentData.R38.TotCont || 0) + (currentData.R39.TotCont || 0) +
            (currentData.R40.TotCont || 0) + (currentData.R41.TotCont || 0) + (currentData.R42.TotCont || 0) + (currentData.R43.TotCont || 0);
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    }

    const calculateRSum = (currentData, RDest, RSum) => {
        let resultTotCont = 0;
        let resultTotFisc = 0;
        for (let key of RSum) {
            resultTotCont += currentData[key].TotCont;
            resultTotFisc += currentData[key].TotFisc;
        }
        currentData[RDest].TotCont = resultTotCont;
        currentData[RDest].TotFisc = resultTotFisc;
        return currentData[RDest];
    }

    const calculateRSumFisc = (currentData, RDest, RSum) => {
        let resultTotFisc = 0;
        for (let key of RSum) {
            resultTotFisc += currentData[key].TotFisc;
        }
        currentData[RDest].TotFisc = resultTotFisc;
        return currentData;
    }

    const calculateRestNoNeg = (val1, val2) => {
        console.log("resta",val1,val2)
        let result = val1 - val2;
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    }

    const calculate3130 = (currentData) => {
        let result = 0;
        result = (currentData.TotCont || 0) - ((currentData[3605]["UtilDesImp"].SaldCont || 0) + 
        (currentData[3605]["PerDesImp"].SaldCont || 0) + (currentData[3705].SaldCont || 0) + (currentData[3710].SaldCont || 0) +
        (currentData[3715]["GananAcum"].SaldCont || 0) + (currentData[3715]["PerAcum"].SaldCont || 0) + 
        (currentData[3720]["GananAcumORI"].SaldCont || 0) + (currentData[3720]["PerAcumORI"].SaldCont || 0) + 
        (currentData[3805]["Reval"].SaldCont || 0) + (currentData[3805]["MetPar"].SaldCont || 0))
        return result;
    }
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
        //for (let key in updatedData) {
        let key = pathArray[0]
        if (RSumNorm.includes(key)) {
            for (let subKey in updatedData[key]) {
                if (typeof updatedData[key][subKey] === 'object') {
                    updatedData[key][subKey] = calculateSaldFisc(updatedData[key][subKey]);
                }
            }
            let TotCont = calculateTotCont(updatedData[key]);
            let TotFisc = calculateTotFisc(updatedData[key]);
            if (TotCont < 0) {
                updatedData[key].TotCont = 0;
            } else {
                updatedData[key].TotCont = TotCont;
            }
            if (TotFisc < 0) {
                updatedData[key].TotFisc = 0;
            } else {
                updatedData[key].TotFisc = TotFisc;
            }
        } else if (RSumFisc.includes(key)) {
            for (let subKey in updatedData[key]) {
                if (typeof updatedData[key][subKey] === 'object') {
                    updatedData[key][subKey] = calculateSaldFisc(updatedData[key][subKey]);
                }
            }
            let TotFisc = calculateTotFisc(updatedData[key]);
            if (TotFisc < 0) {
                updatedData[key].TotFisc = 0;
            } else {
                updatedData[key].TotFisc = TotFisc;
            }
        }
        updatedData.R44 = calculateRSum(updatedData, "R44", ["R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43"]);

        updatedData.R46.TotCont = calculateRestNoNeg((updatedData.R44.TotCont || 0), (updatedData.R45.TotCont || 0));
        updatedData.R46.TotFisc = calculateRestNoNeg((updatedData.R44.TotFisc || 0), (updatedData.R45.TotFisc || 0));
        updatedData["R46"][3130].SaldCont = calculate3130(updatedData.R46)
        //}

        /*
        // Actualizar el estado con el objeto modificado
        Object.entries(updatedData).map(([key,val]) => {
            if (RSumNorm.includes(key)) {
                Object.entries(val).map(([subKey,subVal]) => {
                    if (typeof subVal === 'object') {
                        updatedData[key][subKey].SaldFisc = calculateSaldFisc(updatedData[key][subKey]);
                    }
                })
                updatedData[key].TotCont = calculateTotCont(updatedData[key]);
                updatedData[key].TotFisc = calculateTotFisc(updatedData[key]);
            } else if (RSumFisc.includes(key)) {
                Object.entries(val).map(([subKey,subVal]) => {
                    if (typeof subVal === 'object') {
                        if(updatedData[key][subKey].SaldFisc !== null){
                            updatedData[key][subKey].SaldFisc = calculateSaldFisc(updatedData[key][subKey]);
                        }
                    }
                })
                updatedData[key].TotFisc = calculateTotFisc(updatedData[key]);
            }
        })*/
        // Calculo de los totales
        setData(updatedData);
        console.log(data)
    };

    return (
        <main className="flex md:flex-row w-full">
            <AsideStudent />
            <Form110Tabs json={data} handleChange={handleChange} TabsNames={TabsNames}
                CalculatedValues={CalculatedValues} ValuesNames={ValuesNames} />
        </main>
    );
};
export default DetalleReng;