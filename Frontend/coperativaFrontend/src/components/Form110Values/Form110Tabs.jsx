import PropTypes from "prop-types";
import Form110Values from "./Form110Values";
import TabBar from "../TabBar/TabBar";
import { useState } from "react";

function Form110Tabs({json, handleChange}) {

    const Names = {
        "DatoPers": "Datos Personales",
        "DatosResum": "Datos Resumidos"
    }

    const keys = Object.keys(json);

    const tabs = keys.map(key => ({
        name: key,
        label: Names[key] || key
    }));

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const renderForm = (json, path) => (
        <Form110Values json={json} path={path} handleChange={handleChange} />
    );

    return (
        <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
            <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {tabs.map(tab => (
                activeTab === tab.name ? renderForm(json[tab.name], tab.name) : null
            ))}
        </section>
    );
} export default Form110Tabs;

Form110Tabs.propTypes = {
    json: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}