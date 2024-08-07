import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import TabBar from "../../../components/TabBar/TabBar";
import Accordeon from "../../../components/Accordeon/Accordeon";
import ImpuestoDiferidoValues from "../../../components/ImpuestoDiferidoValues/ImpuestoDiferidoValues";
import {
  getImpuestoDiferido,
  updateImpuestoDiferido,
} from "../../../services/impuestoDiferido.service";
import {
  addDetalleCompensacionExcesoRentaPresuntiva,
  addDetalleCompensacionPerdidasFiscales,
} from "../../../utils/impuestoDiferido";
import { useState, useEffect } from "react";

function ImpuestoDiferidoForm() {
  const tabs = [
    {
      name: "ImpuestosDiferidosDiferenciasTemporarias",
      label: "Impuesto Diferido por Diferencias Temporarias",
    },
    {
      name: "ActivosCreditosTributos",
      label: "Activos por Créditos Tributarios",
    },
    {
      name: "DetalleCompensacionPerdidasFiscales",
      label: "Detalle de la Compensación de Pérdidas Fiscales",
    },
    {
      name: "DetalleCompensacionExcesoRentaPresuntiva",
      label: "Detalle de la Compensación del Exceso de Renta Presuntiva",
    },
  ];

  const [data, setData] = useState({
    ImpuestosDiferidosDiferenciasTemporarias: {},
    ActivosCreditosTributos: {},
    DetalleCompensacionPerdidasFiscales: {},
    DetalleCompensacionExcesoRentaPresuntiva: {},
  });
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  useEffect(() => {
    getImpuestoDiferido().then((res) => {
      if (res.data.impContent) {
        setData(res.data.impContent);
      }
    });
  }, []);

  const calculateHori = (path) => {
    if (path[0] !== "ImpuestosDiferidosDiferenciasTemporarias") {
      return;
    }

    let newData = { ...data };
    let temp = newData;

    let auxData = newData[path[0]];

    for (let i = 1; i < path.length - 1; i++) {
      auxData = auxData[path[i]];
    }

    let calculatedVariacion = auxData.SaldoImpuestoDiferidoAnterior - auxData.SaldoImpuestoDiferidoActual;
    let calculatedDiferenciaTemporaria = (auxData.BaseContable - auxData.BaseFiscal) * (-1);
    let calculatedTarifaFiscalAplicada = calculatedDiferenciaTemporaria > 0 ? ((auxData.SaldoImpuestoDiferidoActual/calculatedDiferenciaTemporaria)*100): 0;  

    for (let i = 0; i < path.length - 1; i++) {
      if (!temp[path[i]]) {
        temp[path[i]] = {}; // Crear objeto si no existe
      }
      temp = temp[path[i]]; // Mover al siguiente nivel del objeto
    }

    temp.Variacion = calculatedVariacion;
    temp.DiferenciaTemporaria = calculatedDiferenciaTemporaria;
    temp.TasaFiscalAplicada = calculatedTarifaFiscalAplicada;
  };

  const handleAdd = (path) => {
    console.log(path);
    if (path === "DetalleCompensacionPerdidasFiscales") {
      let newData = { ...data };
      newData.DetalleCompensacionPerdidasFiscales.push({
        ...addDetalleCompensacionPerdidasFiscales,
      });

      setData(newData);
    } else if (path === "DetalleCompensacionExcesoRentaPresuntiva") {
      let newData = { ...data };
      newData.DetalleCompensacionExcesoRentaPresuntiva.push({
        ...addDetalleCompensacionExcesoRentaPresuntiva,
      });

      setData(newData);
    }
  };

  const handleQuit = (path) => {
    if (path === "DetalleCompensacionPerdidasFiscales") {
      let newData = { ...data };
      newData.DetalleCompensacionPerdidasFiscales.pop();
      setData(newData);
    } else if (path === "DetalleCompensacionExcesoRentaPresuntiva") {
      let newData = { ...data };
      newData.DetalleCompensacionExcesoRentaPresuntiva.pop();
      setData(newData);
    }
  };

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

    calculateHori(pathArray);

    updateImpuestoDiferido(newData);

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
            onAdd={handleAdd}
            onQuit={handleQuit}
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
        {activeTab === "ImpuestosDiferidosDiferenciasTemporarias" &&
          renderSections(
            data.ImpuestosDiferidosDiferenciasTemporarias,
            "ImpuestosDiferidosDiferenciasTemporarias",
            "Total",
            []
          )}
        {activeTab === "ActivosCreditosTributos" &&
          renderSections(
            data.ActivosCreditosTributos,
            "ActivosCreditosTributos",
            "Total"
          )}
        {activeTab === "DetalleCompensacionPerdidasFiscales" &&
          renderSections(
            data.DetalleCompensacionPerdidasFiscales,
            "DetalleCompensacionPerdidasFiscales",
            "Total",
            []
          )}
        {activeTab === "DetalleCompensacionExcesoRentaPresuntiva" &&
          renderSections(
            data.DetalleCompensacionExcesoRentaPresuntiva,
            "DetalleCompensacionExcesoRentaPresuntiva",
            "Total",
            []
          )}
      </section>
    </main>
  );
}

export default ImpuestoDiferidoForm;
