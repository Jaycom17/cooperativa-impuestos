import PropTypes from "prop-types";
import Accordeon from "../Accordeon/Accordeon";

function Form110Values({ json, path, handleChange, CalculatedValues, ValuesNames}) {

    const renderTextField = (label, value, key) => {
        const displayTitle = ValuesNames[label] || label;
        return(
            <div key={key} className="flex flex-col space-y-2 bg-white">
            <label className="bg-white font-semibold text-sm" htmlFor={key}>
                {displayTitle}
            </label>
            <input
                className=" bg-white border rounded-md p-1"
                type="text"
                name={key}
                value={value}
                placeholder={value}
                onChange={(e) => handleChange(e)}
            />
        </div>
        )
    };

    const renderNumberField = (label, value, key) => {
        const displayTitle = ValuesNames[label] || label;
        return(
            <div key={key} className="flex flex-col space-y-2 bg-white">
            <label className="bg-white font-semibold text-sm" htmlFor={key}>
                {displayTitle}
            </label>
            {CalculatedValues.includes(key.split(".").pop()) ? <p className="bg-white rounded-md p-1">{value}</p> : 
            <input
                className=" bg-white border rounded-md p-1"
                type="number"
                name={key}
                value={value}
                placeholder={0}
                onChange={(e) => handleChange(e)}
            />
        }
        </div>
        )
    };

    const renderBooleanField = (label, value, key) => {
        const displayTitle = ValuesNames[label] || label;
        return (
            <div key={key} className="flex flex-col space-y-2 bg-white">
                <label className="bg-white font-semibold text-sm" htmlFor={key}>
                    {displayTitle}
                </label>
                <select
                    className="bg-white border rounded-md p-1"
                    name={key}
                    defaultValue={value ? 'true' : 'false'}
                    onChange={
                        (e) => handleChange(e)
                    }
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>
        );
    };

    const renderContent = (data, parentKey) => {
        return Object.entries(data).map(([key, val]) => {
            const uniqueKey = `${parentKey}.${key}`;
            if (typeof val === 'object') {
                return renderAccordeon(key, val, uniqueKey);
            }else if(typeof val === 'string'){
                return renderTextField(key, val, uniqueKey);
            }else if(typeof val === 'boolean'){
                return renderBooleanField(key, val, uniqueKey);
            } 
            else {            
                return renderNumberField(key, val, uniqueKey);
            }
        });
    };

    const renderAccordeon = (title, content, key) => {
        const displayTitle = ValuesNames[title] || title;
        return (
            <Accordeon key={key} title={displayTitle}>
                {renderContent(content, key)}
            </Accordeon>
        );
    };

    return (
        <>
            {renderContent(json,path)}
        </>
    );
}
export default Form110Values;

Form110Values.propTypes = {
    path: PropTypes.string.isRequired,
    json: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    CalculatedValues: PropTypes.array.isRequired,
    ValuesNames: PropTypes.object.isRequired
}