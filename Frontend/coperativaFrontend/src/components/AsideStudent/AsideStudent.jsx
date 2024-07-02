const AsideEstudent = () => {
    return (
        <aside className="min-h-screen h-full md:w-[200px] bg-[#18273E]">
            <div className="flex flex-col items-center bg-transparent p-4">
                <h1 className="text-white text-xl mt-[10px] bg-transparent">Nombre del estudiante</h1>
            </div>
            <div className="flex flex-col items-center mt-[20px] bg-transparent">
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Formulario 110</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Detalle reglones 110</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Caratula</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">ESF patrimonio</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Renta liquida</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Impuesto diferido</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Ingresos y facruración</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Activos fijos</button>
                <button className="w-full h-[50px] bg-transparent text-white mt-[10px] hover:bg-[#365583] border-b-[1px]">Resumen ESF ERI</button>
            </div>
        </aside>
    );
}

export default AsideEstudent;