import PropTypes from "prop-types";
import GenericValues from "./GenericValues";
import TabBar from "../TabBar/TabBar";
import { useState } from "react";

function GenericTabs({json, TabsNames, ValuesNames, onReport = false}) {

    console.log(json)
    const keys = Object.keys(json);

    const tabs = keys.map(key => ({
        name: key,
        label: TabsNames[key] || key
    }));

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const renderForm = (json) => (
        <GenericValues json={json} ValuesNames={ValuesNames}/>
    );

    return (
        <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
            <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} onReport={onReport}/>
            {tabs.map(tab => (
                activeTab === tab.name ? renderForm(json[tab.name]) : null
            ))}
        </section>
    );
} export default GenericTabs;

GenericTabs.propTypes = {
    json: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    TabsNames: PropTypes.object.isRequired,
    CalculatedValues: PropTypes.array.isRequired,
    ValuesNames: PropTypes.object.isRequired,
    onReport: PropTypes.bool,
}