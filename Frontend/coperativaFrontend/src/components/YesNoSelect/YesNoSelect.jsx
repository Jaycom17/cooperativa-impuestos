import PropTypes from "prop-types";

function YesNoSelect({message}){
    return(
        <div className="flex items-center gap-2 justify-between bg-gray-200 p-1 rounded">
            <h3 className="font-semibold">{message}</h3>
            <select className="border-none rounded" name="" id="">
                <option value="">Si</option>
                <option value="">No</option>
            </select>
        </div>
    );
}

YesNoSelect.propTypes = {
    message: PropTypes.string
}

export default YesNoSelect;