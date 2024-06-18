import PropTypes from "prop-types";

function ESFvalues({ title, path, data, handleChange }) {
  return (
    <div className="flex flex-col border rounded-md p-4 bg-white">
      <h3 className="w-full bg-white font-bold text-xl pb-2">{title}</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-white gap-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex flex-col space-y-2 bg-white">
            <label className=" bg-white font-semibold text-sm" htmlFor={key}>
              {key}
            </label>
            <input
              className=" bg-white border rounded-md p-1"
              type="number"
              name={key}
              placeholder={value}
              onChange={(e) => handleChange(e, path.split("."))}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

ESFvalues.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ESFvalues;
