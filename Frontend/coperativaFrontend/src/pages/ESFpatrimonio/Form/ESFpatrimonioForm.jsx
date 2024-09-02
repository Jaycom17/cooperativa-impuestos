import jsonData from "../../../formsData/ESFpatrimonio.json";
import AsideStudent from "../../../components/AsideStudent/AsideStudent.jsx";
import EsfValues from '../../../components/ESFvalues/ESFvalues.jsx';
import Accordeon from '../../../components/Accordeon/Accordeon.jsx';
import TabBar from '../../../components/TabBar/TabBar.jsx';
import { ValuesNames,excludedCalculateValorFiscalInputs } from "../../../utils/esfPatrimonio.js"
import { useState,useEffect } from "react";
import { getEsfPatrimonio, updateEsfPatrimonio } from "../../../services/esfPatrimonio.service.js";


const ESFpatrimonio = () => {

    const [data, setData] = useState(jsonData);
    useEffect(() => {
        getEsfPatrimonio()
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    console.error("Error en la respuesta", response);
                }
            })
            .catch((error) => {
                console.error("Error en la llamada a la API", error);
            });
    }, []);
    // suma secciones
    const calculateTotalSection = (path, newData, condition, extraCondition1, extraCondition2) => {
        // Verificar si el camino es válido y coincide con la condición
        if (!newData[condition[0]] || !newData[condition[0]][condition[1]] || path[0] !== condition[0] || path[1] !== condition[1]) return;
    
        const section = { ...newData[condition[0]][condition[1]] };
    
        let total = {
            ValorContable: 0,
            EfectoConversion: 0,
            MenorValorFiscal: 0,
            MayorValorFiscal: 0,
            ValorFiscal: 0
        };
    
        const keys = Object.keys(section);
    
        keys.forEach((key) => {
            if (key === "Total") return;
            const multiplier = (key.includes("Deterioro") || key.includes("Depreciacion") || key.includes(extraCondition1) || key.includes(extraCondition2)) ? -1 : 1;
            total.ValorContable += (section[key].ValorContable || 0) * multiplier;
            total.EfectoConversion += (section[key].EfectoConversion || 0) * multiplier;
            total.MenorValorFiscal += (section[key].MenorValorFiscal || 0) * multiplier;
            total.MayorValorFiscal += (section[key].MayorValorFiscal || 0) * multiplier;
            total.ValorFiscal += (section[key].ValorFiscal || 0) * multiplier;
        });
    
        // Asignar los valores calculados a newData
        newData[condition[0]][condition[1]].Total = { ...total };
    }
    //suma totales global
    const calculateTotalForTopLevelCategory = (topLevelCategory, newData) => {
        // Verificar si la categoría superior es válida
        if (!newData[topLevelCategory]) return;
    
        const category = { ...newData[topLevelCategory] };
    
        // Inicializar el objeto total con valores en 0
        let total = {
            ValorContable: 0,
            EfectoConversion: 0,
            MenorValorFiscal: 0,
            MayorValorFiscal: 0,
            ValorFiscal: 0
        };
    
        // Recorrer cada subcategoría
        Object.keys(category).forEach(subCategoryKey => {
            if (subCategoryKey === "Total") return; // Omitir el propio Total de la categoría superior
            const subCategory = category[subCategoryKey];
    
            if (subCategory.Total) {
                const multiplier = (subCategoryKey.includes("Deterioro") || subCategoryKey.includes("Depreciacion")) ? -1 : 1;
                total.ValorContable += (subCategory.Total.ValorContable || 0) * multiplier;
                total.EfectoConversion += (subCategory.Total.EfectoConversion || 0) * multiplier;
                total.MenorValorFiscal += (subCategory.Total.MenorValorFiscal || 0) * multiplier;
                total.MayorValorFiscal += (subCategory.Total.MayorValorFiscal || 0) * multiplier;
                total.ValorFiscal += (subCategory.Total.ValorFiscal || 0) * multiplier;
            } else {
                // Si la subcategoría no tiene un Total, sumar los valores directamente
                const keys = Object.keys(subCategory);
                keys.forEach(key => {
                    if (key === "Total") return;
                    const multiplier = (key.includes("Deterioro") || key.includes("Depreciacion")) ? -1 : 1;
                    total.ValorContable += (subCategory[key].ValorContable || 0) * multiplier;
                    total.EfectoConversion += (subCategory[key].EfectoConversion || 0) * multiplier;
                    total.MenorValorFiscal += (subCategory[key].MenorValorFiscal || 0) * multiplier;
                    total.MayorValorFiscal += (subCategory[key].MayorValorFiscal || 0) * multiplier;
                    total.ValorFiscal += (subCategory[key].ValorFiscal || 0) * multiplier;
                });
            }
        });
    
        // Asignar los valores calculados a newData
        newData[topLevelCategory].Total = { ...total };
    };
    //calcular suma subsecciones
    const calcuateSubSection = (total, section) => {
        total.ValorContable += section.ValorContable || 0;
        total.EfectoConversion += section.EfectoConversion || 0;
        total.MenorValorFiscal += section.MenorValorFiscal || 0;
        total.MayorValorFiscal += section.MayorValorFiscal || 0;
        total.ValorFiscal += section.ValorFiscal || 0;
    }
      const calculateTotalSectionGeneric = (path, newData, condition, level, extraCondition1, extraCondition2) => {
        // Verificar si el camino es válido y coincide con la condición
        for (let i = 0; i < condition.length; i++) {
            if (path[i] !== condition[i])
                return;
        }
    
        const section = { ...newData };
    
        let total = {
            ValorContable: 0,
            EfectoConversion: 0,
            MenorValorFiscal: 0,
            MayorValorFiscal: 0,
            ValorFiscal: 0
        };
    
        const keys = Object.keys(section);
    
        keys.forEach((key) => {
            if (key === "Total") return;
    
            if (typeof section[key].ValorContable !== "number" && typeof section[key].ValorFiscal !== "number") {
                // Si la sección contiene sub-secciones, calcular cada una
                Object.keys(section[key]).forEach((subKey) => {
                    calcuateSubSection(total, section[key][subKey]);
                });
                return;
            }
    
            // Determinar el multiplicador según las condiciones adicionales
            const multiplier = (key.includes("Deterioro") || key.includes("Depreciacion") || key.includes(extraCondition1) || key.includes(extraCondition2)) ? -1 : 1;
    
            total.ValorContable += (section[key].ValorContable || 0) * multiplier;
            total.EfectoConversion += (section[key].EfectoConversion || 0) * multiplier;
            total.MenorValorFiscal += (section[key].MenorValorFiscal || 0) * multiplier;
            total.MayorValorFiscal += (section[key].MayorValorFiscal || 0) * multiplier;
            total.ValorFiscal += (section[key].ValorFiscal || 0) * multiplier;
        });
    
        // Asignar los valores calculados a newData
        //newData[condition[0]][condition[1]].Total = { ...total };
        return total;
    }  
    //activos intangibles
    const calculateValorContableActivosIntangibles = (currentData) => {
        return (currentData.ActivosIntangiblesDistintosPlusvalia.Total.ValorContable || 0) + (currentData.PlusvaliaGoodwill.Total.ValorContable || 0);
    }
    const calculateEfectoConversionActivosIntangibles = (currentData) => {
        return (currentData.ActivosIntangiblesDistintosPlusvalia.Total.EfectoConversion || 0) + (currentData.PlusvaliaGoodwill.Total.EfectoConversion || 0);
    }
    const calculateMenorValorFiscalActivosIntangibles = (currentData) => {
        return (currentData.ActivosIntangiblesDistintosPlusvalia.Total.MenorValorFiscal || 0) + (currentData.PlusvaliaGoodwill.Total.MenorValorFiscal || 0);
    }
    const calculateMayorValorFiscalActivosIntangibles = (currentData) => {
        return (currentData.ActivosIntangiblesDistintosPlusvalia.Total.MayorValorFiscal || 0) + (currentData.PlusvaliaGoodwill.Total.MayorValorFiscal || 0);
    }
    const calculateValorFiscalActivosIntangibles = (currentData) => {
        return (currentData.ActivosIntangiblesDistintosPlusvalia.Total.ValorFiscal || 0) + (currentData.PlusvaliaGoodwill.Total.ValorFiscal || 0);
    }
    //Activos biológicos  
    const calculateValorContableActivosBiologicos = (currentData) => {
        return (currentData.AnimalesVivos.Total.ValorContable || 0) + (currentData.PlantasProductorasCultivosConsumibles.Total.ValorContable || 0);
    }
    const calculateEfectoConversionActivosBiologicos = (currentData) => {
        return (currentData.AnimalesVivos.Total.EfectoConversion || 0) + (currentData.PlantasProductorasCultivosConsumibles.Total.EfectoConversion || 0);
    }
    const calculateMenorValorFiscalActivosBiologicos = (currentData) => {
        return (currentData.AnimalesVivos.Total.MenorValorFiscal || 0) + (currentData.PlantasProductorasCultivosConsumibles.Total.MenorValorFiscal || 0);
    }
    const calculateMayorValorFiscalActivosBiologicos = (currentData) => {
        return (currentData.AnimalesVivos.Total.MayorValorFiscal || 0) + (currentData.PlantasProductorasCultivosConsumibles.Total.MayorValorFiscal || 0);
    }
    const calculateValorFiscalActivosBiologicos = (currentData) => {
        return (currentData.AnimalesVivos.Total.ValorFiscal || 0) + (currentData.PlantasProductorasCultivosConsumibles.Total.ValorFiscal || 0);
    }
    // Inversiones Instrumentos Financieros Derivados VN
    const calculateValorContableInversionesInstrumentosFinancierosDerivadosVN = (currentData) => {
        return (currentData.InversionesInstrumentosFinancierosDerivados.Total.ValorContable || 0) - (currentData.DeterioroAcumuladoInversiones.Total.ValorContable || 0);
    }
    const calculateEfectoConversionInversionesInstrumentosFinancierosDerivadosVN = (currentData) => {
        return (currentData.InversionesInstrumentosFinancierosDerivados.Total.EfectoConversion || 0) - (currentData.DeterioroAcumuladoInversiones.Total.EfectoConversion || 0);
    }
    const calculateMenorValorFiscalInversionesInstrumentosFinancierosDerivadosVN = (currentData) => {
        return (currentData.InversionesInstrumentosFinancierosDerivados.Total.MenorValorFiscal || 0) - (currentData.DeterioroAcumuladoInversiones.Total.MenorValorFiscal || 0);
    }
    const calculateMayorValorFiscalInversionesInstrumentosFinancierosDerivadosVN = (currentData) => {
        return (currentData.InversionesInstrumentosFinancierosDerivados.Total.MayorValorFiscal || 0) - (currentData.DeterioroAcumuladoInversiones.Total.MayorValorFiscal || 0);
    }
    const calculateValorFiscalInversionesInstrumentosFinancierosDerivadosVN = (currentData) => {
        return (currentData.InversionesInstrumentosFinancierosDerivados.Total.ValorFiscal || 0) - (currentData.DeterioroAcumuladoInversiones.Total.ValorFiscal || 0);
    }
    //Cuentas Comerciales Cobrar Otras Por Cobrar
    const calculateValorContableCuentasComercialesCobrarOtrasPorCobrar = (currentData) => {
        return (currentData.CuentasDocumentosPorCobrar.Total.ValorContable || 0) - (currentData.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.ValorContable || 0);
    }
    const calculateEfectoConversionCuentasComercialesCobrarOtrasPorCobrar = (currentData) => {
        return (currentData.CuentasDocumentosPorCobrar.Total.EfectoConversion || 0) - (currentData.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.EfectoConversion || 0);
    }
    const calculateMenorValorFiscalCuentasComercialesCobrarOtrasPorCobrar = (currentData) => {
        return (currentData.CuentasDocumentosPorCobrar.Total.MenorValorFiscal || 0) - (currentData.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.MenorValorFiscal || 0);
    }
    const calculateMayorValorFiscalCuentasComercialesCobrarOtrasPorCobrar = (currentData) => {
        return (currentData.CuentasDocumentosPorCobrar.Total.MayorValorFiscal || 0) - (currentData.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.MayorValorFiscal || 0);
    }
    const calculateValorFiscalCuentasComercialesCobrarOtrasPorCobrar = (currentData) => {
        return (currentData.CuentasDocumentosPorCobrar.Total.ValorFiscal || 0) - (currentData.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.ValorFiscal || 0);
    }
    //total patrimonio
    const calculateValorContabletotalpatrimonio = (currentData) => {
        return (currentData.Activos.Total.ValorContable || 0) - (currentData.Pasivos.Total.ValorContable || 0);
    }
    const calculateEfectoConversiontotalpatrimonio = (currentData) => {
        return (currentData.Activos.Total.EfectoConversion || 0) - (currentData.Pasivos.Total.EfectoConversion || 0);
    }
    const calculateMenorValorFiscaltotalpatrimonio = (currentData) => {
        return (currentData.Activos.Total.MenorValorFiscal || 0) - (currentData.Pasivos.Total.MenorValorFiscal || 0);
    }
    const calculateMayorValorFiscaltotalpatrimonio = (currentData) => {
        return (currentData.Activos.Total.MayorValorFiscal || 0) - (currentData.Pasivos.Total.MayorValorFiscal || 0);
    }
    const calculateValorFiscaltotalpatrimonio = (currentData) => {
        if((currentData.Activos.Total.ValorFiscal || 0) - (currentData.Pasivos.Total.ValorFiscal || 0)>0){
            return (currentData.Activos.Total.ValorFiscal || 0) - (currentData.Pasivos.Total.ValorFiscal || 0);
        }else{
            return 0;
        }
    }
    //calcular valor fiscal
    const clculateValorFiscal = (path) => {
        const pathArray = path.split(".");

        console.log({pathArray, excludedCalculateValorFiscalInputs})

        console.log(excludedCalculateValorFiscalInputs.some((elemment) =>
            pathArray.includes(elemment)
          ))
    
        if (          
          !excludedCalculateValorFiscalInputs.some((elemment) =>
            pathArray.includes(elemment)
          )
        ) {
          let newData = { ...data };
          let temp = newData;
    
          let auxData = newData[pathArray[0]];
    
          for (let i = 1; i < pathArray.length - 1; i++) {
            auxData = auxData[pathArray[i]];
          }
    
          let calculatedValue =
            (auxData.ValorContable ||  0 ) +
            (auxData.EfectoConversion || 0) -
            (auxData.MenorValorFiscal ||  0) +
            (auxData.MayorValorFiscal || 0);
    
          for (let i = 0; i < pathArray.length - 1; i++) {
            if (!temp[pathArray[i]]) {
              temp[pathArray[i]] = {}; // Crear objeto si no existe
            }
            temp = temp[pathArray[i]]; // Mover al siguiente nivel del objeto
          }
    
          temp.ValorFiscal = calculatedValue;
        }
      };
    



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
        
        
        clculateValorFiscal(name);  

        // Activos Equivalentes Efectivo
        calculateTotalSection(pathArray, updatedData, ["Activos", "ActivosEquivalentesEfectivo"]);
        // Inversiones Instrumentos Financieros Derivados VN
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total =
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados,
            },
            [
                "Activos",
                "InversionesInstrumentosFinancierosDerivadosVN",
                "InversionesInstrumentosFinancierosDerivados",
            ],
            "Depreciacion",
        ) || updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total;
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total = 
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones,
            },
            [
                "Activos",
                "InversionesInstrumentosFinancierosDerivadosVN",
                "DeterioroAcumuladoInversiones",
            ],
        ) || updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total;
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.ValorContable = calculateValorContableInversionesInstrumentosFinancierosDerivadosVN(updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN);
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.EfectoConversion = calculateEfectoConversionInversionesInstrumentosFinancierosDerivadosVN(updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN);
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.MenorValorFiscal = calculateMenorValorFiscalInversionesInstrumentosFinancierosDerivadosVN(updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN);
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.MayorValorFiscal = calculateMayorValorFiscalInversionesInstrumentosFinancierosDerivadosVN(updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN);
        updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.ValorFiscal = calculateValorFiscalInversionesInstrumentosFinancierosDerivadosVN(updatedData.Activos.InversionesInstrumentosFinancierosDerivadosVN);
        //Cuentas Comerciales Cobrar Otras Por Cobrar
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total =
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar,
            },
            [
                "Activos",
                "CuentasComercialesCobrarOtrasPorCobrar",
                "CuentasDocumentosPorCobrar",
            ],
            "Depreciacion",
        ) || updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total;
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total =
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar,
            },
            [
                "Activos",
                "CuentasComercialesCobrarOtrasPorCobrar",
                "DeterioroAcumuladoValorCuentasDocumentosCobrar",
            ],
        ) || updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total;
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorContable = calculateValorContableCuentasComercialesCobrarOtrasPorCobrar(updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar);
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.EfectoConversion = calculateEfectoConversionCuentasComercialesCobrarOtrasPorCobrar(updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar);
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.MenorValorFiscal = calculateMenorValorFiscalCuentasComercialesCobrarOtrasPorCobrar(updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar);
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.MayorValorFiscal = calculateMayorValorFiscalCuentasComercialesCobrarOtrasPorCobrar(updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar);
        updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorFiscal = calculateValorFiscalCuentasComercialesCobrarOtrasPorCobrar(updatedData.Activos.CuentasComercialesCobrarOtrasPorCobrar);

        //INVENTARIOS
        calculateTotalSection(pathArray, updatedData, ["Activos", "Inventarios"]);
        //Gastos pagados por anticipado
        calculateTotalSection(pathArray, updatedData, ["Activos", "GastosPagadosPorAnticipado"]);
        //Activos por impuestos corrientes
        calculateTotalSection(pathArray, updatedData, ["Activos", "ActivosImpuestosCorrientes"]);
        //Activos por impuestos diferidos
        //Propiedades, planta y equipo
        updatedData.Activos.PropiedadesPlantaEquipo.Total = 
        calculateTotalSectionGeneric(
            [...pathArray], 
            {
                ...updatedData.Activos.PropiedadesPlantaEquipo,
            }, 
            [
                "Activos", 
                "PropiedadesPlantaEquipo",
            ], 
        ) || updatedData.Activos.PropiedadesPlantaEquipo.Total;
        //Activos intangibles 
        updatedData.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total =  
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia,
            },
            [
                "Activos",
                "ActivosIntangibles",
                "ActivosIntangiblesDistintosPlusvalia",
            ],
            "Amortizacion",
            "Amortizacion",
        ) || updatedData.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total;
        updatedData.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total =
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.ActivosIntangibles.PlusvaliaGoodwill,
            },
            [
                "Activos",
                "ActivosIntangibles",
                "PlusvaliaGoodwill",
            ],
            "Amortizacion",
            "Amortizacion",
        ) || updatedData.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total;
        updatedData.Activos.ActivosIntangibles.Total.ValorContable = calculateValorContableActivosIntangibles(updatedData.Activos.ActivosIntangibles);
        updatedData.Activos.ActivosIntangibles.Total.EfectoConversion = calculateEfectoConversionActivosIntangibles(updatedData.Activos.ActivosIntangibles);
        updatedData.Activos.ActivosIntangibles.Total.MenorValorFiscal = calculateMenorValorFiscalActivosIntangibles(updatedData.Activos.ActivosIntangibles);
        updatedData.Activos.ActivosIntangibles.Total.MayorValorFiscal = calculateMayorValorFiscalActivosIntangibles(updatedData.Activos.ActivosIntangibles);
        updatedData.Activos.ActivosIntangibles.Total.ValorFiscal = calculateValorFiscalActivosIntangibles(updatedData.Activos.ActivosIntangibles);
        //Propiedades de inversión
        updatedData.Activos.PropiedadesInversion.Total = 
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.PropiedadesInversion,
            }, 
            [
                "Activos", 
                "PropiedadesInversion",
            ], 
        ) || updatedData.Activos.PropiedadesInversion.Total;
        //Activos no corrientes
        calculateTotalSection(pathArray, updatedData, ["Activos", "ActivosNoCorrientes"]);
        //Activos biológicos   
        updatedData.Activos.ActivosBiologicos.AnimalesVivos.Total =
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.ActivosBiologicos.AnimalesVivos,
            },
            [
                "Activos",
                "ActivosBiologicos",
                "AnimalesVivos",
            ],
            "Depreciacion",
        ) || updatedData.Activos.ActivosBiologicos.AnimalesVivos.Total;

        updatedData.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total =
        calculateTotalSectionGeneric(
            [...pathArray],
            {
                ... updatedData.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles,
            },
            [
                "Activos",
                "ActivosBiologicos",
                "PlantasProductorasCultivosConsumibles",
            ],
            "Depreciacion",
        ) || updatedData.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total;

        updatedData.Activos.ActivosBiologicos.Total.ValorContable = calculateValorContableActivosBiologicos(updatedData.Activos.ActivosBiologicos);
        updatedData.Activos.ActivosBiologicos.Total.EfectoConversion = calculateEfectoConversionActivosBiologicos(updatedData.Activos.ActivosBiologicos);
        updatedData.Activos.ActivosBiologicos.Total.MenorValorFiscal = calculateMenorValorFiscalActivosBiologicos(updatedData.Activos.ActivosBiologicos);
        updatedData.Activos.ActivosBiologicos.Total.MayorValorFiscal = calculateMayorValorFiscalActivosBiologicos(updatedData.Activos.ActivosBiologicos);
        updatedData.Activos.ActivosBiologicos.Total.ValorFiscal = calculateValorFiscalActivosBiologicos(updatedData.Activos.ActivosBiologicos);
        //Otros activos
        calculateTotalSection(pathArray, updatedData, ["Activos", "OtrosActivos"]);
        //Activos Total
        calculateTotalForTopLevelCategory("Activos", updatedData);
        //Pasivos
        //Obligaciones financieras y cuentas por pagar
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "ObligacionesFinancierasCuentasPorPagar"]);
        //Arrendamientos por pagar
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "ArrendamientosPorPagar"]);
        //Otros Pasivos Financieros
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "OtrosPasivosFinancieros"]);  
        //Impuestos, gravámenes y tasas por pagar
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "ImpuestosGravamenesTasasPorPagar"]);
        //Pasivos por impuestos diferidos
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "PasivosImpuestosDiferidos"]);
        //Pasivos por beneficios a los empleados
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "PasivosBeneficiosEmpleados"]);
        //Provisiones
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "Provisiones"]);
        //Pasivos por ingresos diferidos
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "PasivosIngresosDiferidos"]);
        //Otros pasivos
        calculateTotalSection(pathArray, updatedData, ["Pasivos", "OtrosPasivos"]);
        //pasivos Total
        calculateTotalForTopLevelCategory("Pasivos", updatedData);
        //Patrimonio Contable
        //Capital Social Reservas
        calculateTotalSection(pathArray, updatedData, ["PatrimonioContable", "CapitalSocialReservas"], "Acciones");
        //Resultados del ejercicio
        calculateTotalSection(pathArray, updatedData, ["PatrimonioContable", "ResultadoEjercicio"], "Perdida");
        //Resultados acumulados
        calculateTotalSection(pathArray, updatedData, ["PatrimonioContable", "ResultadosAcumulados"], "Perdida");
        //Ganancias (pérdidas) acumuladas o retenidas por la adopción por primera
        calculateTotalSection(pathArray, updatedData, ["PatrimonioContable", "GananciasPerdidasAcumuladasRetenidasAdopcionPrimera"], "Perdida");
        //OtroResultadoIntegralAcumulado
        calculateTotalSection(pathArray, updatedData, ["PatrimonioContable", "OtroResultadoIntegralAcumulado"], "Perdida", "Negativo");
        //Patrimonio Contable Total
        calculateTotalForTopLevelCategory("PatrimonioContable", updatedData);
        //Total Patrimonio
        updatedData.TotalPatrimonio.ValorContable = calculateValorContabletotalpatrimonio(updatedData);
        updatedData.TotalPatrimonio.EfectoConversion = calculateEfectoConversiontotalpatrimonio(updatedData);
        updatedData.TotalPatrimonio.MenorValorFiscal = calculateMenorValorFiscaltotalpatrimonio(updatedData);
        updatedData.TotalPatrimonio.MayorValorFiscal = calculateMayorValorFiscaltotalpatrimonio(updatedData);
        updatedData.TotalPatrimonio.ValorFiscal = calculateValorFiscaltotalpatrimonio(updatedData);
        // Calculo de los totales
        setData(updatedData);
        updateEsfPatrimonio(updatedData);
        
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
                {activeTab === 'Activos' && renderSections(data.Activos, 'Activos', '' , ValuesNames)}
                {activeTab === 'Pasivos' && renderSections(data.Pasivos, 'Pasivos', '' , ValuesNames)}
                {activeTab === 'TotalPatrimonio' && renderSections(data.TotalPatrimonio, 'TotalPatrimonio', '' , ValuesNames)}
                {activeTab === 'PatrimonioContable' && renderSections(data.PatrimonioContable, 'PatrimonioContable', '', ValuesNames)}
                {activeTab === 'DatosInformativos' && renderSections(data.DatosInformativos, 'DatosInformativos', '' , ValuesNames)}

            </section>
        </main>
    );
};

export default ESFpatrimonio;
