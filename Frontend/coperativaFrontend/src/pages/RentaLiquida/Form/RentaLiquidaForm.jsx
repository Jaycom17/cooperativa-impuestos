import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import jsonData from "../../../formsData/RentaLiquida.json";
import TabBar from "../../../components/TabBar/TabBar";
import Accordeon from "../../../components/Accordeon/Accordeon";
import RentaLiquidaValues from "../../../components/RentaLiquidaValues/RentaLiquidaValues";
import { rentaLiquidaNames } from "../../../utils/rentaLiquida";
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

    console.log({ name, value, pathArray });

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

    console.log(newData)

    setData(newData);
  };

  const renderSections = (
    sectionData,
    pathPrefix= "",
    friendlyNames = []
  ) => {
    return Object.keys(sectionData).map((sectionKey) => {

      const friendlyName = friendlyNames[sectionKey] || sectionKey;

      if (typeof sectionData[sectionKey] !== "object") {
        return (
          <div key={sectionKey}>
            <RentaLiquidaValues
              path={`${pathPrefix === "" ? "": `${pathPrefix}.`}${sectionKey}`}
              data={sectionData[sectionKey]}
              handleChange={handleChange}
            />
          </div>
        );
      }
      return (
        <Accordeon key={sectionKey} title={friendlyName}>
          <RentaLiquidaValues
            path={`${pathPrefix === "" ? "": `${pathPrefix}.`}${sectionKey}`}
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
        {activeTab === "Ingresos" && renderSections(data.Ingresos, "Ingresos", rentaLiquidaNames)}
        {activeTab === "Costos" && renderSections(data.Costos, "Costos", rentaLiquidaNames)}
        {activeTab === "Gastos" && renderSections(data.Gastos, "Gastos", rentaLiquidaNames)}
        {activeTab === "GanaciaPerdidaAntesImpuestos" &&
          renderSections(
            data.GanaciaPerdidaAntesImpuestos,
            "GanaciaPerdidaAntesImpuestos", rentaLiquidaNames
          )}
        {activeTab === "InformativoClasificacionDiferencias" &&
          renderSections(
            data.InformativoClasificacionDiferencias,
            "InformativoClasificacionDiferencias", rentaLiquidaNames
          )}
        {activeTab === "RentasPasivasECE" &&
          renderSections(data.RentasPasivasECE, "RentasPasivasECE", rentaLiquidaNames)}
        {activeTab === "Compensaciones" &&
          renderSections(data.Compensaciones, "Compensaciones", rentaLiquidaNames)}
        {activeTab === "RentaPresuntiva" &&
          renderSections(data.RentaPresuntiva, "RentaPresuntiva", rentaLiquidaNames)}
        {activeTab === "RentasGrvablesREntaLiquida" &&
          renderSections(
            data.RentasGrvablesREntaLiquida,
            "RentasGrvablesREntaLiquida", rentaLiquidaNames
          )}
        {activeTab === "GananciasOcasionalesGravables" &&
          renderSections(
            data.GananciasOcasionalesGravables,
            "GananciasOcasionalesGravables", rentaLiquidaNames
          )}
        {activeTab === "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion" &&
          renderSections(
            data.SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion,
            "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion", rentaLiquidaNames
          )}
        {activeTab === "InformativoOtroResultadoIntegral" &&
          renderSections(
            data.InformativoOtroResultadoIntegral,
            "InformativoOtroResultadoIntegral", rentaLiquidaNames
          )}
        {activeTab === "GastoIngresoImpuestoRentaComplementarioPeriodo" &&
          renderSections(
            data.GastoIngresoImpuestoRentaComplementarioPeriodo,
            "GastoIngresoImpuestoRentaComplementarioPeriodo", rentaLiquidaNames
          )}
        {activeTab === "DatosInformativoConcepto" &&
          renderSections(
            data.DatosInformativoConcepto,
            "DatosInformativoConcepto", rentaLiquidaNames
          )}
        {activeTab === "OtrosDatosConSoloUnCampo" && renderSections(Otros, "", rentaLiquidaNames)}
      </section>
    </main>
  );
}

export default RentaLiquidaForm;
