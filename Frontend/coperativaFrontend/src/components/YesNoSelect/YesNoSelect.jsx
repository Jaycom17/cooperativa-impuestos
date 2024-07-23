import PropTypes from "prop-types";

function YesNoSelect({message, onchange, path, defaultValue}) {
    return(
        <div className="flex items-center gap-2 justify-between bg-gray-200 p-1 rounded">
            <h3 className="font-semibold">{message}</h3>
            <select onChange={(e) => onchange(e, path)} defaultValue={defaultValue} className="border-none rounded">
                <option value="true">Si</option>
                <option value="false">No</option>
            </select>
        </div>
    );
}

YesNoSelect.propTypes = {
    message: PropTypes.string,
    onchange: PropTypes.func,
    path: PropTypes.string,
    defaultValue: PropTypes.string
}

export default YesNoSelect;