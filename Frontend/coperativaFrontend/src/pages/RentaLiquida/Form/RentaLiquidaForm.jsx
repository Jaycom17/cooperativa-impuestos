import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import jsonData from "../../../formsData/RentaLiquida.json";
import TabBar from "../../../components/TabBar/TabBar";
import Accordeon from "../../../components/Accordeon/Accordeon";
import ImpuestoDiferidoValues from "../../../components/ImpuestoDiferidoValues/ImpuestoDiferidoValues";
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
  ];

  const [data, setData] = useState(jsonData);
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleChange = (e, path) => {
    let { name, value } = e.target;
    if (value === "") value = 0;
    const pathArray = path.split(".");

    let newData = { ...data };
    let temp = newData;

    for (let i = 0; i < pathArray.length; i++) {
      if (i === pathArray.length - 1) {
        if (typeof temp[pathArray[i]] === "object") {
          temp[pathArray[i]][name] = parseFloat(value) || 0;
        } else {
          temp[pathArray[i]] = parseFloat(value) || 0;
        }
      } else {
        temp = temp[pathArray[i]];
      }
    }

    setData(newData);
  };

  const renderSections = (
    sectionData,
    pathPrefix,
    excludeSection = "",
    friendlyNames = []
  ) => {
    if (Array.isArray(sectionData)) {
      return Object.keys(sectionData).map((sectionKey) => {
        if (sectionKey === excludeSection) return null;

        const friendlyName = sectionData[sectionKey].Anio.toString();

        return (
          <Accordeon
            key={sectionKey}
            title={friendlyName}
            arrayIndex={sectionKey}
            path={`${pathPrefix}`}
          >
            <ImpuestoDiferidoValues
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

      return (
        <Accordeon key={sectionKey} title={friendlyName}>
          <ImpuestoDiferidoValues
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
        {activeTab === "Ingresos" && (
            renderSections(data.Ingresos, "Ingresos")
        )}  
        {activeTab === "Costos" && (
          renderSections(data.Costos, "Costos")
        )}
        {activeTab === "Gastos" && (
          renderSections(data.Gastos, "Gastos")
        )}
        {activeTab === "GanaciaPerdidaAntesImpuestos" && (
          renderSections(data.GanaciaPerdidaAntesImpuestos, "GanaciaPerdidaAntesImpuestos")
        )}
        {activeTab === "InformativoClasificacionDiferencias" && (
          renderSections(data.InformativoClasificacionDiferencias, "InformativoClasificacionDiferencias")
        )}
        {activeTab === "RentasPasivasECE" && (
          renderSections(data.RentasPasivasECE, "RentasPasivasECE")
        )}
        {activeTab === "Compensaciones" && (
          renderSections(data.Compensaciones, "Compensaciones")
        )}
        {activeTab === "RentaPresuntiva" && (
          renderSections(data.RentaPresuntiva, "RentaPresuntiva")
        )}
        {activeTab === "RentasGrvablesREntaLiquida" && (
          renderSections(data.RentasGrvablesREntaLiquida, "RentasGrvablesREntaLiquida")
        )}
        {activeTab === "GananciasOcasionalesGravables" && (
          renderSections(data.GananciasOcasionalesGravables, "GananciasOcasionalesGravables")
        )}
        {activeTab === "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion" && (
          renderSections(data.SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion, "SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion")
        )}
        {activeTab === "InformativoOtroResultadoIntegral" && (
          renderSections(data.InformativoOtroResultadoIntegral, "InformativoOtroResultadoIntegral")
        )}
        {activeTab === "GastoIngresoImpuestoRentaComplementarioPeriodo" && (
          renderSections(data.GastoIngresoImpuestoRentaComplementarioPeriodo, "GastoIngresoImpuestoRentaComplementarioPeriodo")
        )}
        {activeTab === "DatosInformativoConcepto" && (
          renderSections(data.DatosInformativoConcepto, "DatosInformativoConcepto")
        )}
      </section>
    </main>
  );
}

export default RentaLiquidaForm;
