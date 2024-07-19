import PropTypes from "prop-types";
import { ValuesNames, CalculatedValues } from "../../utils/form110.js";
import Accordeon from "../Accordeon/Accordeon.jsx";

function RentaLiquidaValues({ title, path, data, handleChange }) {
  const renderTextField = (sectionData, sectionTitle, value = 0) => {
    let newPath = "";
    if (sectionTitle !== "") {
      newPath = path + "." + sectionTitle;
    } else {
      newPath = path;
    }
    if (typeof sectionData !== "object") {
      value = sectionData;
    }
    const pathParts = newPath.split(".");
    if (CalculatedValues.includes(pathParts[pathParts.length - 1])) {
      return (<p className="p-1 text-xl font-medium border-b-4">{value}</p>);
    } else {
      if (typeof sectionData === "string") {
        return (
          <input
            className="bg-white border rounded-md p-1"
            type="string"
            name={newPath}
            value={value}
            placeholder={newPath}
            onChange={(e) => handleChange(e)}
          />
        );
      } else if (typeof sectionData === "boolean") {
        return (
          <div className="flex flex-col space-y-2 bg-white">
            <select
              className="bg-white border rounded-md p-1"
              name={newPath}
              defaultValue={sectionData ? "true" : "false"}
              onChange={(e) => handleChange(e)}
            >
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
        );
      } else {
        return (
          <input
            className="bg-white border rounded-md p-1"
            type="text"
            name={newPath}
            value={/*value === 0 ? "" : value*/ newPath}
            placeholder={newPath}
            onChange={(e) => handleChange(e)}
          />
        );
      }
    }
  };

  const renderSection = (sectionData, subSection = "") => (
    <>
      {typeof sectionData !== "object" ? (
        <>{renderTextField(sectionData, "")}</>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3">
          {Object.keys(sectionData).map((key) => (
            <article key={key} className="flex flex-col border p-3 rounded-md">
              <h4 className="mb-3 font-semibold">{ValuesNames[key] || key}</h4>
              <section className="flex flex-col gap-y-2">
                {typeof sectionData[key] === "object" ? (
                  Object.entries(sectionData[key]).map(([subKey, subValue]) => (
                    <div
                      key={subKey}
                      className="flex flex-col space-y-2 bg-white"
                    >
                      <label className="bg-white text-sm" htmlFor={subKey}>
                        {ValuesNames[subKey] || subKey}
                      </label>
                      {
                        <>
                          {renderTextField(
                            sectionData[key],
                            `${subSection!== "" ? `${subSection}.` : ""}${key}.${subKey}`,
                            subValue
                          )}
                        </>
                      }
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col space-y-2 bg-white">
                    {<>{renderTextField(sectionData[key], key)}</>}
                  </div>
                )}
              </section>
            </article>
          ))}
        </section>
      )}
    </>
  );

  return (
    <>
    {path === "Ingresos.IngresosNetosActividadIndustrialCoSer" ? (
      <>
      <Accordeon title="Ingresos Netos Actividad">
        <div className="flex flex-col border my-4 rounded-md p-4 gap-4 bg-white">
        <h3 className="w-full font-bold text-xl pb-2">Ingresos Netos Actividad</h3>
        {<>{renderSection(data.IngresosNetosActividadIndustrialCoSer, "IngresosNetosActividadIndustrialCoSer")}</>}
        </div>
      </Accordeon>
      <Accordeon title="Devoluciones Rebajas">
        <div className="flex flex-col border my-4 rounded-md p-4 gap-4 bg-white">
        <h3 className="w-full font-bold text-xl pb-2">Devoluciones Rebajas</h3>
        {<>{renderSection(data.DevolucionesRebajasDescuentos, "DevolucionesRebajasDescuentos")}</>}
        </div>
      </Accordeon>
      </>
    ):( 
    <div className="flex flex-col border my-4 rounded-md p-4 gap-4 bg-white">
      
      <>
        <h3 className="w-full font-bold text-xl pb-2">
        {ValuesNames[title] || title}
      </h3>
      {<>{renderSection(data)}</>}
      </>
    </div>
    )}</>
  );
}

RentaLiquidaValues.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RentaLiquidaValues;
