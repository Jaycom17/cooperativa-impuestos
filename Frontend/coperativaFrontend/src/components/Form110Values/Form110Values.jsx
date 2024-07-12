import PropTypes from "prop-types";
import Accordeon from "../Accordeon/Accordeon";4
import { Form110Total } from "../../utils/form110.js";

function Form110Values({ json, path, handleChange}) {
    //{ title, path, data, handleChange }



    const Names = {
        "DatoPers": "Datos Personales",
        "Anno": "Año",
        "NumForm": "Numero Formulario",
        "PriApll": "Primer Apellido",
        "SecApll": "Segundo Apellido",
        "PriNomb": "Primer Nombre",
        "OtrosNomb": "Otros Nombres",
        "RazonSoc": "Razon Social",
        "CodDir": "Cód. Dirección Seccional",
        "ActEcoPrin": "Actviidad económica principal",
        "Correct": "Correccion",
        "Cod": "Codigo",
        "NoFormAnt": "Numero Formato anterior",
        "FractAnnoAgrv": "Fracción año gravable siguiente (2024)",
        "RenunPertRegTribEsp": "Renuncio a pertencer al Régimen Tributario especial",
        "VinPagObraImpu": "Vinculado al pago de obras por impuestos",
        "PerdFiscAcumAnnoAnt": "Pérdidas fiscales acumuladas años anteriores sin compensar",
        "DatosResum": "Datos Resumidos",
        "DatosInf": "Datos Informativos",
        "TotalCostGastNom": "Total costos y gastos de nómina",
        "AportSistSegSocial": "Aportes al sistema de seguridad social",
        "AportSenaEtc": "Aportes al SENA,ICBF, Cajas compensación",
        "Patrim": "Patrimonio",
        "EfectvEquiEfect": "Efectivo y equivalentes de efectivo",
        "InvInstFinDeriv": "Inversiones e instrumentos financieros derivados",
        "CuentDocArreFinCob": "Cuentas, documentos y arrendamientos financieros por cobrar",
        "Inv": "Inventarios",
        "ActivInt": "Activos intangibles",
        "ActivBio": "Activos biológicos",
        "PPEPANCMC": "Propiedades, planta y equipo, propiedades de inversión y ANCMV",
        "Otro": "Otros",
        "TotalBruto": "Total patrimonio bruto",
        "Pasiv": "Pasivos",
        "TotalLiqui": "Total patrimonio líquido",
        "Ingre": "Ingresos",
        "Brutos": "Ingresos brutos de actividades ordinarias",
        "Finan": "Ingresos financieros",
        "DividNoCont": "Dividendos y/o participaciones no constitutivos de renta ni ganancia ocasional",
        "DividDistrEntNoCol": "Dividendos y/o participaciones distribuidos por entidades no residentes en Colombia a una CHC y prima en colocación de acciones",
        "DividGravExt06": "Dividendos y/o participaciones gravadas, años 2016 y anteriores, recibidos por sociedades extranjeras",
        "DividGravNat06": "Dividendos y/o participaciones gravadas, años 2016 y anteriores, recibidos por personas naturales sin residencia fiscal ",
        "DividGravNat07": "Dividendos y/o participaciones gravadas, años 2017 y siguientes., recibidos por personas naturales sin residencia fiscal, excepto las que se reportan en el renglón 56",
        "DiviDNoGrav07": "Dividendos y/o participaciones no gravadas pero que tributarán al 10%",
        "DividGravExt07": "Dividendos y/o participaciones gravadas, años 2017 y siguientes, recibidos por establecimientos permanentes y por sociedades extranjeras , excepto las que se reportan en el renglón 56",
        "DividGravMega07": "Dividendos y participaciones gravados, años 2017 y siguientes",
        "TotBruto": "Total ingresos brutos",
        "DevRebDec": "Devoluciones, rebajas y descuentos en ventas",
        "IngNoRent": "Ingresos no constitutivos de renta ni ganancia ocasional",
        "Tot": "Total",
        "CostDedic": "Costos y deducciones",
        "Cost": "Costos",
        "GastAdmin": "Gastos de administración",
        "GastDistVent": "Gastos de distribución y ventas",
        "GastFinan": "Gastos financieros",
        "InvEfecAnno": "Inversiones efectuadas en el año",
        "InvLiqui": "Inversiones liquidadas de periodos gravables anteriores",
        "RecuDedu": "Renta por recuperación de deducciones",
        "Passiv": "Renta pasiva-ECE sin residencia fiscal en Colombia",
        "LiquidOrd": "Renta líquida ordinaria del ejercicio",
        "PerdidLiqui": "Pérdida líquida del ejercicio",
        "Compensacion": "Compensaciones",
        "RentLiquida": "Renta líquida",
        "RentPresun": "Renta presuntiva",
        "RentExenta": "Renta exenta",
        "RenGravable": "Rentas gravables",
        "RenLiquida": "Renta líquida gravada",
        "GananciasOcasion": "Ganancias ocasionales",
        "IngreGananOcasion": "Ingresos por ganancias ocasionales",
        "RentDeudReg": "Rentas deudores régimen Ley 1116 de 2006",
        "UtiliPerdFisc": "Utilización pérdidas fiscales acumuladas",
        "CostGananOcas": "Costos por ganancias ocasionales",
        "GananOcasionNoAgrav": "Ganancias ocasionales no gravadas y exentas",
        "GananOcasGrav": "Ganancias ocasionales gravables",
        "LiquiPriv": "Liquidación privada",
        "ImpuesRentLiquiGrav": "Impuestos sobre las rentas líquidas gravables",
        "RentLiquidGrav": "Impuesto sobre la renta líquida gravable",
        "DivPartGravET00": "Dividendos y/o participaciones gravadas a la tarifa del 10%",
        "DivPartGravET": "Dividendos y/o participaciones gravadas a la tarifa del artículo 240 del ET",
        "DivPartGrav27": "Dividendos y/o participaciones gravadas a la tarifa del 27%",
        "DivPartGrav": "Dividendos y/o participaciones gravadas a la tarifa  del art. 240",
        "DivPartGrav33": "De dividendos y/o participaciones gravadas a la tarifa del 33%",
        "TotImpRentLiquidGrav": "Total impuesto sobre las rentas líquidas gravables",
        "DescTrib": "Descuentos tributarios",
        "ImpNetRent": "Impuesto neto de renta",
        "ImpGanOcas": "Impuesto de ganancias ocasionales",
        "DescPorImpPagad": "Descuentos por impuestos pagados en el exterior por ganancias ocasionales",
        "TotImpCarg": "Total impuesto a cargo",
        "ValInvObraImp50": "Valor inversión obras por impuestos",
        "DescEfectInvObrImp": "Descuento efectivo inversión obras por impuestos",
        "CredFisc": "Crédito fiscal artículo 256-1 ET",
        "AnticRentLiquidAnnoAntGrav": "Anticipo renta liquidado año gravable anterior",
        "SaldFavAnnoAntGrav": "Saldo a favor año gravable anterior sin solicitud de devolución y/o compensación",
        "Reten": "Retenciones",
        "AutoReten": "Autorretenciones",
        "OtraReten": "Otras retenciones",
        "TotReten": "Total retenciones año gravable a declarar",
        "AntRenAnnoGravSig": "Anticipo renta para el año gravable siguiente",
        "SobreInstFin": "Sobretasa instituciones financieras",
        "AnticSobreInstAnnoGranAnt": "Anticipo sobretasa instituciones financieras año gravable anterior",
        "SobreInstFinan": "Sobretasa instituciones financieras",
        "AnticSobreInstAnnoGravSig": "Anticipo sobretasa instituciones financieras año gravable siguiente",
        "SaldoPagImp": "Saldo a pagar por impuesto",
        "Sansion": "Sanciones",
        "TotSaldPag": "Total saldo a pagar",
        "TotSaldFav": "Total saldo a favor",
        "ValTotExiObrImpMod0": "Valor total impuesto exigible por obras por impuestos modalidad de pago 1",
        "ValTotProyObrImpMod2": "Valor total proyecto obras por impuestos modalidad de pago 2",
        "CodRepre": "Cód. Representación",
        "CodCont": "Código Contador o Revisor Fiscal",
        "Salvedad": "Con salvedades",
        "NoTarjProf": "No. Tarjeta profesional",
        "PagoTot": "Pago total"
    };

    const renderTextField = (label, value, key) => {
        const displayTitle = Names[label] || label;
        return(
            <div key={key} className="flex flex-col space-y-2 bg-white">
            <label className="bg-white font-semibold text-sm" htmlFor={key}>
                {displayTitle}
            </label>
            <input
                className=" bg-white border rounded-md p-1"
                type="text"
                name={key}
                placeholder={key}
                onChange={(e) => handleChange(e)}
            />
        </div>
        )
    };

    const renderNumberField = (label, value, key) => {
        const displayTitle = Names[label] || label;
        return(
            <div key={key} className="flex flex-col space-y-2 bg-white">
            <label className="bg-white font-semibold text-sm" htmlFor={key}>
                {displayTitle}
            </label>
            {Form110Total.includes(key.split(".").pop()) ? <p className="bg-white rounded-md p-1">{value}</p> : 
            <input
                className=" bg-white border rounded-md p-1"
                type="number"
                name={key}
                placeholder={value}
                onChange={(e) => handleChange(e)}
            />
    }
        </div>
        )
    };

    const renderBooleanField = (label, value, key) => {
        const displayTitle = Names[label] || label;
        return (
            <div key={key} className="flex flex-col space-y-2 bg-white">
                <label className="bg-white font-semibold text-sm" htmlFor={key}>
                    {displayTitle}
                </label>
                <select
                    className="bg-white border rounded-md p-1"
                    name={key}
                    defaultValue={value ? 'true' : 'false'}
                    onChange={
                        (e) => handleChange(e)
                    }
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>
        );
    };

    const renderContent = (data, parentKey) => {
        return Object.entries(data).map(([key, val]) => {
            const uniqueKey = `${parentKey}.${key}`;
            if (typeof val === 'object') {
                return renderAccordeon(key, val, uniqueKey);
            }else if(typeof val === 'string'){
                return renderTextField(key, val, uniqueKey);
            }else if(typeof val === 'boolean'){
                return renderBooleanField(key, val, uniqueKey);
            } 
            else {
                return renderNumberField(key, val, uniqueKey);
            }
        });
    };

    const renderAccordeon = (title, content, key) => {
        const displayTitle = Names[title] || title;
        return (
            <Accordeon key={key} title={displayTitle}>
                {renderContent(content, key)}
            </Accordeon>
        );
    };

    return (
        <>
            {renderContent(json,path)}
        </>
    );
}
export default Form110Values;

Form110Values.propTypes = {
    path: PropTypes.string.isRequired,
    json: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}