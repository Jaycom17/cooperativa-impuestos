import PropTypes from "prop-types";

function YesNoSelect({ message, path, data, handleChange }) {
    return (
        <div className="flex items-center gap-2 justify-between bg-gray-200 p-1 rounded">
            <h3 className="font-semibold">{message}</h3>
            <select
                className="border-none rounded"
                name={path}
                id=""
                defaultValue={data ? 'true' : 'false'}
                onChange={
                    (e) => handleChange(e)
                }
            >
                <option value="true">Si</option>
                <option value="false">No</option>
            </select>
        </div>
    );
}

YesNoSelect.propTypes = {
    message: PropTypes.string,
    path: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default YesNoSelect;