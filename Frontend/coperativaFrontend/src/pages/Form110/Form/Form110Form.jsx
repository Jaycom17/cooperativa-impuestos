import jsonData from "../../../formsData/Form110.json";
import AsideStudent from "../../../components/AsideStudent/AsideStudent.jsx";
import Form110Values from '../../../components/Form110Values/Form110Values.jsx';
import Accordeon from '../../../components/Accordeon/Accordeon.jsx';
import TabBar from '../../../components/TabBar/TabBar.jsx';
import { useState } from "react";

const From110Form = () => {
  const [data, setData] = useState(jsonData);

    const [data, setData] = useState(jsonData);

    const calculateTotalPatBruto = (currentData) => {
        return (currentData.EfectvEquiEfect || 0) + (currentData.InvInstFinDeriv || 0) + (currentData.CuentDocArreFinCob || 0) + (currentData.Inv || 0) + (currentData.ActivInt || 0) + (currentData.ActivBio || 0) + (currentData.PPEPANCMC || 0) + (currentData.Otro || 0);
    }

    const calculateTotalLiqui = (currentData) => {
        if (((currentData.TotalBruto || 0) - (currentData.Pasiv || 0)) > 0) {
            return (currentData.TotalBruto || 0) - (currentData.Pasiv || 0);
        } else {
            return 0;
        }
    }

    const calculateTotBruto = (currentData) => {
        return (currentData.Brutos || 0) + (currentData.Finan || 0) + (currentData.DividNoCont || 0) +
            (currentData.DividDistrEntNoCol || 0) + (currentData.DividGravExt06 || 0) + (currentData.DividGravNat06 || 0) +
            (currentData.DividGravNat07 || 0) + (currentData.DiviDNoGrav07 || 0) + (currentData.DividGravExt07 || 0) +
            (currentData.DividGravMega07 || 0) + (currentData.Otro || 0)
    }

    const calculateTotNeto = (currentData) => {
        if (((currentData.TotBruto || 0) - (currentData.DevRebDec || 0) - (currentData.IngNoRent || 0)) > 0) {
            return (currentData.TotBruto || 0) - (currentData.DevRebDec || 0) - (currentData.IngNoRent || 0);
        } else {
            return 0;
        }
    }

    const calculateTotCostGast = (currentData) => {
        return (currentData.Cost || 0) + (currentData.GastAdmin || 0) + (currentData.GastDistVent || 0) +
            (currentData.GastFinan || 0) + (currentData.Otro || 0);
    }

    const calculateLiquidOrd = (currentData) => {
        const result = (currentData.Ingre.Tot || 0) + (currentData.ESAL.InvLiqui || 0) + (currentData.Renta.RecuDedu || 0) +
            (currentData.Renta.Passiv || 0) - (currentData.Ingre.DividGravNat06 || 0) - (currentData.Ingre.DividGravNat07 || 0) -
            (currentData.Ingre.DiviDNoGrav07 || 0) - (currentData.Ingre.DividGravExt07 || 0) - (currentData.Ingre.DividGravMega07 || 0) -
            (currentData.CostDedic.Tot || 0) - (currentData.ESAL.InvEfecAnno || 0);
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    }

    const calculatePerdidLiqui = (currentData) => {
        const result = (currentData.Ingre.DividGravNat06 || 0) + (currentData.Ingre.DividGravNat07 || 0) + (currentData.Ingre.DiviDNoGrav07 || 0) +
            (currentData.Ingre.DividGravExt07 || 0) + (currentData.Ingre.DividGravMega07 || 0) + (currentData.CostDedic.Tot || 0) +
            (currentData.ESAL.InvEfecAnno || 0) - (currentData.Ingre.Tot || 0) - (currentData.ESAL.InvLiqui || 0) -
            (currentData.Renta.RecuDedu || 0) - (currentData.Renta.Passiv || 0);
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    }

    const calculateRentLiquida = (currentData) => {
        return (currentData.LiquidOrd || 0) - (currentData.Compensacion || 0);
    }

    const calculateRenLiquida = (currentData) => {
        if ((currentData.RentLiquida || 0) > (currentData.RentPresun || 0)) {
            return (currentData.RentLiquida || 0) - (currentData.RentExenta || 0) - (currentData.RenGravable || 0);
        } else {
            return (currentData.RentPresun || 0) - (currentData.RentExenta || 0) - (currentData.RenGravable || 0);
        }
    }

    const calculateTotImpRentLiquidGrav = (currentData) => {
        return (currentData.RentLiquidGrav || 0) + (currentData.DivPartGravET00 || 0) + + (currentData.DivPartGravET || 0) +
            (currentData.DivPartGrav27 || 0) + (currentData.DivPartGrav || 0) + + (currentData.DivPartGrav33 || 0);
    }
    
    const calculateImpNetRent = (currentData) => {
        const result = (currentData.TotImpRentLiquidGrav || 0) - (currentData.DescTrib || 0);
        if(result>0){
            return result;
        }else{
            return 0;
        }
    }
    
    const calculateTotImpCarg = (currentData) => {
        const result = (currentData.ImpNetRent || 0) + (currentData.ImpGanOcas || 0) - (currentData.DescPorImpPagad || 0);
        if(result > 0){
            return result;
        }else{
            return 0;
        }
    }
    
    const calculateTotReten = (currentData) => {
        return (currentData.AutoReten || 0) + (currentData.OtraReten || 0);
    }

    const calculateSaldoPagImp = (currentData) => {
        const result = (currentData.TotImpCarg || 0) + (currentData.AntRenAnnoGravSig || 0) + (currentData.SobreInstFin.SobreInstFinan || 0) +
            (currentData.SobreInstFin.AnticSobreInstAnnoGravSig || 0) - (currentData.ValInvObraImp50 || 0) - (currentData.DescEfectInvObrImp || 0) -
            (currentData.CredFisc || 0) - (currentData.AnticRentLiquidAnnoAntGrav || 0) - (currentData.SaldFavAnnoAntGrav || 0) -
            (currentData.Reten.TotReten || 0) - (currentData.SobreInstFin.AnticSobreInstAnnoGranAnt || 0);
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    } 

    const calculateTotSaldPag = (currentData) => {
        const result = (currentData.TotImpCarg || 0) + (currentData.AntRenAnnoGravSig || 0) + (currentData.SobreInstFin.SobreInstFinan || 0) +
            (currentData.SobreInstFin.AnticSobreInstAnnoGravSig || 0) + (currentData.Sansion || 0) - (currentData.ValInvObraImp50 || 0) - 
            (currentData.DescEfectInvObrImp || 0) - (currentData.CredFisc || 0) - (currentData.AnticRentLiquidAnnoAntGrav || 0) - 
            (currentData.SaldFavAnnoAntGrav || 0) - (currentData.Reten.TotReten || 0) - (currentData.SobreInstFin.AnticSobreInstAnnoGranAnt || 0);
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    } 
    
    const calculateTotSaldFav = (currentData) => {
        const result = (currentData.ValInvObraImp50 || 0) + (currentData.DescEfectInvObrImp || 0) + (currentData.CredFisc || 0) + 
        (currentData.AnticRentLiquidAnnoAntGrav || 0) + (currentData.SaldFavAnnoAntGrav || 0) + (currentData.Reten.TotReten || 0) + 
        (currentData.SobreInstFin.AnticSobreInstAnnoGranAnt || 0) - (currentData.TotImpCarg || 0) - (currentData.AntRenAnnoGravSig || 0) - 
        (currentData.SobreInstFin.SobreInstFinan || 0) - (currentData.SobreInstFin.AnticSobreInstAnnoGravSig || 0) - (currentData.Sansion || 0);
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
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

        // Actualizar el estado con el objeto modificado
        updatedData.DatosResum.Patrim.TotalBruto = calculateTotalPatBruto(updatedData.DatosResum.Patrim);
        updatedData.DatosResum.Patrim.TotalLiqui = calculateTotalLiqui(updatedData.DatosResum.Patrim);
        updatedData.DatosResum.Ingre.TotBruto = calculateTotBruto(updatedData.DatosResum.Ingre);
        updatedData.DatosResum.Ingre.Tot = calculateTotNeto(updatedData.DatosResum.Ingre);
        updatedData.DatosResum.CostDedic.Tot = calculateTotCostGast(updatedData.DatosResum.CostDedic);
        updatedData.DatosResum.Renta.LiquidOrd = calculateLiquidOrd(updatedData.DatosResum);
        updatedData.DatosResum.Renta.PerdidLiqui = calculatePerdidLiqui(updatedData.DatosResum);
        updatedData.DatosResum.Renta.RentLiquida = calculateRentLiquida(updatedData.DatosResum.Renta);
        updatedData.DatosResum.Renta.RenLiquida = calculateRenLiquida(updatedData.DatosResum.Renta);
        updatedData.DatosResum.LiquiPriv.TotImpRentLiquidGrav = calculateTotImpRentLiquidGrav(updatedData.DatosResum.LiquiPriv.ImpuesRentLiquiGrav);
        updatedData.DatosResum.LiquiPriv.ImpNetRent = calculateImpNetRent(updatedData.DatosResum.LiquiPriv);
        updatedData.DatosResum.LiquiPriv.TotImpCarg = calculateTotImpCarg(updatedData.DatosResum.LiquiPriv);
        updatedData.DatosResum.LiquiPriv.Reten.TotReten = calculateTotReten(updatedData.DatosResum.LiquiPriv.Reten);
        updatedData.DatosResum.LiquiPriv.SaldoPagImp = calculateSaldoPagImp(updatedData.DatosResum.LiquiPriv);
        updatedData.DatosResum.LiquiPriv.TotSaldPag = calculateTotSaldPag(updatedData.DatosResum.LiquiPriv);
        updatedData.DatosResum.LiquiPriv.TotSaldFav = calculateTotSaldFav(updatedData.DatosResum.LiquiPriv);
        // Calculo de los totales
        setData(updatedData);
        console.log(data)
    };

    const tabs = [
        {name: 'DatoPers', label: 'Datos Personales'},
        {name: 'DatosResum', label: 'Datos Resumidos'},
        {name: 'Totales', label: 'Totales'}
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const renderSections = (sectionData, pathPrefix, excludeSection = "") => {
        return Object.keys(sectionData).map((sectionKey) => {
            if (sectionKey === excludeSection) return null;
            return (
                <div key={sectionKey}>
                    <Form110Values 
                        title={sectionKey} 
                        path={`${pathPrefix}.${sectionKey}`} 
                        data={sectionData[sectionKey]} 
                        handleChange={handleChange}
                    />
                </div>
            );
        });
    };

    return (
        <main className="flex md:flex-row w-full">
            <AsideStudent />
            <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
                <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
                {activeTab === 'DatoPers' && renderSections(data.DatoPers, 'DatoPers', '')}
            </section>
        </main>
    );
  };

export default From110Form;
