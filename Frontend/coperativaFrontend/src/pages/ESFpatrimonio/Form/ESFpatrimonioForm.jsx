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
                              title="Cuentas por Cobrar Comerciales"
                              path={
                                'ActivosPasivos.Activos.CuentasPorCobrar.CuentasPorCobrarComerciales'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasPorCobrar
                                  .CuentasPorCobrarComerciales
                              }
                              handleChange={handleChange}
                            />
                            <ESFvalues
                              title="Otras Cuentas por Cobrar"
                              path={
                                'ActivosPasivos.Activos.CuentasPorCobrar.OtrasCuentasPorCobrar'
                              }
                              data={
                                data.ActivosPasivos.Activos.CuentasPorCobrar
                                  .OtrasCuentasPorCobrar
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
                                  data.ActivosPasivos.Activos.CuentasPorCobrar
                                    .Total.ValorContable
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Efecto conversion:
                                </span>{' '}
                                {
                                  data.ActivosPasivos.Activos.CuentasPorCobrar
                                    .Total.EfectoConversion
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Menor valor fical:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.CuentasPorCobrar
                                    .Total.MenorValorFiscal
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Mayor Valor Fiscal:
                                </span>
                                {
                                  data.ActivosPasivos.Activos.CuentasPorCobrar
                                    .Total.MayorValorFiscal
                                }
                              </p>
                              <p className="border p-1 rounded-sm">
                                <span className="font-semibold bg-white">
                                  Valor fiscal:
                                </span>{' '}
                                {
                                  data.ActivosPasivos.Activos.CuentasPorCobrar
                                    .Total.ValorFiscal
                                }
                              </p>
                            </div>
                          </article>
                        </section>
                      </div>
                      )}
                    </div>
                    {/* Aquí se pueden añadir más secciones según sea necesario */} 
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
                        onClick={() => toggleSubSection("activos-comerciales-cobrar-comerciales")}>
                        Cuentas y documentos por cobrar
                      </button>
                      {expandedSubSection === "activos-comerciales-cobrar-comerciales" && (
                        <div className="pl-4">
                        </div>
                      )}
                    </div>
                    <div className="pl-4">
                      <button type="button"
                        className="w-full text-left p-4 border-b border-gray-200"
                        onClick={() => toggleSubSection("activos-comerciales-cobrar-deterioro")}>
                        Deterioro acumulado del valor cuentas y documentos por cobrar
                      </button>
                      {expandedSubSection === "activos-comerciales-cobrar-deterioro" && (
                        <div className="pl-4">
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
          {/* Aquí irían las secciones de Pasivos, Patrimonio y Datos Informativos, implementadas de manera similar */}
        </div>
      </div>
    </div>
  );
};

export default ESFpatrimonio;

