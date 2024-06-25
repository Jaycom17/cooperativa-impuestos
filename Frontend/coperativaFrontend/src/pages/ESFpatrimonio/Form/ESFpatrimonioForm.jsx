import { useState } from 'react';
import basicInformation from '../../../formsData/ESFpatrimonio.json';
import ESFvalues from '../../../components/ESFvalues/ESFvalues';
import AsideEstudent from '../../../components/AsideStudent/AsideStudent';

const ESFpatrimonio = () => {
  const [data, setData] = useState(basicInformation);
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);
  const [expandedInvestmentsSubSection, setExpandedInvestmentsSubSection] = useState(null);

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
    console.log(newData);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedSubSection(null);
  };

  const toggleSubSection = (subSection) => {
    setExpandedSubSection(expandedSubSection === subSection ? null : subSection);
  };

  const toggleInvestmentsSubSection = (subSection) => {
    setExpandedInvestmentsSubSection(
      expandedInvestmentsSubSection === subSection ? null : subSection
    );
  };

  return (
    <div className="flex bg-gray-100 rounded shadow-md">
      <AsideEstudent />
      <form className="bg-white w-full p-2 overflow-auto max-h-screen">
        <div className="bg-white">
          <h1 className="text-2xl font-bold ml-2 bg-white">Activos</h1>
          <div className="border-t border-gray-200">
            <button
              type="button"
              className="w-full text-left p-4 border-b border-gray-200"
              onClick={() => toggleSection('activos')}
            >
              Activos
            </button>
            {expandedSection === 'activos' && (
              <div className="pl-4">
                <button
                  type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSubSection('activos-efectivo')}
                >
                  Activos y Efectivo
                </button>
                {expandedSubSection === 'activos-efectivo' && (
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
                                .ActivosEquivalentesEfectivo.Total.ValorContable
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Efecto conversion:
                            </span>{' '}
                            {
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.Total.EfectoConversion
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Menor valor fical:
                            </span>
                            {
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.Total.MenorValorFiscal
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Mayor Valor Fiscal:
                            </span>
                            {
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.Total.MayorValorFiscal
                            }
                          </p>
                          <p className="border p-1 rounded-sm">
                            <span className="font-semibold bg-white">
                              Valor fiscal:
                            </span>{' '}
                            {
                              data.ActivosPasivos.Activos
                                .ActivosEquivalentesEfectivo.Total.ValorFiscal
                            }
                          </p>
                        </div>
                      </article>
                    </section>
                  </div>
                )}
                <button
                  type="button"
                  className="w-full text-left p-4 border-b border-gray-200"
                  onClick={() => toggleSubSection('activos-inversiones')}
                >
                  Inversiones e Instrumentos Financieros Derivados (Valor Neto)
                </button>
                {expandedSubSection === 'activos-inversiones' && (
                  <div className="pl-4">
                    {[
                      'Derechos de recompra de inversiones',
                      'Instrumentos de deuda a costo amortizado',
                      'Instrumentos de deuda o patrimonio al costo',
                      'Instrumentos de deuda o patrimonio al valor razonable con cambios en resultados',
                      'Instrumentos financieros derivados con fines de negociación',
                      'Instrumentos financieros derivados con fines de cobertura',
                      'Derechos fiduciarios',
                      'Otros',
                    ].map((title, index) => (
                      <div key={index}>
                        <button
                          type="button"
                          className="w-full text-left p-4 border-b border-gray-200"
                          onClick={() =>
                            toggleInvestmentsSubSection(title)
                          }
                        >
                          {title}
                        </button>
                        {expandedInvestmentsSubSection === title && (
                          <div className="pl-4">
                            <section className="p-2 bg-white border rounded-md">
                              <h2 className="bg-white font-bold text-xl pb-2">
                                {title}
                              </h2>
                              <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <ESFvalues
                                  title="Inversiones"
                                  path={`ActivosPasivos.Activos.Inversiones.${title.replace(/\s+/g, '')}.Inversiones`}
                                  data={
                                    data.ActivosPasivos.Activos.Inversiones[
                                      title.replace(/\s+/g, '')
                                    ]?.Inversiones
                                  }
                                  handleChange={handleChange}
                                />
                                <ESFvalues
                                  title="Instrumentos Financieros Derivados"
                                  path={`ActivosPasivos.Activos.Inversiones.${title.replace(/\s+/g, '')}.InstrumentosFinancierosDerivados`}
                                  data={
                                    data.ActivosPasivos.Activos.Inversiones[
                                      title.replace(/\s+/g, '')
                                    ]?.InstrumentosFinancierosDerivados
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
                                      data.ActivosPasivos.Activos.Inversiones[
                                        title.replace(/\s+/g, '')
                                      ]?.Total?.ValorContable
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Efecto conversión:
                                    </span>{' '}
                                    {
                                      data.ActivosPasivos.Activos.Inversiones[
                                        title.replace(/\s+/g, '')
                                      ]?.Total?.EfectoConversion
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Menor valor fiscal:
                                    </span>
                                    {
                                      data.ActivosPasivos.Activos.Inversiones[
                                        title.replace(/\s+/g, '')
                                      ]?.Total?.MenorValorFiscal
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Mayor valor fiscal:
                                    </span>
                                    {
                                      data.ActivosPasivos.Activos.Inversiones[
                                        title.replace(/\s+/g, '')
                                      ]?.Total?.MayorValorFiscal
                                    }
                                  </p>
                                  <p className="border p-1 rounded-sm">
                                    <span className="font-semibold bg-white">
                                      Valor fiscal:
                                    </span>{' '}
                                    {
                                      data.ActivosPasivos.Activos.Inversiones[
                                        title.replace(/\s+/g, '')
                                      ]?.Total?.ValorFiscal
                                    }
                                  </p>
                                </div>
                              </article>
                            </section>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ESFpatrimonio;
