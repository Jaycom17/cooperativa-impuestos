import PropTypes from "prop-types";
import {
  friendlyNames,
  contablesDatosInformativosKeys,
  contablesValorTotalKeys,
  fiscalesDatosInformativosKeys,
  fiscalesValorTotalKeys,
} from "../../utils/activosFijos";

/**
 * Componente para mostrar totales de activos fijos.
 *
 * Este componente muestra los totales de activos fijos para datos contables y fiscales,
 * incluyendo información detallada como valor total y datos informativos.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.title - Título del componente.
 * @param {Object} props.data - Objeto que contiene los datos de activos fijos.
 * @returns {JSX.Element} Elemento JSX que representa los totales de activos fijos.
 */
function ActivosFijosTotals({ title, data }) {
  /**
   * Renderiza una sección de datos utilizando las keys proporcionadas.
   * @param {Object} sectionData - Datos de la sección.
   * @param {Array} keys - Arreglo de keys para mostrar.
   * @param {string} sectionTitle - Título de la sección.
   * @returns {JSX.Element} Elemento JSX que representa la sección de datos.
   */
  const renderSection = (sectionData, keys, sectionTitle) => (
    <section className="flex flex-col gap-3 border rounded-md p-2">
      <h3 className="font-semibold text-xl">{sectionTitle}</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3">
        {keys.map((key) => (
          <article key={key} className="flex flex-col border p-3 rounded-md">
            <h4 className="mb-3 font-semibold">{friendlyNames[key]}</h4>
            <section className="flex flex-col gap-y-2">
              {typeof sectionData[key] === "object" ? (
                Object.entries(sectionData[key]).map(([subKey, subValue]) => (
                  <div
                    key={subKey}
                    className="flex flex-col space-y-2 bg-white"
                  >
                    <label className="bg-white text-sm">
                      {subKey === "CambiosValorRazonable"
                        ? "Cambios de valor razonable"
                        : friendlyNames[subKey] || subKey}
                    </label>
                    <span className="border-b-2 p-1">{subValue}</span>
                  </div>
                ))
              ) : (
                <div className="flex flex-col space-y-2 bg-white">
                  <span className="border-b-2 p-1">{sectionData[key]}</span>
                </div>
              )}
            </section>
          </article>
        ))}
      </section>
    </section>
  );

  return (
    <div className="flex flex-col border my-4 rounded-md p-4 gap-4 bg-white">
      <h3 className="w-full font-bold text-xl pb-2">{title}</h3>
      <section className="flex flex-col gap-3 border rounded-md p-2">
        <h3 className="font-semibold text-2xl text-center">Datos contables</h3>
        {data.Contables && (
          <>
            {renderSection(
              data.Contables,
              contablesValorTotalKeys,
              "Valor total, incluyendo arrendamiento financiero o leasing financiero"
            )}
            {renderSection(
              data.Contables,
              contablesDatosInformativosKeys,
              "Datos informativos"
            )}
          </>
        )}
      </section>
      <section className="flex flex-col gap-3 border rounded-md p-2">
        <h3 className="font-semibold text-2xl text-center">Datos Fiscales</h3>
        {data.Fiscales && (
          <>
            {renderSection(
              data.Fiscales,
              fiscalesValorTotalKeys,
              "Valor total, incluyendo arrendamiento financiero o leasing financiero"
            )}
            {renderSection(
              data.Fiscales,
              fiscalesDatosInformativosKeys,
              "Datos informativos: Valor activos adquiridos mediante arrendamiento financiero o leasing financiero"
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default ActivosFijosTotals;

ActivosFijosTotals.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
