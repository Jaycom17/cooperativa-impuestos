import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import jsonData from "../../../formsData/RentaLiquida.json";
import TabBar from "../../../components/TabBar/TabBar";
import Accordeon from "../../../components/Accordeon/Accordeon";
import RentaLiquidaValues from "../../../components/RentaLiquidaValues/RentaLiquidaValues";
import {
  rentaLiquidaNames,
  calculateValorFiscalInputs,
  excludedCalculateValorFiscalInputs,
} from "../../../utils/rentaLiquida";
import { useState } from "react";

function RentaLiquidaForm() {
  const tabs = [
    {
      name: "Ingresos",
      label: "Ingresos",
    },
    {
      name: "Costos",
      label: "Costos",
    },
    {
      name: "Gastos",
      label: "Gastos",
    },
    {
      name: "GanaciaPerdidaAntesImpuestos",
      label: "Ganancia y perdida de Impuestos",
    },
    {
      name: "InformativoClasificacionDiferencias",
      label: "Informativo Clasificacion Diferencias",
    },
    {
      name: "RentasPasivasECE",
      label: "Rentas Pasivas ECE",
    },
    {
      name: "Compensaciones",
      label: "Compensaciones",
    },
    {
      name: "RentaPresuntiva",
      label: "Renta Presuntiva",
    },
    {
      name: "RentasGrvablesREntaLiquida",
      label: "Rentas Grvables Renta Liquida",
    },
    {
      name: "GananciasOcasionalesGravables",
      label: "Ganancias Ocasionales Gravables",
    },
    {
      name: "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion",
      label: "Saldo a Favor Anio Gravable Anterior Sin Solicitud de Devolucion",
    },
    {
      name: "InformativoOtroResultadoIntegral",
      label: "Informativo Otro Resultado Integral",
    },
    {
      name: "GastoIngresoImpuestoRentaComplementarioPeriodo",
      label: "Gasto Ingreso Impuesto Renta Complementario Periodo",
    },
    {
      name: "DatosInformativoConcepto",
      label: "Datos Informativo Concepto",
    },
    {
      name: "OtrosDatosConSoloUnCampo",
      label: "Otros Campos",
    },
  ];

  const calculateValorFiscal = (pathArray) => {

    if (
      calculateValorFiscalInputs.includes(pathArray[0]) &&
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
        (auxData.ValorContable || 0) +
        (auxData.EfectoConversion || 0) -
        (auxData.MenorValorFiscal || 0) +
        (auxData.MayorValorFiscal || 0);

      for (let i = 0; i < pathArray.length - 1; i++) {
        if (!temp[pathArray[i]]) {
          temp[pathArray[i]] = {}; // Crear objeto si no existe
        }
        temp = temp[pathArray[i]]; // Mover al siguiente nivel del objeto
      }

      temp.ValorFiscal = calculatedValue;
      temp.Otras = temp.ValorFiscal;
    }
  };

  const calculateTotalIngresosNetosActividadIndustrialCoSer = (path, newData) => {
    if (path[0] !== "Ingresos" || path[2] !== "IngresosNetosActividadIndustrialCoSer") return;
  
    // Clonar los ingresos para evitar modificar la referencia original
    const ingresos = { ... newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer };
  
    let totalIngresos = {
      ValorContable: 0,
      EfectoConversion: 0,
      MenorValorFiscal: 0,
      MayorValorFiscal: 0,
      ValorFiscal: 0,
      Tarifa9: 0,
      Tarifa15: 0,
      Tarifa20: 0,
      MegaInversiones: 0,
      MegaInversiones27: 0,
      TarifaGeneral240: 0,
      Otras: 0,
    };
  
    const keys = Object.keys(ingresos);
  
    keys.forEach((key) => {
      if (key === "Total") return;
      totalIngresos.ValorContable += ingresos[key].ValorContable || 0;
      totalIngresos.EfectoConversion += ingresos[key].EfectoConversion || 0;
      totalIngresos.MenorValorFiscal += ingresos[key].MenorValorFiscal || 0;
      totalIngresos.MayorValorFiscal += ingresos[key].MayorValorFiscal || 0;
      totalIngresos.ValorFiscal += ingresos[key].ValorFiscal || 0;
      totalIngresos.Tarifa9 += ingresos[key].Tarifa9 || 0;
      totalIngresos.Tarifa15 += ingresos[key].Tarifa15 || 0;
      totalIngresos.Tarifa20 += ingresos[key].Tarifa20 || 0;
      totalIngresos.MegaInversiones += ingresos[key].MegaInversiones || 0;
      totalIngresos.MegaInversiones27 += ingresos[key].MegaInversiones27 || 0;
      totalIngresos.TarifaGeneral240 += ingresos[key].TarifaGeneral240 || 0;
      totalIngresos.Otras += ingresos[key].Otras || 0;
    });
  
    // Asignar los valores calculados a newData
    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total = { ...totalIngresos };
  };

  const calculateTotalDevolucionREbajasDescuento = (path, newData) => {
    if (path[0] !== "Ingresos" || path[2] !== "DevolucionesRebajasDescuentos") return;
  
    // Clonar los ingresos para evitar modificar la referencia original
    const devoluciones = { ... newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos };
  
    let totalIngresos = {
      ValorContable: 0,
      EfectoConversion: 0,
      MenorValorFiscal: 0,
      MayorValorFiscal: 0,
      ValorFiscal: 0,
      Tarifa9: 0,
      Tarifa15: 0,
      Tarifa20: 0,
      MegaInversiones: 0,
      MegaInversiones27: 0,
      TarifaGeneral240: 0,
      Otras: 0,
    };
  
    const keys = Object.keys(devoluciones);
  
    keys.forEach((key) => {
      if (key === "Total") return;
      totalIngresos.ValorContable += devoluciones[key].ValorContable || 0;
      totalIngresos.EfectoConversion += devoluciones[key].EfectoConversion || 0;
      totalIngresos.MenorValorFiscal += devoluciones[key].MenorValorFiscal || 0;
      totalIngresos.MayorValorFiscal += devoluciones[key].MayorValorFiscal || 0;
      totalIngresos.ValorFiscal += devoluciones[key].ValorFiscal || 0;
      totalIngresos.Tarifa9 += devoluciones[key].Tarifa9 || 0;
      totalIngresos.Tarifa15 += devoluciones[key].Tarifa15 || 0;
      totalIngresos.Tarifa20 += devoluciones[key].Tarifa20 || 0;
      totalIngresos.MegaInversiones += devoluciones[key].MegaInversiones || 0;
      totalIngresos.MegaInversiones27 += devoluciones[key].MegaInversiones27 || 0;
      totalIngresos.TarifaGeneral240 += devoluciones[key].TarifaGeneral240 || 0;
      totalIngresos.Otras += devoluciones[key].Otras || 0;
    });
  
    // Asignar los valores calculados a newData
    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total = { ...totalIngresos };
  };

  const calculateTotalIngresosNetosAct = (path, newData) => {
    if (path[0] !== "Ingresos" || path[1] !== "IngresosNetosActividadIndustrialCoSer") return;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.ValorContable = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.ValorContable - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.ValorContable;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.EfectoConversion = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.EfectoConversion - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.EfectoConversion;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.MenorValorFiscal = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.MenorValorFiscal - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.MenorValorFiscal;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.MayorValorFiscal = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.MayorValorFiscal - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.MayorValorFiscal;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.ValorFiscal = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.ValorFiscal - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.ValorFiscal;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.Tarifa9 = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.Tarifa9 - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.Tarifa9;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.Tarifa15 = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.Tarifa15 - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.Tarifa15;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.Tarifa20 = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.Tarifa20 - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.Tarifa20;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.MegaInversiones = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.MegaInversiones - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.MegaInversiones;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.MegaInversiones27 = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.MegaInversiones27 - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.MegaInversiones27;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.TarifaGeneral240 = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.TarifaGeneral240 - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.TarifaGeneral240;

    newData.Ingresos.IngresosNetosActividadIndustrialCoSer.Total.Otras = newData.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Total.Otras - newData.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.Total.Otras;
  };

  const calculateTotalSection = (path, newData, condition) => {
    if (path[0] !== condition[0] || path[1] !== condition[1]) return;

    const section = { ... newData[condition[0]][condition[1]] };

    let total = {
      ValorContable: 0,
      EfectoConversion: 0,
      MenorValorFiscal: 0,
      MayorValorFiscal: 0,
      ValorFiscal: 0,
      Tarifa9: 0,
      Tarifa15: 0,
      Tarifa20: 0,
      MegaInversiones: 0,
      MegaInversiones27: 0,
      TarifaGeneral240: 0,
      Otras: 0,
    };

    const keys = Object.keys(section);
  
    keys.forEach((key) => {
      if (key === "Total") return;
      total.ValorContable += section[key].ValorContable || 0;
      total.EfectoConversion += section[key].EfectoConversion || 0;
      total.MenorValorFiscal += section[key].MenorValorFiscal || 0;
      total.MayorValorFiscal += section[key].MayorValorFiscal || 0;
      total.ValorFiscal += section[key].ValorFiscal || 0;
      total.Tarifa9 += section[key].Tarifa9 || 0;
      total.Tarifa15 += section[key].Tarifa15 || 0;
      total.Tarifa20 += section[key].Tarifa20 || 0;
      total.MegaInversiones += section[key].MegaInversiones || 0;
      total.MegaInversiones27 += section[key].MegaInversiones27 || 0;
      total.TarifaGeneral240 += section[key].TarifaGeneral240 || 0;
      total.Otras += section[key].Otras || 0;
    });
  
    // Asignar los valores calculados a newData
    newData[condition[0]][condition[1]].Total = { ...total };
  }

  const createOtrosSection = () => {
    const keys = Object.keys(data);
    const excludedSections = tabs.map((tab) => tab.name);

    const otherSections = keys.filter((key) => !excludedSections.includes(key));

    const Otros = {};

    otherSections.forEach((section) => {
      Otros[section] = data[section];
    });

    return Otros;
  };

  const [data, setData] = useState(jsonData);
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const Otros = createOtrosSection();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value === "") value = 0;
    const pathArray = name.split(".");

    let newData = { ...data };
    let temp = newData;

    for (let i = 0; i < pathArray.length; i++) {
      if (i === pathArray.length - 1) {
        if (typeof temp[pathArray[i]] === "object") {
          temp[pathArray[i]] = parseFloat(value) || 0;
        } else {
          temp[pathArray[i]] = parseFloat(value) || 0;
        }
      } else {
        temp = temp[pathArray[i]];
      }
    }

    calculateValorFiscal(pathArray);
    calculateTotalDevolucionREbajasDescuento(pathArray, newData);
    calculateTotalIngresosNetosActividadIndustrialCoSer(pathArray, newData);
    calculateTotalIngresosNetosAct(pathArray, newData);
    calculateTotalSection(pathArray, newData, ["Ingresos", "IngresosFinancieros"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "GananciasInversionesSubsidiariasAsociadasNegocios"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "IngresosPorMedicionesValorRazonable"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "UtilidadVentaEnajenacionActivosMenos2Anos"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "UtilidadVentaEnajenacionActivosMas2Anos"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "IngresosReversionDeterioroValor"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "IngresosReversionProvisiones"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "IngresosReversionPasivosBeneficiosEmpleados"]);
    calculateTotalSection(pathArray, newData, ["Ingresos", "OtrosIngresos"]);
    calculateTotalSection(pathArray, newData, ["Costos", "CostosVentas"]);

    setData(newData);
  };

  const renderSections = (sectionData, pathPrefix = "", friendlyNames = []) => {
    return Object.keys(sectionData).map((sectionKey) => {
      const friendlyName = friendlyNames[sectionKey] || sectionKey;

      if (typeof sectionData[sectionKey] !== "object") {
        return (
          <div key={sectionKey}>
            <RentaLiquidaValues
              path={`${pathPrefix === "" ? "" : `${pathPrefix}.`}${sectionKey}`}
              data={sectionData[sectionKey]}
              handleChange={handleChange}
            />
          </div>
        );
      }
      return (
        <Accordeon key={sectionKey} title={friendlyName}>
          <RentaLiquidaValues
            path={`${pathPrefix === "" ? "" : `${pathPrefix}.`}${sectionKey}`}
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
        {activeTab === "Ingresos" &&
          renderSections(data.Ingresos, "Ingresos", rentaLiquidaNames)}
        {activeTab === "Costos" &&
          renderSections(data.Costos, "Costos", rentaLiquidaNames)}
        {activeTab === "Gastos" &&
          renderSections(data.Gastos, "Gastos", rentaLiquidaNames)}
        {activeTab === "GanaciaPerdidaAntesImpuestos" &&
          renderSections(
            data.GanaciaPerdidaAntesImpuestos,
            "GanaciaPerdidaAntesImpuestos",
            rentaLiquidaNames
          )}
        {activeTab === "InformativoClasificacionDiferencias" &&
          renderSections(
            data.InformativoClasificacionDiferencias,
            "InformativoClasificacionDiferencias",
            rentaLiquidaNames
          )}
        {activeTab === "RentasPasivasECE" &&
          renderSections(
            data.RentasPasivasECE,
            "RentasPasivasECE",
            rentaLiquidaNames
          )}
        {activeTab === "Compensaciones" &&
          renderSections(
            data.Compensaciones,
            "Compensaciones",
            rentaLiquidaNames
          )}
        {activeTab === "RentaPresuntiva" &&
          renderSections(
            data.RentaPresuntiva,
            "RentaPresuntiva",
            rentaLiquidaNames
          )}
        {activeTab === "RentasGrvablesREntaLiquida" &&
          renderSections(
            data.RentasGrvablesREntaLiquida,
            "RentasGrvablesREntaLiquida",
            rentaLiquidaNames
          )}
        {activeTab === "GananciasOcasionalesGravables" &&
          renderSections(
            data.GananciasOcasionalesGravables,
            "GananciasOcasionalesGravables",
            rentaLiquidaNames
          )}
        {activeTab === "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion" &&
          renderSections(
            data.SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion,
            "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion",
            rentaLiquidaNames
          )}
        {activeTab === "InformativoOtroResultadoIntegral" &&
          renderSections(
            data.InformativoOtroResultadoIntegral,
            "InformativoOtroResultadoIntegral",
            rentaLiquidaNames
          )}
        {activeTab === "GastoIngresoImpuestoRentaComplementarioPeriodo" &&
          renderSections(
            data.GastoIngresoImpuestoRentaComplementarioPeriodo,
            "GastoIngresoImpuestoRentaComplementarioPeriodo",
            rentaLiquidaNames
          )}
        {activeTab === "DatosInformativoConcepto" &&
          renderSections(
            data.DatosInformativoConcepto,
            "DatosInformativoConcepto",
            rentaLiquidaNames
          )}
        {activeTab === "OtrosDatosConSoloUnCampo" &&
          renderSections(Otros, "", rentaLiquidaNames)}
      </section>
    </main>
  );
}

export default RentaLiquidaForm;
