import { useState } from 'react';
import basicInformation from '../../../formsData/ESFpatrimonio.json';
import ESFvalues from '../../../components/ESFvalues/ESFvalues';
import AsideStudent from '../../../components/AsideStudent/AsideStudent';

const ESFpatrimonio = () => {
  const [data, setData] = useState(basicInformation);
  const [activeTab, setActiveTab] = useState('activos');
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);
  const [expandedSubSubSection, setExpandedSubSubSection] = useState(null);

  const handleChange = (e, path) => {
    let { name, value } = e.target;

    if (value === '') value = 0;

    const newData = { ...data };
    path.reduce((acc, key, index) => {
      if (index === path.length - 1) {
        acc[key][name] = Number.parseInt(value);
      }
      return acc[key];
    }, newData);

    const calculateTotals = (obj) => {
      const totals = {};

      Object.entries(obj).forEach(([key, values]) => {
        if (key !== 'Total' && typeof values === 'object' && values !== null) {
          Object.entries(values).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'number') {
              if (!totals[subKey]) {
                totals[subKey] = 0;
              }
              totals[subKey] += subValue;
            }
          });
        }
      });

      return totals;
    };

    const parentPath = path.slice(0, -1);
    const parent = parentPath.reduce((acc, key) => acc[key], newData);

    if (parent && typeof parent === 'object' && parent.Total) {
      parent.Total = calculateTotals(parent);
    }

    setData(newData);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedSubSection(null);
  };

  const toggleSubSection = (subSection) => {
    setExpandedSubSection(expandedSubSection === subSection ? null : subSection);
  };
  const toggleSubSubSection = (subSubSection) => {
    setExpandedSubSubSection(expandedSubSubSection === subSubSection ? null : subSubSection);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setExpandedSection(null);
    setExpandedSubSection(null);
  };

  return (
    <div className="flex bg-gray-100 rounded shadow-md">
      <AsideStudent />
      <div className="bg-white w-full p-2 overflow-auto max-h-screen">
        <div className="bg-white">
          <div className="flex">
            <button
              className={`flex-1 text-left p-4 border-b-2 ${
                activeTab === 'activos' ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => handleTabClick('activos')}
            >
              Activos
            </button>
            <button
              className={`flex-1 text-left p-4 border-b-2 ${
                activeTab === 'pasivos' ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => handleTabClick('pasivos')}
            >
              Pasivos
            </button>
            <button
              className={`flex-1 text-left p-4 border-b-2 ${
                activeTab === 'totalpatrimonio' ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => handleTabClick('totalpatrimonio')}
            >
              Total Patrimonio
            </button>
            <button
              className={`flex-1 text-left p-4 border-b-2 ${
                activeTab === 'patrimonio' ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => handleTabClick('patrimonio')}
            >
              Patrimonio
            </button>
            <button
              className={`flex-1 text-left p-4 border-b-2 ${
                activeTab === 'datos-informativos' ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => handleTabClick('datos-informativos')}
            >
              Datos Informativos
            </button>
          </div>
          {activeTab === 'activos' && (
            <div>
              <div className="border-t border-gray-200">
                <button
                  type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection('activos')}
                >
                  Efectivo y equivalentes al efectivo 
                </button>
                {expandedSection === 'activos' && (
                  <div className="pl-4">
                    <div className="pl-4">
                      <section className="p-2 bg-white border rounded-md">
                        <h2 className="bg-white font-bold text-xl pb-2">
                          Activos Equivalentes Efectivo
                        </h2>
                        <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          <ESFvalues
                            title="Efectivo"
                            path={
                              'ActivosPasivos.Activos.ActivosEquivalentesEfectivo.Efectivo'
                            }
                            data={
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.Efectivo
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Equivalentes efectivo"
                            path={
                              'ActivosPasivos.Activos.ActivosEquivalentesEfectivo.EquivalentesEfectivo'
                            }
                            data={
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.EquivalentesEfectivo
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Efectivo restringido"
                            path={
                              'ActivosPasivos.Activos.ActivosEquivalentesEfectivo.EfectivoRestringido'
                            }
                            data={
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.EfectivoRestringido
                            }
                            handleChange={handleChange}
                          />
                        </article>
                        <article>
                          <h3 className="text-lg font-bold">Total</h3>
                          <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Valor contable:
                              </span>
                              {
                                data.ActivosPasivos.Activos
                                  .ActivosEquivalentesEfectivo.Total
                                  .ValorContable
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Efecto conversion:
                              </span>{' '}
                              {
                                data.ActivosPasivos.Activos
                                  .ActivosEquivalentesEfectivo.Total
                                  .EfectoConversion
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Menor valor fical:
                              </span>
                              {
                                data.ActivosPasivos.Activos
                                  .ActivosEquivalentesEfectivo.Total
                                  .MenorValorFiscal
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Mayor Valor Fiscal:
                              </span>
                              {
                                data.ActivosPasivos.Activos
                                  .ActivosEquivalentesEfectivo.Total
                                  .MayorValorFiscal
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Valor fiscal:
                              </span>{' '}
                              {
                                data.ActivosPasivos.Activos
                                  .ActivosEquivalentesEfectivo.Total
                                  .ValorFiscal
                              }
                            </p>
                          </div>
                        </article>
                      </section>
                    </div>
                    {/* Aquí se pueden añadir más secciones según sea necesario */}
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200">
              <button type="button" 
                className="w-full text-left p-4 border-b border-gray-200"
                onClick={() => toggleSection("activos-i")}>
                Inversiones e instrumentos financieros derivados (valor neto)
                </button>
                {expandedSection === "activos-i" && (
                  <div className="pl-4">
                    <div className="pl-4">
                      <button
                        type="button"
                        className="w-full text-left p-4 border-b border-gray-200"
                        onClick={() => toggleSubSection("activos-instrumentos-financieros")}
                      >
                        Inversiones e instrumentos financieros derivados
                      </button>
                      {expandedSubSection === "activos-instrumentos-financieros" && (
                        <div className="pl-4">
                        <section className="p-2 bg-white border rounded-md">
                          <h2 className="bg-white font-bold text-xl pb-2">
                            Cuentas por Cobrar Comerciales y Otras Cuentas por Cobrar
                          </h2>
                          <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            <ESFvalues
                              title="Derechos de recompra de inversiones"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosRecompraInversiones"
                              }
                                data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosRecompraInversiones
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Instrumentos de deuda a costo amortizado"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaCostoAmortizado"                           
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaCostoAmortizado
                              }
                              handleChange={handleChange}                     
                            />
                            <ESFvalues
                              title="Instrumentos de deuda o patrimonio al costo"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioCosto"                           
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioCosto
                              }
                              handleChange={handleChange}                     
                            />
                            <button type="button"
                              className="w-full text-left p-4 border-b border-gray-200"
                              onClick={() => toggleSubSubSection("activos-is")}>
                              Inversiones en subsidiarias, asociadas y negocios conjuntos
                            </button>
                            {expandedSubSubSection === "activos-is" && (
                              <div className="pl-4">
                                <h1>Inversiones en subsidiarias, asociadas y negocios conjuntos</h1>
                                <ESFvalues
                                  title='Valor razonable con cambios en resultados'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosResultados'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosResultados
                                  }
                                  handleChange={handleChange}
                                />
                                <ESFvalues
                                  title='Valor razonable con cambios en el ORI'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosORI'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosORI
                                  }
                                  handleChange={handleChange}
                                />
                                <ESFvalues
                                  title='Método de la participación'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.MetodoParticipacion'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.MetodoParticipacion
                                  }
                                  handleChange={handleChange}
                                />
                                <ESFvalues
                                  title='Al costo'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto
                                  }
                                  handleChange={handleChange}
                                />
                              </div> 
                            )}
                            <ESFvalues
                              title="Inversiones en subsidiarias, asociadas y negocios conjuntos total"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.Total"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.Total
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Instrumentos de deuda o patrimonio al valor razonable con cambios en resultados"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableResultados"                           
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableResultados
                              }
                              handleChange={handleChange}                     
                            />
                            <ESFvalues
                              title="Instrumentos de deuda o patrimonio al valor razonable con cambios en el ORI"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableORI"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableORI
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Instrumentos financieros derivados con fines de negociación"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosNegociación"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosNegociación
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues 
                              title="Instrumentos financieros derivados con fines de cobertura"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosCobertura"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosCobertura
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Derechos fiduciarios"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Otros"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Otros"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Otros
                              }
                              handleChange={handleChange}
                            />
                            </article>
                          <article>
                            <h3 className="text-lg font-bold">Total</h3>
                            <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Valor contable:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total.ValorContable
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Efecto conversion:
                                </span>{' '}
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total.EfectoConversion
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Menor valor fical:
                                </span>
                                {
                                   data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total.MenorValorFiscal
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Mayor Valor Fiscal:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total.MayorValorFiscal
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Valor fiscal:
                                </span>{' '}
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Total.ValorFiscal
                                }
                              </p>
                            </div>
                          </article>
                        </section>
                      </div>
                      )}
                    </div>
                    <div className="pl-4">
                      <button type="button"
                      className="w-full text-left p-4 border-b border-gray-200"
                      onClick={() => toggleSubSection("activos-instrumentos-financieros-deterioro")}>
                        Deterioro acumulado de inversiones
                      </button>
                      {expandedSubSection === "activos-instrumentos-financieros-deterioro" && (
                        <div className="pl-4">
                        <section className="p-2 bg-white border rounded-md">
                          <h2 className="bg-white font-bold text-xl pb-2">
                            Cuentas por Cobrar Comerciales y Otras Cuentas por Cobrar
                          </h2>
                          <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            <ESFvalues
                              title="Derechos de recompra de inversiones"
                              path={
                                'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosRecompraInversiones'
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosRecompraInversiones
                              }
                              handleChange={handleChange}
                            />
                            <button type="button"
                              className="w-full text-left p-4 border-b border-gray-200"
                              onClick={() => toggleSubSubSection("activos-is-d")}>
                              Inversiones en subsidiarias, asociadas y negocios conjuntos
                            </button>
                            {expandedSubSubSection === "activos-is-d" && (
                              <div className="pl-4">
                                <h1>Inversiones en subsidiarias, asociadas y negocios conjuntos</h1>
                                <ESFvalues
                                  title='Método de la participación'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo
                                  }
                                  handleChange={handleChange}
                                />
                                <ESFvalues

                                  title='Costo'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo
                                  }
                                  handleChange={handleChange}
                                />
                                </div>
                            )}
                            <ESFvalues
                                  title=' Inversiones en subsidiarias, asociadas y negocios conjuntos Total'
                                  path={
                                    'ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Total'
                                  }
                                  data={
                                    data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Total
                                  }
                                  handleChange={handleChange}
                            />
                            <ESFvalues
                              title="instrumentos de deuda a costo amortizado"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.instrumentosDeudaCostoAmortizado"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.instrumentosDeudaCostoAmortizado
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Instrumentos de deuda o patrimonio al costo"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InstrumentosDeudaPatrimonioCosto"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InstrumentosDeudaPatrimonioCosto
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Derechos fiduciarios"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosFiduciarios"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosFiduciarios
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Otros"
                              path={
                                "ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Otros"
                              }
                              data={
                                data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Otros
                              }
                              handleChange={handleChange}
                            />
                          </article>
                          <article>
                            <h3 className="text-lg font-bold">Total</h3>
                            <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Valor contable:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total.ValorContable
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Efecto conversion:
                                </span>{' '}
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total.EfectoConversion
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Menor valor fical:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total.MenorValorFiscal
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Mayor Valor Fiscal:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total.MayorValorFiscal
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Valor fiscal:
                                </span>{' '}
                                {
                                  data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Total.ValorFiscal
                                }
                              </p>
                            </div>
                          </article>
                        </section>
                      </div>
                      )}
                    </div>
                    {/* Aquí se pueden añadir más secciones según sea necesario */} 
                    <article>
                      <h3 className="text-lg font-bold">Total</h3>
                      <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                          {
                            data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.ValorContable
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.MenorValorFiscal
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.MayorValorFiscal
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor fiscal:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Activos.InversionesInstrumentosFinancierosDerivadosVN.Total.ValorFiscal
                          }
                        </p>
                      </div>
                    </article>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200">
                <button type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection("activos-comerciales-cobrar")}>
                  Cuentas comerciales por cobrar y otras cuentas por cobrar
                </button>
                {expandedSection === "activos-comerciales-cobrar" && (
                  <div className="pl-4">
                    <div className="pl-4">
                      <button type="button"
                        className="w-full text-left p-4 border-b border-gray-200"
                        onClick={() => toggleSubSection("activos-cc")}>
                        Cuentas y documentos por cobrar
                      </button>
                      {expandedSubSection === "activos-cc" && (
                        <div className="pl-4">
                          <section className="p-2 bg-white border rounded-md">
                            <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                              <ESFvalues
                                title='Cartera de crédito (préstamos bancarios)'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CarteraCreditoPrestamosBancarios'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CarteraCreditoPrestamosBancarios
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Cuentas por cobrar comerciales'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasComercialesPorCobrar'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasComercialesPorCobrar
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Cuentas por cobrar en acuerdos de concesión (modelo del activo financiero)'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarAcuerdosConcesion'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarAcuerdosConcesion
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Arrendamiento financiero o leasing financiero'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ArrendamientoFinancieroOLeasingFinanciero'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ArrendamientoFinancieroOLeasingFinanciero
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Dividendos y participaciones'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.DividendosParticipaciones'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.DividendosParticipaciones
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Cuentas por cobrar a socios, accionistas o partícipes'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarSociosAccionistasParticipes'
                              } 
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarSociosAccionistasParticipes
                              }
                              handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Cuentas y documentos por cobrar a otras partes relacionadas y asociadas'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas
                              }
                              handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Primas de seguros por recaudar'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.PrimasSegurosPorRecaudar'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.PrimasSegurosPorRecaudar
                              }
                              handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Cartera de difícil cobro'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CarteraDificilCobro'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CarteraDificilCobro
                              }
                              handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Reclamaciones por cobrar'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ReclamacionesPorCobrar'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ReclamacionesPorCobrar
                              }
                              handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Anticipos de pagos'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.AnticiposPagos'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.AnticiposPagos
                              }
                              handleChange={handleChange}
                              />
                              <ESFvalues
                              title='Otras cuentas y documentos por cobrar'
                              path={
                                'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.OtrasCuentasDocumentosPorCobrar'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.OtrasCuentasDocumentosPorCobrar
                              }
                              handleChange={handleChange}
                              />
                            </article>    
                              <article>
                                <h3 className="text-lg font-bold">Total</h3>
                                <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Valor contable:
                                    </span>
                                    {
                                      data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total.ValorContable
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Efecto conversion:
                                    </span>{' '}
                                    {
                                      data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total.EfectoConversion
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Menor valor fical:
                                    </span>
                                    {
                                        data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total.MenorValorFiscal
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Mayor Valor Fiscal:
                                    </span>
                                    {
                                      data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total.MayorValorFiscal
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Valor fiscal:
                                    </span>{' '}
                                    {
                                      data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.Total.ValorFiscal
                                    }
                                  </p>
                                </div>
                              </article>                     
                            </section>
                        </div>
                      )}
                    </div>
                    <div className="pl-4">
                      <button type="button"
                        className="w-full text-left p-4 border-b border-gray-200"
                        onClick={() => toggleSubSection("activos-co")}>
                        Deterioro acumulado del valor cuentas y documentos por cobrar
                      </button>
                      {expandedSubSection === "activos-co" && (
                        <div className="pl-4">
                          <section className="p-2 bg-white border rounded-md">
                            <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                              <ESFvalues
                                title='Cartera de crédito (préstamos bancarios)'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CarteraDeCredito'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CarteraDeCredito
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Cuentas comerciales por cobrar'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasComercialesPorCobrar'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasComercialesPorCobrar
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Cuentas por cobrar en acuerdos de concesión (modelo del activo financiero)'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasPorCobrarAcuerdosConcesion'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasPorCobrarAcuerdosConcesion
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Arrendamiento financiero o leasing financiero'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.ArrendamientoFinancieroLeasingFinanciero'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.ArrendamientoFinancieroLeasingFinanciero
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Dividendos y participaciones'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.DividendosParticipaciones'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.DividendosParticipaciones
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Cuentas por cobrar a socios, accionistas o partícipes'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasPorCobrarSociosAccionistasParticipes'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasPorCobrarSociosAccionistasParticipes
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Cuentas por cobrar a otras partes relacionadas y asociadas'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasPorCobrarOtrasPartesRelacionadasAsociadas'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CuentasPorCobrarOtrasPartesRelacionadasAsociadas
                                }
                                handleChange={handleChange}
                              />
                              <ESFvalues
                                title='Otras cuentas por cobrar'
                                path={
                                  'ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.OtrasCuentasPorCobrar'
                                }
                                data={
                                  data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.OtrasCuentasPorCobrar  
                                }
                                handleChange={handleChange}
                              />                         
                            </article>
                            <article>
                              <h3 className="text-lg font-bold">Total</h3>
                              <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Valor contable:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.ValorContable
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Efecto conversion:
                                  </span>{' '}
                                  {
                                    data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.EfectoConversion
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Menor valor fical:
                                  </span>
                                  {
                                      data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.MenorValorFiscal
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Mayor Valor Fiscal:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.MayorValorFiscal
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Valor fiscal:
                                  </span>{' '}
                                  {
                                    data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.Total.ValorFiscal
                                  }
                                </p>
                              </div>
                            </article>
                          </section>                         
                        </div>
                      )}
                    </div>
                    <article>
                  <h3 className="text-lg font-bold">Total</h3>
                  <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Valor contable:
                      </span>
                      {
                        data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorContable
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Efecto conversion:
                      </span>{' '}
                      {
                        data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.EfectoConversion
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Menor valor fical:
                      </span>
                      {
                          data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.MenorValorFiscal
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Mayor Valor Fiscal:
                      </span>
                      {
                        data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.MayorValorFiscal
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Valor fiscal:
                      </span>{' '}
                      {
                        data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorFiscal
                      }
                    </p>
                  </div>
                  </article>
                  </div>
                )}               
              </div>
              <div className="border-t border-gray-200">
                <button type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection("Inventarios")}>
                  Inventarios
                </button>
                {expandedSection === "Inventarios" && (
                   <div className="pl-4">
                   <section className="p-2 bg-white border rounded-md">
                      <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <ESFvalues
                            title='Para la venta, no producidos por la empresa'
                            path={
                              'ActivosPasivos.Activos.Inventarios.ParaLaVentaNoProducidosPorLaEmpresa'  
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.ParaLaVentaNoProducidosPorLaEmpresa
                            }
                            handleChange={handleChange}/>
                          <ESFvalues
                            title='En tránsito'
                            path={
                              'ActivosPasivos.Activos.Inventarios.EnTransito'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.EnTransito
                            }
                            handleChange={handleChange}/>  
                          <ESFvalues
                            title='Materias primas, suministros y materiales'
                            path={
                              'ActivosPasivos.Activos.Inventarios.MateriasPrimasSuministrosMateriales'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.MateriasPrimasSuministrosMateriales
                            }
                            handleChange={handleChange}/>  
                          <ESFvalues
                            title='En proceso (diferentes de obras o inmuebles en construcción para la venta)'
                            path={
                              'ActivosPasivos.Activos.Inventarios.EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta
                            }
                            handleChange={handleChange}/> 
                         <ESFvalues
                            title='Costos prestadores de servicios'
                            path={
                              'ActivosPasivos.Activos.Inventarios.CostosPrestadoresServicios'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.CostosPrestadoresServicios
                            }
                            handleChange={handleChange}/> 
                          <ESFvalues
                            title='Producto terminado (diferentes de obras o inmuebles terminados para la venta)'
                            path={
                              'ActivosPasivos.Activos.Inventarios.ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta
                            }
                            handleChange={handleChange}/>
                          <ESFvalues
                            title='Obras o inmuebles en construcción para la venta'
                            path={
                              'ActivosPasivos.Activos.Inventarios.ObrasInmueblesConstruccionParaVenta'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.ObrasInmueblesConstruccionParaVenta
                            }
                            handleChange={handleChange}/>                             
                          <ESFvalues
                            title='Obras o inmuebles terminados para la venta'
                            path={
                              'ActivosPasivos.Activos.Inventarios.ObrasInmueblesTerminadosParaVenta'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.ObrasInmueblesTerminadosParaVenta
                            }
                            handleChange={handleChange}/>
                          <ESFvalues
                            title='Piezas de repuesto y equipo auxiliar clasificados como inventarios'
                            path={
                              'ActivosPasivos.Activos.Inventarios.PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios
                            }
                            handleChange={handleChange}/>  
                          <ESFvalues
                            title='Inventario que surge de la actividad de extracción'
                            path={
                              'ActivosPasivos.Activos.Inventarios.InventarioSurgeActividadExtraccion'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.InventarioSurgeActividadExtraccion
                            }
                            handleChange={handleChange}/>  
                          <ESFvalues
                            title='Deterioro acumulado del valor de inventarios'
                            path={
                              'ActivosPasivos.Activos.Inventarios.DeterioroAcumuladoValorInventarios'
                            }
                            data={
                              data.ActivosPasivos.Activos.Inventarios.DeterioroAcumuladoValorInventarios
                            }
                            handleChange={handleChange}/>                                       
                      </article>                       
                      <article>
                          <h3 className="text-lg font-bold">Total</h3>
                          <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Valor contable:
                              </span>
                              {
                                data.ActivosPasivos.Activos.Inventarios.Total.ValorContable
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Efecto conversion:
                              </span>{' '}
                              {
                                  data.ActivosPasivos.Activos.Inventarios.Total.EfectoConversion
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Menor valor fical:
                              </span>
                              {
                                data.ActivosPasivos.Activos.Inventarios.Total.MenorValorFiscal
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Mayor Valor Fiscal:
                              </span>
                              {
                                  data.ActivosPasivos.Activos.Inventarios.Total.MayorValorFiscal
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Valor fiscal:
                              </span>{' '}
                              {
                                  data.ActivosPasivos.Activos.Inventarios.Total.ValorFiscal
                              }
                            </p>
                          </div>
                        </article>                     
                     </section>
                 </div>
                )}
              </div>
              <div>
                <button type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection("Gastos-pagados")}>
                  Gastos pagados por anticipado
                </button>
                {expandedSection === "Gastos-pagados" && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                    <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      <ESFvalues
                        title='Publicidad'
                        path={
                          'ActivosPasivos.Activos.GastosPagadosPorAnticipado.Publicidad'
                        }
                        data={
                          data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Publicidad
                        }
                        handleChange={handleChange}
                      />   
                      <ESFvalues 
                      title='Primas de seguros'  
                      path={
                        'ActivosPasivos.Activos.GastosPagadosPorAnticipado.PrimasSeguros'
                      }
                      data={
                        data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.PrimasSeguros
                      }
                      handleChange={handleChange}
                      />
                      <ESFvalues
                      title='Arrendamientos'
                      path={
                        'ActivosPasivos.Activos.GastosPagadosPorAnticipado.Arrendamientos'
                      }
                      data={
                        data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Arrendamientos
                      }
                      handleChange={handleChange}
                      />
                      <ESFvalues
                      title='Otros'
                      path={
                        'ActivosPasivos.Activos.GastosPagadosPorAnticipado.Otros'
                      }
                      data={
                        data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Otros
                      }
                      handleChange={handleChange}
                      />

                    </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Valor contable:
                            </span>
                            {
                              data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Total.ValorContable
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Efecto conversion:
                            </span>{' '}
                            {
                              data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Total.EfectoConversion
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Menor valor fical:
                            </span>
                            {
                              data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Total.MenorValorFiscal
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Mayor Valor Fiscal:
                            </span>
                            {
                              data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Total.MayorValorFiscal
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Valor fiscal:
                            </span>{' '}
                            {
                              data.ActivosPasivos.Activos.GastosPagadosPorAnticipado.Total.ValorFiscal
                            }
                          </p>
                        </div>
                      </article>                     
                    </section>
                </div>
                )}
              </div> 
              <div>
                <button type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection("Activos-impuestos-diferidos")}>
                Activos por impuestos diferidos               
                </button>
                {expandedSection === "Activos-impuestos-diferidos" && (
                  <article>
                   <ESFvalues
                    title='Impuestos diferidos activos'
                    path={
                      'ActivosPasivos.Activos.ActivosImpuestosDiferidos'
                    }
                    data={
                      data.ActivosPasivos.Activos.ActivosImpuestosDiferidos
                    }
                    handleChange={handleChange}
                    />
                 </article>  
                )}
              </div>
              <div>
                <button type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection("Activos-propiedades")}>
                  Propiedades, planta y equipo
                </button>
                {expandedSection === "Activos-propiedades" && (
                <div className="pl-4">
                <section className="p-2 bg-white border rounded-md">
                  <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <ESFvalues
                      title='Terrenos'
                      path={
                        'ActivosPasivos.Activos.PropiedadesPlantaEquipo.Terrenos'
                      }
                      data={
                        data.ActivosPasivos.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CarteraCreditoPrestamosBancarios
                      }
                      handleChange={handleChange}
                    />
                    <ESFvalues
                      title='Construcciones en proceso'  
                      path={
                        'ActivosPasivos.Activos.PropiedadesPlantaEquipo.ConstruccionesEnProceso'
                      }
                      data={
                        data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.ConstruccionesEnProceso
                      }
                      handleChange={handleChange}
                    />  
                    <button type="button"
                      className="w-full text-left p-4 border-b border-gray-200"
                      onClick={() => toggleSubSection("Edificios")}>
                      Edificios
                    </button>      
                    {expandedSubSection === "Edificios" && (
                      <div className="pl-4">
                      <section className="p-2 bg-white border rounded-md">
                        <article>
                          <ESFvalues
                            title='Costo'
                            path={
                              'ActivosPasivos.Activos.PropiedadesPlantaEquipo.Edificios.Costo'
                            }
                            data={
                              data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Edificios.Costo
                            }
                            handleChange={handleChange}
                          />   
                          <ESFvalues
                            title='Ajuste acumulado por revaluaciones o reexpresiones'
                            path={
                              'ActivosPasivos.Activos.PropiedadesPlantaEquipo.Edificios.AjusteAcumuladoRevaluacionesReexpresiones'
                            }
                            data={
                              data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Edificios.AjusteAcumuladoRevaluacionesReexpresiones
                            }
                            handleChange={handleChange}
                          />                            
                        </article>                                                
                        </section>
                    </div>
                    )}
                    <ESFvalues
                    title='Edificios Total'         
                    path={
                      'ActivosPasivos.Activos.PropiedadesPlantaEquipo.Edificios.Total'
                    }
                    data={
                      data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Edificios.Total
                    }
                    handleChange={handleChange}
                    />  
                    <ESFvalues
                    title='Activos tangibles para exploración y evaluación de recursos minerales'
                    path={
                      'ActivosPasivos.Activos.PropiedadesPlantaEquipo.ActivosTangiblesExploracionEvaluacionRecursosMinerales'
                    }
                    data={
                      data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.ActivosTangiblesExploracionEvaluacionRecursosMinerales
                    }
                    handleChange={handleChange}
                    />
                    <button type="button"
                      className="w-full text-left p-4 border-b border-gray-200"
                      onClick={() => toggleSubSection("Otras-propiedades")}>
                      Otras propiedades, planta y equipo
                    </button> 
                    {expandedSubSection === "Otras-propiedades" && (
                      <div className="pl-4">
                      <section className="p-2 bg-white border rounded-md">
                        <article>
                          <ESFvalues
                            title='Costo'
                            path={
                              'ActivosPasivos.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Costo'
                            }
                            data={
                              data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Costo
                            }
                            handleChange={handleChange}
                          />   
                          <ESFvalues
                            title='Ajuste acumulado por revaluaciones o reexpresiones'
                            path={
                              'ActivosPasivos.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.AjusteAcumuladoRevaluacionesReexpresiones'
                            }
                            data={
                              data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.AjusteAcumuladoRevaluacionesReexpresiones
                            }
                            handleChange={handleChange}
                          />                            
                        </article>                                                
                        </section>
                    </div>
                    )}
                    <ESFvalues
                    title='Otras propiedades, planta y equipo Total'
                    path={
                      'ActivosPasivos.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Total'
                    }
                    data={
                      data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Total
                    }
                    handleChange={handleChange}
                    />
                    <ESFvalues
                    title='Depreciación acumulada de propiedades, planta y equipo'
                    path={
                      'ActivosPasivos.Activos.PropiedadesPlantaEquipo.DepreciacionAcumuladaPropiedadesPlantaEquipo'
                    }
                    data={
                      data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.DepreciacionAcumuladaPropiedadesPlantaEquipo
                    }
                    handleChange={handleChange}
                    />
                    <ESFvalues
                    title='Deterioro acumulado de propiedades, planta y equipo'
                    path={
                      'ActivosPasivos.Activos.PropiedadesPlantaEquipo.DeterioroAcumuladoPropiedadesPlantaEquipo'
                    }
                    data={
                      data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.DeterioroAcumuladoPropiedadesPlantaEquipo
                    }
                    handleChange={handleChange}
                    />
                  </article>    
                    <article>
                      <h3 className="text-lg font-bold">Total</h3>
                      <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                          {
                            data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Total.ValorContable
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                            data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Total.MenorValorFiscal
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Total.MayorValorFiscal
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor fiscal:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Activos.PropiedadesPlantaEquipo.Total.ValorFiscal
                          }
                        </p>
                      </div>
                    </article>                     
                  </section>
                </div>
              )}
              </div>
              <div>
                <button type='button'
                  className='w-full text-left p-4 border-b border-gray-200'
                  onClick={() => toggleSection("Activos-intangibles")}> 
                  Activos intangibles   
                </button>          
                {expandedSection === "Activos-intangibles" && (
                  <div className="pl-4">
                    <div className="pl-4">
                      <button
                      type='button'
                      className='w-full text-left p-4 border-b border-gray-200'
                      onClick={() => toggleSubSection("activos-id-plus")}>
                        Activos intangibles distintos a la plusvalía
                      </button>     
                      {expandedSubSection === "activos-id-plus" && (
                        <div className="pl-4">
                        <section className="p-2 bg-white border rounded-md">
                          <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            <ESFvalues
                              title='Acuerdos de concesión (modelo del activo intangible)'
                              path={
                                'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AcuerdosConcesionActivoIntangible'
                              }
                              data={
                                data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AcuerdosConcesionActivoIntangible
                              }
                              handleChange={handleChange}
                            />          
                            <ESFvalues
                            title='Activos intangibles exploración y evaluación de recursos minerales'
                            path={
                              'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ActivosIntangiblesExploracionEvaluacionRecursosMinerales'
                            }           
                            data={
                              data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ActivosIntangiblesExploracionEvaluacionRecursosMinerales
                            }     
                            handleChange={handleChange}
                            /> 
                            <button 
                            type='button'
                            className='w-full text-left p-4 border-b border-gray-200'
                            onClick={() => toggleSubSubSection('marcas-patentes')}>
                              Marcas, patentes, licencias y otros derechos
                            </button>
                            {expandedSubSubSection === 'marcas-patentes' && (
                              <div className="pl-4">
                              <section className="p-2 bg-white border rounded-md">
                                <article>
                                  <ESFvalues
                                    title='Costo'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Costo'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Costo
                                    }
                                    handleChange={handleChange}
                                  />      
                                  <ESFvalues
                                  title='Ajuste acumulado por revaluaciones o reexpresiones'    
                                  path={
                                    'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.AjusteAcumuladoRevaluacionesReexpresiones'
                                  }   
                                  data={
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.AjusteAcumuladoRevaluacionesReexpresiones
                                  }          
                                  handleChange={handleChange}
                                  />     
                                </article>                                                        
                              </section>
                            </div>
                            )}
                            <ESFvalues 
                            title='Total Marcas, patentes, licencias y otros derechos'
                            path={
                              'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Total'
                            }
                            data={
                              data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Total
                            }
                            handleChange={handleChange}
                            />
                            <button 
                            type='button'
                            className='w-full text-left p-4 border-b border-gray-200'
                            onClick={() => toggleSubSubSection('arrendamiento-financiero')}>
                              Arrendamiento Financiero 
                            </button>
                            {expandedSubSubSection === 'arrendamiento-financiero' && (
                              <div className="pl-4">
                              <section className="p-2 bg-white border rounded-md">
                                <article>
                                  <ESFvalues
                                    title='Costo'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ArrendamientoFinanciero.Costo'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ArrendamientoFinanciero.Costo
                                    }
                                    handleChange={handleChange}
                                  />      
                                  <ESFvalues
                                  title='Ajuste acumulado por revaluaciones o reexpresiones'    
                                  path={
                                    'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ArrendamientoFinanciero.AjusteAcumuladoRevaluacionesReexpresiones'
                                  }   
                                  data={
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ArrendamientoFinanciero.AjusteAcumuladoRevaluacionesReexpresiones
                                  }          
                                  handleChange={handleChange}
                                  />     
                                </article>                                                        
                              </section>
                            </div>
                            )}
                            <ESFvalues 
                            title='Total Arrendamiento Financiero'
                            path={
                              'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ArrendamientoFinanciero.Total'
                            }
                            data={
                              data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ArrendamientoFinanciero.Total
                            }
                            handleChange={handleChange}
                            />
                            <button 
                            type='button'
                            className='w-full text-left p-4 border-b border-gray-200'
                            onClick={() => toggleSubSubSection('otros-activos-intangibles')}>
                              Otros activos intangibles
                            </button>
                            {expandedSubSubSection === 'otros-activos-intangibles' && (
                              <div className="pl-4">
                              <section className="p-2 bg-white border rounded-md">
                                <article>
                                  <ESFvalues
                                    title='Costo'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Costo'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Costo
                                    }
                                    handleChange={handleChange}
                                  />      
                                  <ESFvalues
                                  title='Ajuste acumulado por revaluaciones o reexpresiones'    
                                  path={
                                    'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.AjusteAcumuladoRevaluacionesReexpresiones'
                                  }   
                                  data={
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.AjusteAcumuladoRevaluacionesReexpresiones
                                  }          
                                  handleChange={handleChange}
                                  />     
                                </article>                                                        
                              </section>
                            </div>
                            )}
                            <ESFvalues 
                            title='Total Otros Activos Intangibles'
                            path={
                              'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Total'
                            }
                            data={
                              data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Total
                            }
                            handleChange={handleChange}
                            />
                            <ESFvalues
                            title='Amortización acumulada de activos intangibles distintos de la plusvalía'
                            path={
                              'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia'
                            }
                            data={
                              data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia
                            }
                            handleChange={handleChange}
                            />
                            <ESFvalues
                            title='Deterioro acumulado de activos intangibles distintos de la plusvalía'
                            path={
                              'ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia'
                            }
                            data={
                              data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia
                            }
                            handleChange={handleChange}
                            />
                          </article>    
                            <article>
                              <h3 className="text-lg font-bold">Total</h3>
                              <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Valor contable:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total.ValorContable
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Efecto conversion:
                                  </span>{' '}
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total.EfectoConversion
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Menor valor fical:
                                  </span>
                                  {
                                      data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total.MenorValorFiscal
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Mayor Valor Fiscal:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total.MayorValorFiscal
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Valor fiscal:
                                  </span>{' '}
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.Total.ValorFiscal
                                  }
                                </p>
                              </div>
                            </article>                     
                          </section>
                      </div>
                      )}
                    </div>
                    <div className="pl-4">
                      <button
                      type='button'
                      className='w-full text-left p-4 border-b border-gray-200'
                      onClick={() => toggleSubSection("activo-i-plus")}>
                        Plusvalía o Good Will
                      </button>
                      {expandedSubSection === "activos-i-plus" && (
                        <div className="pl-4">
                        <section className="p-2 bg-white border rounded-md">
                          <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            <button
                            type='Plusvalía o Good Will'
                            className='w-full text-left p-4 border-b border-gray-200'
                            onClick={() => toggleSubSubSection('plusvalia-goodwill')}>
                              Plusvalía o Good Will
                            </button>
                            {expandedSubSubSection === 'plusvalia-goodwill' && (
                              <div className="pl-4">
                              <section className="p-2 bg-white border rounded-md">
                                <article>
                                  <ESFvalues
                                    title='Adquisición de establecimiento de comercio'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.AdquisicionEstablecimientoComercio'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.AdquisicionEstablecimientoComercio
                                    }
                                    handleChange={handleChange}
                                  />      
                                  <ESFvalues
                                    title='Fusiones'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Fusiones'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Fusiones
                                    }
                                    handleChange={handleChange}
                                  />
                                  <ESFvalues
                                    title='Escisiones'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Escisiones'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Escisiones
                                    }
                                    handleChange={handleChange}
                                  />
                                  <ESFvalues
                                    title='Compra de acciones'
                                    path={
                                      'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.CompraAcciones'
                                    }
                                    data={
                                      data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.CompraAcciones
                                    }
                                    handleChange={handleChange}
                                  />    
                                </article>                                                        
                              </section>
                            </div>
                            )}
                            <ESFvalues
                              title='Compra de acciones'
                              path={
                                'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Total'
                              }
                              data={
                                data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Total
                              }
                              handleChange={handleChange}
                            /> 
                            <ESFvalues
                              title='Amortización acumulada de la plusvalía o Good Will'
                              path={
                                'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.AmortizacionAcumuladaPlusvaliaGoodwill'
                              }
                              data={
                                data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.AmortizacionAcumuladaPlusvaliaGoodwill
                              }
                              handleChange={handleChange}
                            /> 
                            <ESFvalues
                              title='Deterioro acumulado de la plusvalía o Good Will'
                              path={
                                'ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.DeterioroAcumuladoPlusvaliaGoodwill'
                              }
                              data={
                                data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.DeterioroAcumuladoPlusvaliaGoodwill
                              }
                              handleChange={handleChange}
                            />                            
                          </article>    
                            <article>
                              <h3 className="text-lg font-bold">Total</h3>
                              <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Valor contable:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total.ValorContable
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Efecto conversion:
                                  </span>{' '}
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total.EfectoConversion
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Menor valor fical:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total.MenorValorFiscal
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Mayor Valor Fiscal:
                                  </span>
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total.MayorValorFiscal
                                  }
                                </p>
                                <p className="border p-1 rounded-sm">
                                  <span className="font-semibold bg-white">
                                    Valor fiscal:
                                  </span>{' '}
                                  {
                                    data.ActivosPasivos.Activos.ActivosIntangibles.PlusvaliaGoodwill.Total.ValorFiscal
                                  }
                                </p>
                              </div>
                            </article>                     
                          </section>
                      </div>
                      )}
                    </div>
                    <article>
                      <h3 className="text-lg font-bold">Total</h3>
                      <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                          {
                            data.ActivosPasivos.Activos.ActivosIntangibles.Total.ValorContable
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Activos.ActivosIntangibles.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                            data.ActivosPasivos.Activos.ActivosIntangibles.Total.MenorValorFiscal
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Activos.ActivosIntangibles.Total.MayorValorFiscal
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor fiscal:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Activos.ActivosIntangibles.Total.ValorFiscal
                          }
                        </p>
                      </div>
                    </article>                   
                  </div>
                )} 
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection("propiedades-inversion")}> 
                  Propiedades de inversión   
                </button> 
                {expandedSection === 'propiedades-inversion' && (
                   <div className="pl-4">
                   <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                     <button 
                        type='button'
                        className='w-full text-left p-4 border-b border-gray-200'
                        onClick={() => toggleSubSection('marcas-patentes')}>
                          Terrenos y edificios
                      </button>
                      {expandedSubSection === 'marcas-patentes' && (
                        <div className="pl-4">
                        <section className="p-2 bg-white border rounded-md">
                          <article>
                            <ESFvalues
                              title='Al costo'
                              path={
                                'ActivosPasivos.Activos.PropiedadesInversion.TerrenoEdificios.AlCosto'
                              }
                              data={
                                data.ActivosPasivos.Activos.PropiedadesInversion.TerrenoEdificios.AlCosto
                              }
                              handleChange={handleChange}
                            />      
                            <ESFvalues
                            title='Al valor razonable'    
                            path={
                              'ActivosPasivos.Activos.PropiedadesInversion.TerrenoEdificios.AlValorRazonable'
                            }   
                            data={
                              data.ActivosPasivos.Activos.PropiedadesInversion.TerrenoEdificios.AlValorRazonable
                            }          
                            handleChange={handleChange}
                            />     
                          </article>                                                        
                        </section>
                      </div>
                      )}
                        <ESFvalues
                          title='Depreciación acumulada de propiedades de inversión'
                          path={
                            'ActivosPasivos.Activos.PropiedadesInversion.DepreciacionAcumuladaPropiedadesInversion'
                          }
                          data={
                            data.ActivosPasivos.Activos.PropiedadesInversion.DepreciacionAcumuladaPropiedadesInversion
                          }
                          handleChange={handleChange}
                        />  
                        <ESFvalues
                          title='Deterioro acumulado de propiedades de inversión'
                          path={
                            'ActivosPasivos.Activos.PropiedadesInversion.DeterioroAcumuladoPropiedadesInversion'
                          }
                          data={
                            data.ActivosPasivos.Activos.PropiedadesInversion.DeterioroAcumuladoPropiedadesInversion
                          }
                          handleChange={handleChange}
                        />                           
                     </article>    
                       <article>
                         <h3 className="text-lg font-bold">Total</h3>
                         <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Valor contable:
                             </span>
                             {
                               data.ActivosPasivos.Activos.PropiedadesInversion.Total.ValorContable
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Efecto conversion:
                             </span>{' '}
                             {
                               data.ActivosPasivos.Activos.PropiedadesInversion.Total.EfectoConversion
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Menor valor fical:
                             </span>
                             {
                                data.ActivosPasivos.Activos.PropiedadesInversion.Total.MenorValorFiscal
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Mayor Valor Fiscal:
                             </span>
                             {
                               data.ActivosPasivos.Activos.PropiedadesInversion.Total.MayorValorFiscal
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Valor fiscal:
                             </span>{' '}
                             {
                               data.ActivosPasivos.Activos.PropiedadesInversion.Total.ValorFiscal
                             }
                           </p>
                         </div>
                       </article>                     
                     </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection("activos-no-corrientes")}> 
                  Activos no corrientes   
                </button> 
                {expandedSection === "activos-no-corrientes" && (
                   <div className="pl-4">
                   <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Mantenidos para la venta'
                         path={
                           'ActivosPasivos.Activos.ActivosNoCorrientes.MantenidosParaVenta'
                         }
                         data={
                           data.ActivosPasivos.Activos.ActivosNoCorrientes.MantenidosParaVenta
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Deterioro acumulado activos no corrientes mantenidos para la venta '
                         path={
                           'ActivosPasivos.Activos.ActivosNoCorrientes.DeterioroAcumuladoActivosCorrientesMantenidosParaVenta'
                         }
                         data={
                           data.ActivosPasivos.Activos.ActivosNoCorrientes.DeterioroAcumuladoActivosCorrientesMantenidosParaVenta
                         }
                         handleChange={handleChange}
                       />    
                       <ESFvalues
                         title='Mantenidos para distribuir a los propietarios'
                         path={
                           'ActivosPasivos.Activos.ActivosNoCorrientes.MantenidosParaDistribuirPropietarios'
                         }
                         data={
                           data.ActivosPasivos.Activos.ActivosNoCorrientes.MantenidosParaDistribuirPropietarios
                         }
                         handleChange={handleChange}
                       />    
                       <ESFvalues
                         title='Deterioro acumulado activos no corrientes mantenidos para distribuir a los propietarios '
                         path={
                           'ActivosPasivos.Activos.ActivosNoCorrientes.DeterioroAcumuladoActivosCorrientesMantenidosParaDistribuirPropietarios'
                         }
                         data={
                           data.ActivosPasivos.Activos.ActivosNoCorrientes.DeterioroAcumuladoActivosCorrientesMantenidosParaDistribuirPropietarios
                         }
                         handleChange={handleChange}
                       />                         
                     </article>    
                       <article>
                         <h3 className="text-lg font-bold">Total</h3>
                         <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Valor contable:
                             </span>
                             {
                               data.ActivosPasivos.Activos.ActivosNoCorrientes.Total.ValorContable
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Efecto conversion:
                             </span>{' '}
                             {
                               data.ActivosPasivos.Activos.ActivosNoCorrientes.Total.EfectoConversion
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Menor valor fical:
                             </span>
                             {
                               data.ActivosPasivos.Activos.ActivosNoCorrientes.Total.MenorValorFiscal
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Mayor Valor Fiscal:
                             </span>
                             {
                               data.ActivosPasivos.Activos.ActivosNoCorrientes.Total.MayorValorFiscal
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Valor fiscal:
                             </span>{' '}
                             {
                               data.ActivosPasivos.Activos.ActivosNoCorrientes.Total.ValorFiscal
                             }
                           </p>
                         </div>
                       </article>                     
                     </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection("activos-biologicos")}> 
                  Activos biológicos
                </button> 
                {expandedSection === "activos-biologicos" && (
                   <div className="pl-4">
                   <section className="p-2 bg-white border rounded-md">
                      <div>
                      <button
                        type='button'
                        className='w-full text-left p-4 border-b border-gray-200'
                        onClick={() => toggleSubSection("animales-vivos")}> 
                          Animales vivos
                      </button> 
                      {expandedSubSection === "animales-vivos" && (
                         <div className="pl-4">
                         <section className="p-2 bg-white border rounded-md">
                           <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                             <ESFvalues
                               title='Animales productores medidos al costo'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlCosto
                               }
                               handleChange={handleChange}
                             /> 
                             <ESFvalues
                               title='Depreciación acumulada de animales productores medidos al costo '
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto
                               }
                               handleChange={handleChange}
                             />     
                             <ESFvalues
                               title='Deterioro acumulado de animales productores medidos al costo  '
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto
                               }
                               handleChange={handleChange}
                             />     
                             <ESFvalues
                               title='Animales productores medidos al valor razonable menos costos de venta'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta
                               }
                               handleChange={handleChange}
                             />     
                             <ESFvalues
                               title='Animales consumibles medidos al costo'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlCosto
                               }
                               handleChange={handleChange}
                             />     
                             <ESFvalues
                               title='Deterioro acumulado animales consumibles medidos al costo'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto
                               }
                               handleChange={handleChange}
                             />     
                             <ESFvalues
                               title='Animales consumibles medidos al valor razonable menos costos de venta'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta
                               }
                               handleChange={handleChange}
                             />                                
                           </article>    
                             <article>
                               <h3 className="text-lg font-bold">Total</h3>
                               <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Valor contable:
                                   </span>
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.Total.ValorContable
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Efecto conversion:
                                   </span>{' '}
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.Total.EfectoConversion
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Menor valor fical:
                                   </span>
                                   {
                                      data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.Total.MenorValorFiscal
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Mayor Valor Fiscal:
                                   </span>
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.Total.MayorValorFiscal
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Valor fiscal:
                                   </span>{' '}
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.AnimalesVivos.Total.ValorFiscal
                                   }
                                 </p>
                               </div>
                             </article>                     
                           </section>
                       </div>
                      )}
                      </div>
                      <div>
                      <button
                        type='button'
                        className='w-full text-left p-4 border-b border-gray-200'
                        onClick={() => toggleSubSection("plantas-productoras")}> 
                          Plantas productoras y cultivos consumibles
                      </button> 
                      {expandedSubSection === "plantas-productoras" && (
                         <div className="pl-4">
                         <section className="p-2 bg-white border rounded-md">
                           <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                             <ESFvalues
                               title='Plantas productoras medidas al costo'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlCosto
                               }
                               handleChange={handleChange}
                             />      
                             <ESFvalues
                               title='Depreciación acumulada de plantas productoras'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DepreciacionAcumuladaDePlantasProductoras'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DepreciacionAcumuladaDePlantasProductoras
                               }
                               handleChange={handleChange}
                             /> 
                             <ESFvalues
                               title='Deterioro acumulado de plantas productoras'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoDePlantasProductoras'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoDePlantasProductoras
                               }
                               handleChange={handleChange}
                             /> 
                             <ESFvalues
                               title='Plantas productoras medidas al valor razonable'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlValorRazonable'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlValorRazonable
                               }
                               handleChange={handleChange}
                             /> 
                             <ESFvalues
                               title='Cultivos consumibles medidos al costo'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlCosto
                               }
                               handleChange={handleChange}
                             /> 
                             <ESFvalues
                               title='Deterioro acumulado cultivos consumibles medidos al costo'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto
                               }
                               handleChange={handleChange}
                             /> 
                             <ESFvalues
                               title='Cultivos consumibles medidos al valor razonable menos costos de venta'
                               path={
                                 'ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta'
                               }
                               data={
                                 data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta
                               }
                               handleChange={handleChange}
                             />                       
                           </article>    
                             <article>
                               <h3 className="text-lg font-bold">Total</h3>
                               <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Valor contable:
                                   </span>
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total.ValorContable
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Efecto conversion:
                                   </span>{' '}
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total.EfectoConversion
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Menor valor fical:
                                   </span>
                                   {
                                      data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total.MenorValorFiscal
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Mayor Valor Fiscal:
                                   </span>
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total.MayorValorFiscal
                                   }
                                 </p>
                                 <p className="border p-1 rounded-sm">
                                   <span className="font-semibold bg-white">
                                     Valor fiscal:
                                   </span>{' '}
                                   {
                                     data.ActivosPasivos.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.Total.ValorFiscal
                                   }
                                 </p>
                               </div>
                             </article>                     
                           </section>
                       </div>
                      )}
                      </div>
                       <article>
                         <h3 className="text-lg font-bold">Total</h3>
                         <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Valor contable:
                             </span>
                             {
                               data.ActivosPasivos.Activos.ActivosBiologicos.Total.ValorContable
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Efecto conversion:
                             </span>{' '}
                             {
                               data.ActivosPasivos.Activos.ActivosBiologicos.Total.EfectoConversion
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Menor valor fical:
                             </span>
                             {
                                 data.ActivosPasivos.Activos.ActivosBiologicos.Total.MenorValorFiscal
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Mayor Valor Fiscal:
                             </span>
                             {
                               data.ActivosPasivos.Activos.ActivosBiologicos.Total.MayorValorFiscal
                             }
                           </p>
                           <p className="border p-1 rounded-sm">
                             <span className="font-semibold bg-white">
                               Valor fiscal:
                             </span>{' '}
                             {
                               data.ActivosPasivos.Activos.ActivosBiologicos.Total.ValorFiscal
                             }
                           </p>
                         </div>
                       </article>                     
                     </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection("otros-activos-ino")}> 
                  Otros activos
                </button> 
                {expandedSection === "otros-activos-ino" && (
                  <div className="pl-4">
                    <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Activos plan de beneficios a empleados'
                         path={
                           'ActivosPasivos.Activos.OtrosActivos.ActivosPlanBeneficiosEmpleados'
                         }
                         data={
                           data.ActivosPasivos.Activos.OtrosActivos.ActivosPlanBeneficiosEmpleados
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Otros activos'
                         path={
                           'ActivosPasivos.Activos.OtrosActivos.OtrosActivos'
                         }
                         data={
                           data.ActivosPasivos.Activos.OtrosActivos.OtrosActivos
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Activos reconocidos solamente para fines fiscales'
                         path={
                           'ActivosPasivos.Activos.OtrosActivos.ActivosReconocidosSolamenteFinesFiscales'
                         }
                         data={
                           data.ActivosPasivos.Activos.OtrosActivos.ActivosReconocidosSolamenteFinesFiscales
                         }
                         handleChange={handleChange}
                       />                            
                      </article>
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Valor contable:
                            </span>
                              {
                                data.ActivosPasivos.Activos.OtrosActivos.Total.ValorContable
                              }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Efecto conversion:
                            </span>{' '}
                            {
                              data.ActivosPasivos.Activos.OtrosActivos.Total.EfectoConversion
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Menor valor fical:
                            </span>
                            {
                                data.ActivosPasivos.Activos.OtrosActivos.Total.MenorValorFiscal
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Mayor Valor Fiscal:
                              </span>
                              {
                                data.ActivosPasivos.Activos.OtrosActivos.Total.MayorValorFiscal
                              }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Valor fiscal:
                            </span>{' '}
                            {
                              data.ActivosPasivos.Activos.OtrosActivos.Total.ValorFiscal
                            }
                          </p>
                        </div>
                    </article>                        
                    </section>
                  </div>
                )}
              </div>
              <div>
                <button type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection("total-activos-i")}> 
                  Total Activos
                </button>
                {expandedSection === "total-activos-i" && (
                  <article>
                  <h3 className="text-lg font-bold">Total</h3>
                  <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Valor contable:
                      </span>
                      {
                        data.ActivosPasivos.Activos.Total.ValorContable
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Efecto conversion:
                      </span>{' '}
                      {
                        data.ActivosPasivos.Activos.Total.EfectoConversion
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Menor valor fical:
                      </span>
                      {
                          data.ActivosPasivos.Activos.Total.MenorValorFiscal
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Mayor Valor Fiscal:
                      </span>
                      {
                        data.ActivosPasivos.Activos.Total.MayorValorFiscal
                      }
                    </p>
                    <p className="border p-1 rounded-sm">
                      <span className="font-semibold bg-white">
                        Valor fiscal:
                      </span>{' '}
                      {
                        data.ActivosPasivos.Activos.Total.ValorFiscal
                      }
                    </p>
                  </div>
                </article>       
                )}
              </div>
            </div>
          )}
          {activeTab === 'pasivos' && (
            <div>
              <div className="border-t border-gray-200">
                <button
                  type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSection('pasivos-obligaciones-i')}
                >
                  Obligaciones financieras y cuentas por pagar
                </button>
                {expandedSection === 'pasivos-obligaciones-i' && (
                  <div className="pl-4">
                    <div className="pl-4">
                      <section className="p-2 bg-white border rounded-md">
                        <h2 className="bg-white font-bold text-xl pb-2">
                          Obligaciones financieras y cuentas por pagar
                        </h2>
                        <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          <ESFvalues
                            title="Obligaciones financieras en moneda local"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaLocal'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaLocal
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Obligaciones financieras en moneda extranjera"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaExtranjera'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaExtranjera
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Depósitos y exigibilidades"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.DepositosYExigibilidades'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.DepositosYExigibilidades
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Cuentas comerciales por pagar en moneda local"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasComercialesPorPagarEnMonedaLocal'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasComercialesPorPagarEnMonedaLocal
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Cuentas comerciales por pagar en moneda extranjera"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasComercialesPorPagarEnMonedaExtranjera'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasComercialesPorPagarEnMonedaExtranjera
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Dividendos y participaciones por pagar"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.DividendosYParticipacionesPorPagar'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.DividendosYParticipacionesPorPagar
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Cuentas por pagar a socios, accionistas o partícipes"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasPorPagarASociosAccionistasOParticipes'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasPorPagarASociosAccionistasOParticipes
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Cuentas y documentos por pagar a otras partes relacionadas y asociadas"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasYDocumentosPorPagarAOtrasPartesRelacionadasYAsociadas'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasYDocumentosPorPagarAOtrasPartesRelacionadasYAsociadas
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Reserva matemática y/o técnica y otros pasivos exclusivos en compañías de seguros"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.ReservaMatematicaYOTecnicaYOtrosPasivosExclusivosEnCompaniasDeSeguros'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.ReservaMatematicaYOTecnicaYOtrosPasivosExclusivosEnCompaniasDeSeguros
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Recaudo a favor de terceros"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.RecaudoAFavorDeTerceros'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.RecaudoAFavorDeTerceros
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Otras cuentas y documentos por pagar en moneda local"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaLocal'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaLocal
                            }
                            handleChange={handleChange}
                          />
                          <ESFvalues
                            title="Otras cuentas y documentos por pagar en moneda extranjera"
                            path={
                              'ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaExtranjera'
                            }
                            data={
                              data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaExtranjera
                            }
                            handleChange={handleChange}
                          />
                          
                        </article>
                        <article>
                          <h3 className="text-lg font-bold">Total</h3>
                          <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Valor contable:
                              </span>
                              {
                                data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.Total.ValorContable
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Efecto conversion:
                              </span>{' '}
                              {
                                data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.Total.EfectoConversion
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Menor valor fical:
                              </span>
                              {
                                data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.Total.MenorValorFiscal
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Mayor Valor Fiscal:
                              </span>
                              {
                                data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.Total.MayorValorFiscal
                              }
                            </p>
                            <p className="border p-1 rounded-sm">
                              <span className="font-semibold bg-white">
                                Valor fiscal:
                              </span>{' '}
                              {
                                data.ActivosPasivos.Pasivos.ObligacionesFinancierasCuentasPorPagar.Total.ValorFiscal
                              }
                            </p>
                          </div>
                        </article>
                      </section>
                    </div>
                    {/* Aquí se pueden añadir más secciones según sea necesario */}
                  </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-arriendos')}>
                  Arrendamientos por pagar
                </button>
                {expandedSection === 'pasivos-arriendos' && (
                <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Financiero o leasing - partes no relacionadas'
                         path={
                           'ActivosPasivos.Pasivos.ArrendamientosPorPagar.FinancieroLeasingPartesNoRelacionadas'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.FinancieroLeasingPartesNoRelacionadas
                         }
                         handleChange={handleChange}
                       />     
                       <ESFvalues
                         title='Financiero o leasing - partes relacionadas'
                         path={
                           'ActivosPasivos.Pasivos.ArrendamientosPorPagar.FinancieroLeasingPartesRelacionadas'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.FinancieroLeasingPartesRelacionadas
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Operativo'
                         path={
                           'ActivosPasivos.Pasivos.ArrendamientosPorPagar.Operativo'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.Operativo
                         }
                         handleChange={handleChange}
                       />                          
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.Total.ValorContable
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor fiscal:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.ArrendamientosPorPagar.Total.ValorFiscal
                          }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-otros-financiero')}>
                  Otros pasivos financieros
                </button>
                {expandedSection === 'pasivos-otros-financiero' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Bonos y documentos equivalentes'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivosFinancieros.BonosYDocumentosEquivalentes'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.BonosYDocumentosEquivalentes
                         }
                         handleChange={handleChange}
                       />
                       <ESFvalues
                         title='Instrumentos financieros derivados'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivosFinancieros.InstrumentosFinancierosDerivados'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.InstrumentosFinancierosDerivados
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Acciones preferenciales o aportes de capital clasificados como pasivos'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivosFinancieros.AccionesPreferencialesOAportesDeCapitalClasificadosComoPasivos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.AccionesPreferencialesOAportesDeCapitalClasificadosComoPasivos
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Derechos fiduciarios'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivosFinancieros.DerechosFiduciarios'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.DerechosFiduciarios
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Otros pasivos financieros'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivosFinancieros.OtrosPasivosFinancieros'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.OtrosPasivosFinancieros
                         }
                         handleChange={handleChange}
                       />                             
                      </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor fiscal:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.OtrosPasivosFinancieros.Total.ValorFiscal
                          }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-impuestos-gravamen')}>
                  Impuestos, gravámenes y tasas por pagar
                </button>
                {expandedSection === 'pasivos-impuestos-gravamen' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Impuesto de renta'
                         path={
                           'ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.ImpuestoRenta'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.ImpuestoRenta
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Impuesto al valor agregado - IVA'
                         path={
                           'ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.IVA'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.IVA
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Otros impuestos, gravámenes y tasas por pagar'
                         path={
                           'ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Otros'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Otros
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.Pasivos.ImpuestosGravamenesTasasPorPagar.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-impuestos-diferidos')}>
                  Pasivos por impuestos diferidos
                </button>
                {expandedSection === 'pasivos-impuestos-diferidos' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title=''
                         path={
                           'ActivosPasivos.Pasivos.PasivosImpuestosDiferidos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosImpuestosDiferidos
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-beneficios-empleados')}>
                  Pasivos por beneficios a los empleados
                </button>
                {expandedSection === 'pasivos-beneficios-empleados' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='De corto plazo'
                         path={
                           'ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.CortoPlazo'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.CortoPlazo
                         }
                         handleChange={handleChange}
                       />
                       <ESFvalues
                         title='De largo plazo'
                         path={
                           'ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.LargoPlazo'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.LargoPlazo
                         }
                         handleChange={handleChange}
                       />
                       <ESFvalues
                         title='Por terminación del vínculo laboral o contractual '
                         path={
                           'ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.TerminacionVinculosLaborales'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.TerminacionVinculosLaborales
                         }
                         handleChange={handleChange}
                       />
                       <ESFvalues
                         title='Post empleo'
                         path={
                           'ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.PostEmpleo'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.PostEmpleo
                         }
                         handleChange={handleChange}
                       />                          
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.Pasivos.PasivosBeneficiosEmpleados.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-provisiones')}>
                  Provisiones
                </button>
                {expandedSection === 'pasivos-provisiones' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Procesos legales (litigios y demandas)'
                         path={
                           'ActivosPasivos.Pasivos.ProvisionesprocesosLegalesLitigiosYDemandas'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.procesosLegalesLitigiosYDemandas
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Mantenimiento y reparaciones'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.mantenimientoYReparaciones'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.mantenimientoYReparaciones
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Obligaciones fiscales'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.obligacionesFiscales'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.obligacionesFiscales
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Desmantelamientos, restauración y rehabilitación'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.desmantelamientosRestauracionYRehabilitacion'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.desmantelamientosRestauracionYRehabilitacion
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Garantías'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.garantias'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.garantias
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Contratos onerosos'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.contratosOnerosos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.contratosOnerosos
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Reembolsos a clientes'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.reembolsosAClientes'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.reembolsosAClientes
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Reestructuraciones de negocios'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.reestructuracionesDeNegocios'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.reestructuracionesDeNegocios
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Pasivos contingentes asumidos en una combinación de negocios'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.pasivosContingentesAsumidosEnUnaCombinacionDeNegocios'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.pasivosContingentesAsumidosEnUnaCombinacionDeNegocios
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Relacionadas con el medio ambiente'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.relacionadasConElMedioAmbiente'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.relacionadasConElMedioAmbiente
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Otras provisiones'
                         path={
                           'ActivosPasivos.Pasivos.Provisiones.otrasProvisiones'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.Provisiones.otrasProvisiones
                         }
                         handleChange={handleChange}
                       />                             
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.Pasivos.Provisiones.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.Provisiones.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.Provisiones.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.Provisiones.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.Pasivos.Provisiones.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-ingresos-diferidos')}>
                  Pasivos por ingresos diferidos
                </button>
                {expandedSection === 'pasivos-ingresos-diferidos' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Anticipos y avances recibidos de clientes'
                         path={
                           'ActivosPasivos.Pasivos.PasivosIngresosDiferidos.AnticiposYAvancesRecibidosDeClientes'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.AnticiposYAvancesRecibidosDeClientes
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Ingresos diferidos por programas de fidelización'
                         path={
                           'ActivosPasivos.Pasivos.PasivosIngresosDiferidos.IngresosDiferidosPorProgramasDeFidelizacion'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.IngresosDiferidosPorProgramasDeFidelizacion
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Subvenciones del gobierno y otras ayudas'
                         path={
                           'ActivosPasivos.Pasivos.PasivosIngresosDiferidos.SubvencionesDelGobiernoYOtrasAyudas'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.SubvencionesDelGobiernoYOtrasAyudas
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Otros pasivos por ingresos diferidos'
                         path={
                           'ActivosPasivos.Pasivos.PasivosIngresosDiferidos.OtrosPasivosPorIngresosDiferidos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.OtrosPasivosPorIngresosDiferidos
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.Pasivos.PasivosIngresosDiferidos.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-otros')}>
                  Otros pasivos
                </button>
                {expandedSection === 'pasivos-otros' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Depósitos recibidos'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.DepositosRecibidos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.DepositosRecibidos
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Retenciones a terceros sobre contratos'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.RetencionesATercerosSobreContratos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.RetencionesATercerosSobreContratos
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Embargos judiciales'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.EmbargosJudiciales'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.EmbargosJudiciales
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Cuentas en participación'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.CuentasEnParticipacion'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.CuentasEnParticipacion
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Pasivo para ejecución de excedentes - ESAL '
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.PasivoParaEjecucionDeExcedentesESAL'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.PasivoParaEjecucionDeExcedentesESAL
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Fondos sociales, mutuales y otros'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.FondosSocialesMutualesYOtros'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.FondosSocialesMutualesYOtros
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Otros pasivos'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.OtrosPasivos'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.OtrosPasivos
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Pasivos reconocidos solamente para fines fiscales'
                         path={
                           'ActivosPasivos.Pasivos.OtrosPasivos.PasivosReconocidosSolamenteParaFinesFiscales'
                         }
                         data={
                           data.ActivosPasivos.Pasivos.OtrosPasivos.PasivosReconocidosSolamenteParaFinesFiscales
                         }
                         handleChange={handleChange}
                       />                                  
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.Pasivos.OtrosPasivos.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.Pasivos.OtrosPasivos.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.Pasivos.OtrosPasivos.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.Pasivos.OtrosPasivos.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.Pasivos.OtrosPasivos.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('pasivos-total')}>
                  Pasivos Total
                </button>
                {expandedSection === 'pasivos-total' && (
                     <article>
                     <h3 className="text-lg font-bold">Total</h3>
                     <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                     <p className="border p-1 rounded-sm">
                       <span className="font-semibold bg-white">
                         Valor contable:
                       </span>
                         {
                           data.ActivosPasivos.Pasivos.Total.ValorContable
                         }
                     </p>
                     <p className="border p-1 rounded-sm">
                       <span className="font-semibold bg-white">
                         Efecto conversion:
                       </span>{' '}
                       {
                         data.ActivosPasivos.Pasivos.Total.EfectoConversion
                       }
                     </p>
                     <p className="border p-1 rounded-sm">
                       <span className="font-semibold bg-white">
                         Menor valor fical:
                       </span>
                       {
                           data.ActivosPasivos.Pasivos.Total.MenorValorFiscal
                       }
                    </p>
                    <p className="border p-1 rounded-sm">
                       <span className="font-semibold bg-white">
                         Mayor Valor Fiscal:
                       </span>
                       {
                         data.ActivosPasivos.Pasivos.Total.MayorValorFiscal
                       }
                    </p>
                    <p className="border p-1 rounded-sm">
                     <span className="font-semibold bg-white">
                       Valor fiscal:
                     </span>{' '}
                     {
                       data.ActivosPasivos.Pasivos.Total.ValorFiscal
                     }
                    </p>
                   </div>
                 </article>
                )}
              </div>
            </div>
          )}
          {activeTab === 'totalpatrimonio' && (
            <ESFvalues
            title='PATRIMONIO (ACTIVOS - PASIVOS)'
            path={
              'ActivosPasivos.TotalPatrimonio'
            }
            data={
              data.ActivosPasivos.TotalPatrimonio
            }
            handleChange={handleChange}
            />
          )}
          {activeTab === 'patrimonio' && (
            <div>
              <div className="border-t border-gray-200">
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('patrimonio-capital-social')}>
                  Capital social y reservas
                </button>
                {expandedSection === 'patrimonio-capital-social' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Capital pagado'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.CapitalPagado'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.CapitalPagado
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Acciones, cuotas o partes de interés social propias en cartera'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.AccionesCuotasPartesInteresSocialPropiasCartera'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.AccionesCuotasPartesInteresSocialPropiasCartera
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Aportes sociales'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.AportesSociales'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.AportesSociales
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Capital asignado'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.CapitalAsignado'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.CapitalAsignado
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Fondo social mutual'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.FondoSocialMutual'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.FondoSocialMutual
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Superávit de capital'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SuperavitCapital'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SuperavitCapital
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Donaciones'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Donaciones'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Donaciones
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Reservas legales o estatutarias'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.ReservasLegalesEstatutarias'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.ReservasLegalesEstatutarias
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Reservas ocasionales'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.ReservasOcasionales'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.ReservasOcasionales
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Reservas y fondos entidades solidarias'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.ReservasFondosEntidadesSolidarias'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.ReservasFondosEntidadesSolidarias
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Asignaciones permanentes - Régimen Tributario Especial'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.AsignacionesPermanentesRegimenTributarioEspecial'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.AsignacionesPermanentesRegimenTributarioEspecial
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Superávit por revaluaciones'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SuperavitRevaluaciones'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SuperavitRevaluaciones
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Superávit método de participación'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SuperavitMetodoParticipacion'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SuperavitMetodoParticipacion
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Dividendos o participaciones decretados en acciones, cuotas o partes de interés social'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.DividendosParticipacionesDecretadosAccionesCuotasPartesInteresSocial'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.DividendosParticipacionesDecretadosAccionesCuotasPartesInteresSocial
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Saldo crédito inversión suplementaria'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SaldoCreditoInversionSuplementaria'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SaldoCreditoInversionSuplementaria
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Saldo débito inversión suplementaria'
                         path={
                           'ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SaldoDebitoInversionSuplementaria'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.SaldoDebitoInversionSuplementaria
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.PatrimonioContable.CapitalSocialReservas.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('patrimonio-resultados-ejercicios')}>
                  Resultados del ejercicio
                </button>
                {expandedSection === 'patrimonio-resultados-ejercicios' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Utilidad o excedente del ejercicio en operaciones continuadas'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadoEjercicio.UtilidadOExcedenteDelEjercicioEnOperacionesContinuadas'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.UtilidadOExcedenteDelEjercicioEnOperacionesContinuadas
                         }
                         handleChange={handleChange}
                       />       
                       <ESFvalues
                         title='Utilidad o excedente del ejercicio en operaciones discontinuadas'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadoEjercicio.UtilidadOExcedenteDelEjercicioEnOperacionesDiscontinuadas'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.UtilidadOExcedenteDelEjercicioEnOperacionesDiscontinuadas
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Pérdida o déficit del ejercicio en operaciones continuadas'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadoEjercicio.PerdidaODeficitDelEjercicioEnOperacionesContinuadas'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.PerdidaODeficitDelEjercicioEnOperacionesContinuadas
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Pérdida o déficit del ejercicio en operaciones discontinuadas'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadoEjercicio.PerdidaODeficitDelEjercicioEnOperacionesDiscontinuadas'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.PerdidaODeficitDelEjercicioEnOperacionesDiscontinuadas
                         }
                         handleChange={handleChange}
                       />                        
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.PatrimonioContable.ResultadoEjercicio.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button 
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('patrimonio-resultados-acomulados')}>
                  Resultados acumulados
                </button>
                {expandedSection === 'patrimonio-resultados-acomulados' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Utilidades o excedentes acumulados susceptibles de distribución a titulo de no constitutivo de renta ni ganancia ocasional'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionATituloDeNoConstitutivoDeRentaNiGananciaOcasional'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionATituloDeNoConstitutivoDeRentaNiGananciaOcasional
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Utilidades o excedentes acumulados susceptibles de distribución en calidad de gravados'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionEnCalidadDeGravados'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionEnCalidadDeGravados
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Utilidades acumuladas por ajustes por corrección de errores'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesAcumuladasPorAjustesPorCorreccionDeErrores'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesAcumuladasPorAjustesPorCorreccionDeErrores
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Utilidades por ajustes por cambios en políticas contables'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesPorAjustesPorCambiosEnPoliticasContables'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.UtilidadesPorAjustesPorCambiosEnPoliticasContables
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Pérdidas o déficit acumulados'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.PerdidasODeficitAcumulados'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.PerdidasODeficitAcumulados
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Pérdidas acumuladas por ajustes por correcciones de errores'
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.PerdidasAcumuladasPorAjustesPorCorreccionesDeErrores'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.PerdidasAcumuladasPorAjustesPorCorreccionesDeErrores
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Pérdidas  por ajustes por cambios en políticas contables '
                         path={
                           'ActivosPasivos.PatrimonioContable.ResultadosAcumulados.PerdidasPorAjustesPorCambiosEnPoliticasContables'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.PerdidasPorAjustesPorCambiosEnPoliticasContables
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.PatrimonioContable.ResultadosAcumulados.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('patrimonio-ganancias-acomuladas')}>
                  Ganancias pérdidas acumuladas o retenidas por la adopción por primera
                </button>
                {expandedSection === 'patrimonio-ganancias-acomuladas' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Ganancias acumuladas netas en la adopción por primera vez'
                         path={
                           'ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimer.GananciasPrimeraVez'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.GananciasPrimeraVez
                         }
                         handleChange={handleChange}
                       />   
                       <ESFvalues
                         title='Pérdidas acumuladas netas - adopción por primera vez'
                         path={
                           'ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimer.PerdidasPrimeraVez'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.PerdidasPrimeraVez
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                     <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                   
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('patrimonio-otro-resultado')}>
                  Otro resultado integral acumulado
                </button>
                {expandedSection === 'patrimonio-otro-resultado' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                       <ESFvalues
                         title='Ajuste positivo por efecto de conversión'
                         path={
                           'ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.AjustePositivoPorEfectoConversion'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.AjustePositivoPorEfectoConversion
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Ajuste negativo por efecto de conversión'
                         path={
                           'ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.AjusteNegativoPorEfectoConversion'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.AjusteNegativoPorEfectoConversion
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Ganancias acumuladas - ORI'
                         path={
                           'ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.GananciasAcomuladasORI'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.GananciasAcomuladasORI
                         }
                         handleChange={handleChange}
                       /> 
                       <ESFvalues
                         title='Pérdidas acumuladas - ORI'
                         path={
                           'ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.PerdidasAcumuladasORI'
                         }
                         data={
                           data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.PerdidasAcumuladasORI
                         }
                         handleChange={handleChange}
                       />                            
                     </article>    
                      <article>
                        <h3 className="text-lg font-bold">Total</h3>
                        <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Valor contable:
                          </span>
                            {
                              data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.Total.ValorContable
                            }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Efecto conversion:
                          </span>{' '}
                          {
                            data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.Total.EfectoConversion
                          }
                        </p>
                        <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Menor valor fical:
                          </span>
                          {
                              data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.Total.MenorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                          <span className="font-semibold bg-white">
                            Mayor Valor Fiscal:
                          </span>
                          {
                            data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.Total.MayorValorFiscal
                          }
                       </p>
                       <p className="border p-1 rounded-sm">
                        <span className="font-semibold bg-white">
                          Valor fiscal:
                        </span>{' '}
                        {
                          data.ActivosPasivos.PatrimonioContable.OtroResultadoIntegralAcumulado.Total.ValorFiscal
                        }
                       </p>
                      </div>
                    </article>                     
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('patrimonio-total')}>
                  TOTAL PATRIMONIO CONTABLE
                </button>
                {expandedSection === 'patrimonio-total' && (
                   <article>
                   <h3 className="text-lg font-bold">Total</h3>
                   <div className="bg-white flex flex-col md:flex-row gap-2 justify-between">
                   <p className="border p-1 rounded-sm">
                     <span className="font-semibold bg-white">
                       Valor contable:
                     </span>
                       {
                         data.ActivosPasivos.PatrimonioContable.Total.ValorContable
                       }
                   </p>
                   <p className="border p-1 rounded-sm">
                     <span className="font-semibold bg-white">
                       Efecto conversion:
                     </span>{' '}
                     {
                       data.ActivosPasivos.PatrimonioContable.Total.EfectoConversion
                     }
                   </p>
                   <p className="border p-1 rounded-sm">
                     <span className="font-semibold bg-white">
                       Menor valor fical:
                     </span>
                     {
                         data.ActivosPasivos.PatrimonioContable.Total.MenorValorFiscal
                     }
                  </p>
                  <p className="border p-1 rounded-sm">
                     <span className="font-semibold bg-white">
                       Mayor Valor Fiscal:
                     </span>
                     {
                       data.ActivosPasivos.PatrimonioContable.Total.MayorValorFiscal
                     }
                  </p>
                  <p className="border p-1 rounded-sm">
                   <span className="font-semibold bg-white">
                     Valor fiscal:
                   </span>{' '}
                   {
                     data.ActivosPasivos.PatrimonioContable.Total.ValorFiscal
                   }
                  </p>
                 </div>
                </article> 
                )}
              </div>
            </div>
          )}
          {activeTab === 'datos-informativos' && (
            <div>
              <div className="border-t border-gray-200">
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('datos-informativos-activos')}>
                  Activos
                </button>
                {expandedSection === 'datos-informativos-activos' && (
                  <div className="pl-4">
                  <section className="p-2 bg-white border rounded-md">
                     <article className="bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                       <ESFvalues
                         title='Total de intereses implícitos no devengados (futuros ingresos financieros en el estado de resultados) por acuerdos que constituyen efectivamente una transacción financiera o cobro diferido'
                         path={
                           'ActivosPasivos.DatosInformativos.Activos.TotalIntereses'
                         }
                         data={
                           data.ActivosPasivos.DatosInformativos.Activos.TotalIntereses
                         }
                         handleChange={handleChange}
                       />        
                       <ESFvalues
                         title='Total activos (fideicomitidos y generados) en el periodo gravable por fideicomisos o encargos fiduciarios en donde el contribuyente es fideicomitente o fiduciante'
                         path={
                           'ActivosPasivos.DatosInformativos.Activos.TotalActivos'
                         }
                         data={
                           data.ActivosPasivos.DatosInformativos.Activos.TotalActivos
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Inventarios de terceros'
                         path={
                           'ActivosPasivos.DatosInformativos.Activos.InventariosTerceros'
                         }
                         data={
                           data.ActivosPasivos.DatosInformativos.Activos.InventariosTerceros
                         }
                         handleChange={handleChange}
                       />  
                       <ESFvalues
                         title='Inventarios en poder de terceros'
                         path={
                           'ActivosPasivos.DatosInformativos.Activos.InventariosPoderTerceros'
                         }
                         data={
                           data.ActivosPasivos.DatosInformativos.Activos.InventariosPoderTerceros
                         }
                         handleChange={handleChange}
                       />                      
                     </article>                  
                  </section>
                 </div>
                )}
              </div>
              <div>
                <button 
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('datos-informativos-retencion')}>
                  Retención en la fuente trasladable art. 242-1 del ET
                </button>
                {expandedSection === 'datos-informativos-retencion' && (
                  <ESFvalues
                  title=''
                  path={
                    'ActivosPasivos.DatosInformativos.RetencionFuenteTrasladableArt2421ET'
                  }
                  data={
                    data.ActivosPasivos.DatosInformativos.RetencionFuenteTrasladableArt2421ET
                  }
                  handleChange={handleChange}
                />     
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('datos-informativos-pasivos')}>
                  Pasivos
                </button>
                {expandedSection === 'datos-informativos-pasivos' && (
                   <div className="pl-4">
                   <section className="p-2 bg-white border rounded-md">
                      <article className="bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                        <ESFvalues
                          title='Total de intereses implícitos no devengados (futuros ingresos financieros en el estado de resultados) por acuerdos que constituyen efectivamente una transacción financiera o cobro diferido'
                          path={
                            'ActivosPasivos.DatosInformativos.Pasivos.TotalIntereses'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Pasivos.TotalIntereses
                          }
                          handleChange={handleChange}
                        />        
                        <ESFvalues
                          title='Total activos (fideicomitidos y generados) en el periodo gravable por fideicomisos o encargos fiduciarios en donde el contribuyente es fideicomitente o fiduciante'
                          path={
                            'ActivosPasivos.DatosInformativos.Pasivos.TotalPasivos'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Pasivos.TotalPasivos
                          }
                          handleChange={handleChange}
                        />                    
                      </article>                  
                   </section>
                  </div>
                )}
              </div>
              <div>
                <button
                type='button'
                className='w-full text-left p-4 border-b border-gray-200'
                onClick={() => toggleSection('datos-informativos-patrimonio')}>
                  Patrimonio
                </button>
                {expandedSection === 'datos-informativos-patrimonio' && (
                   <div className="pl-4">
                   <section className="p-2 bg-white border rounded-md">
                      <article className="bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                        <ESFvalues
                          title='Dividendos o participaciones gravados decretados en el periodo'
                          path={
                            'ActivosPasivos.DatosInformativos.Patrimonio.DividendosGravadosDecretadosPeriodo'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Patrimonio.DividendosGravadosDecretadosPeriodo
                          }
                          handleChange={handleChange}
                        /> 
                        <ESFvalues
                          title='Dividendos o participaciones no gravados decretados en el periodo'
                          path={
                            'ActivosPasivos.DatosInformativos.Patrimonio.DividendosNoGravadosDecretadosPeriodo'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Patrimonio.DividendosNoGravadosDecretadosPeriodo
                          }
                          handleChange={handleChange}
                        /> 
                        <ESFvalues
                          title='Dividendos o participaciones gravados efectivamente pagados o exigibles en el periodo'
                          path={
                            'ActivosPasivos.DatosInformativos.Patrimonio.DividendosGravadosPagadosPeriodo'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Patrimonio.DividendosGravadosPagadosPeriodo
                          }
                          handleChange={handleChange}
                        /> 
                        <ESFvalues
                          title='Dividendos o participaciones no gravados efectivamente pagados o exigibles en el periodo'
                          path={
                            'ActivosPasivos.DatosInformativos.Patrimonio.DividendosNoGravadosPagadosPeriodo'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Patrimonio.DividendosNoGravadosPagadosPeriodo
                          }
                          handleChange={handleChange}
                        /> 
                        <ESFvalues
                          title='Dividendos o participaciones pagados o exigibles en el periodo, con cargo a utilidades del mismo período'
                          path={
                            'ActivosPasivos.DatosInformativos.Patrimonio.DividendosGravadosPagadosPeriodoCargoUtilidades'
                          }
                          data={
                            data.ActivosPasivos.DatosInformativos.Patrimonio.DividendosGravadosPagadosPeriodoCargoUtilidades
                          }
                          handleChange={handleChange}
                        />        
                                            
                      </article>                  
                   </section>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ESFpatrimonio;

