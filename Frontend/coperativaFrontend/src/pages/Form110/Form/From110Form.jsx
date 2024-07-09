import jsonData from '../../../formsData/Form110.json';
import CustomAccordion from '../../../components/Accordeon/Accordeon';
import TabBar from "../../../components/TabBar/TabBar";
import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import { useState } from "react";

const From110Form = () => {
    const tabs = [
        { name: 'DatoPers', label: 'Datos del declarante' },
        { name: 'DatosResum', label: 'Datos resumidos' },
        { name: 'TOTALES', label: 'TOTALES' },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const renderTextField = (label, value, key) => (
        <div key={key} className="flex flex-col space-y-2 bg-white">
            <label className="bg-white font-semibold text-sm" htmlFor={key}>
                {label}
            </label>
            <input
                className=" bg-white border rounded-md p-1"
                type="number"
                name={key}
                placeholder={label}
            />
        </div>
    );

    const renderContent = (data, parentKey = '') => {
        return Object.entries(data).map(([key, val]) => {
            const uniqueKey = `${parentKey}-${key}`;
            if (typeof val === 'object') {
                return renderCustomAccordion(key, val, uniqueKey);
            } else {
                return renderTextField(key, val, uniqueKey);
            }
        });
    };

    const renderCustomAccordion = (title, content, key) => (
        <CustomAccordion key={key} title={title}>
            {renderContent(content, key)}
        </CustomAccordion>
    );

    return (
        <main className="flex md:flex-row w-full">
            <AsideStudent />
            <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
                <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 'DatoPers' && renderContent(jsonData.DatoPers)}
                {activeTab === 'DatosResum' && renderContent(jsonData.DatosResum)}
                {activeTab === 'TOTALES' && renderContent(jsonData.Totales)}
            </section>
        </main>
    );
};

export default From110Form;
