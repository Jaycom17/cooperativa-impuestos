import PropTypes from "prop-types";
import { IngFacFormEq, IngFacTotals } from "../../utils/ingresosFacturacion";
import InfoBubble from "../InfoBubble/InfoBubble";

function IngFacValues({ title, path, data, handleChange }) {
  return (
    <div className="flex flex-col border rounded-md p-4 bg-white">
      <h4 className="w-full bg-white font-bold text-xl pb-2">{title}</h4>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-white gap-2">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col space-y-2 bg-white justify-between"
          >
            <label
              className=" bg-white font-semibold text-sm flex items-center gap-3"
              htmlFor={key}
            >
              <InfoBubble colorMode={"light"} info={IngFacFormEq[key]} />
              {IngFacFormEq[key]}
            </label>
            {IngFacTotals.includes(key) || path.split(".")[0] === "Totales" ? (
              <p className="p-1">{Intl.NumberFormat("es-CO").format(value)}</p>
            ) : (
              <input
                className=" bg-white border rounded-md p-1"
                type="number"
                name={key}
                placeholder="0"
                defaultValue={value === 0 ? "" : value}
                onChange={(e) => handleChange(path.split("."), e)}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

IngFacValues.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default IngFacValues;
