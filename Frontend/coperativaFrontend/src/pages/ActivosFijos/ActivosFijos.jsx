import AsideStudent from "../../components/AsideStudent/AsideStudent";
import ActivosFijosValues from "../../components/ActivosFijosValues/ActivosFijosValues";
import basicInformation from '../../formsData/ActivosFijos.json';
import Accordeon from "../../components/Accordeon/Accordeon";
import TabBar from "../../components/TabBar/TabBar";
import { useState } from "react";

const ActivosFijos = () =>{
  const [data, setData] = useState(basicInformation);

    const tabs = [
        {name: 'PPE', label:'Propiedades, plantas y equipos'},
        {name: 'PI', label:'Propiedades de inversión'},
        {name: 'ANCMV', label: 'ANCMV'},
        {name: 'AI', label:'Activos Intangibles'},
        {name: 'TOTALES', label:'TOTALES'},
    ]

    const handleChange = (e, path) => {
        let { name, value } = e.target;
        if (value === '') value = 0;

        path = path.split(".");
        const newData = { ...data };
        path.reduce((acc, key, index) => {
            if (index === path.length - 1) {
                acc[key][name] = Number.parseInt(value);
            }
            return acc[key];
        }, newData);

        console.log(newData)
        setData(newData);
    };

    const [activeTab, setActiveTab] = useState(tabs[0].name)

    const renderSections = (sectionData, pathPrefix) => {
        return Object.keys(sectionData).map((sectionKey) => (
            <Accordeon key={sectionKey} title={sectionKey}>
                <ActivosFijosValues 
                    title={sectionKey} 
                    path={`${pathPrefix}.${sectionKey}`} 
                    data={sectionData[sectionKey]} 
                    handleChange={handleChange}
                />
            </Accordeon>
        ));
    };

    return(
        <main className="flex md:flex-row w-full">
            <AsideStudent/>
            <section className="w-full mt-12 md:mt-0 overflow-auto max-h-screen">
                <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
                {activeTab === 'PPE' && renderSections(data.PropiedadesPlantasEquipos, 'PropiedadesPlantasEquipos')}
                {activeTab === 'PI' && (
                    <div>
                        <Accordeon title={"Terrenos"}>
                        </Accordeon>    
                        <Accordeon title={"Edificios"}>
                        </Accordeon>
                    </div>
                )}
                {activeTab === 'ANCMV' && (
                    <ActivosFijosValues title={"ANCMV"} path={'ANCMV'} data={data.ANCMV} handleChange={handleChange} />
                )}
                {activeTab === 'AI' && (
                    <div>
                        <Accordeon title={"Marcas comerciales"}>
                        </Accordeon>    
                        <Accordeon title={"Activos intangibles de exploración y evaluación"}>
                        </Accordeon>
                    </div>
                )}
                {activeTab === 'TOTALES' && (
                    <div>
                        <Accordeon title={"Total PPE, PI y ANCMV"}>
                            <div>
                                <Accordeon title={"Marcas comerciales"}>
                                    <ActivosFijosValues title={"ANCMV"} path={'ANCMV'} data={data.ANCMV} handleChange={handleChange} />
                                </Accordeon>   
                            </div>
                        </Accordeon>    
                        <Accordeon title={"TOTAL PPE, PI, ANCMV e INTANGIBLES"}>
                        </Accordeon>
                    </div>
                )}
            </section>
        </main>
    );
};

export default ActivosFijos;