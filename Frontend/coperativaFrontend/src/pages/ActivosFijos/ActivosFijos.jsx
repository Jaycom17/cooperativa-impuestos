import AsideStudent from "../../components/AsideStudent/AsideStudent";
import ActivosFijosValues from "../../components/ActivosFijosValues/ActivosFijosValues";
import Accordeon from "../../components/Accordeon/Accordeon";

const ActivosFijos = () =>{
    return(
        <main className="flex md:flex-row w-full">
            <AsideStudent/>
            <section className="w-full mt-12 md:mt-0">
                <Accordeon title={"Terrenos"}>

                    <ActivosFijosValues title="Terrenos"/>

                </Accordeon>

            </section>
        </main>
    );
};

export default ActivosFijos;