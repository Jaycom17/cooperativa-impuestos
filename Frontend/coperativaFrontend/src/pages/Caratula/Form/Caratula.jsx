import AsideStudent from "../../../components/AsideStudent/AsideStudent";
import YesNoSelect from "../../../components/YesNoSelect/YesNoSelect";
import { useState } from "react";
import jsonData from "../../../formsData/Cartulina.json";

function CaratulaForm() {
  const [data, setData] = useState(jsonData);

  const handleChange = (e, path) => {
    let aux = { ...data };

    aux.DatosInf[path] = e.target.value === "true";

    setData(aux);
  };

  const changeDatosDeclarante = (e, path) => {
    let aux = { ...data };

    aux.DatDecl[path] = e.target.value;

    setData(aux);

    console.log(data)
  }

  return (
    <div className="flex bg-gray-100 rounded shadow-md">
      <AsideStudent />
      <main className="overflow-auto max-h-screen w-full">
        <section className="p-2">
          <h2 className="font-bold text-xl mb-3 pl-10 md:pl-[0px]">
            Datos del declarante
          </h2>
          <article className="gap-2 grid grid-cols-1 lg:grid-cols-2 bg-gray-200 rounded">
            <label
              className="flex justify-between p-2 gap-2 items-center"
              htmlFor=""
            >
              {" "}
              <p>Número de Identificación Tributaria (NIT)</p>
              <input onChange={(e)=> changeDatosDeclarante(e, "NIT")} className="rounded p-1" type="text" />
            </label>
            <label
              className="flex justify-between p-2 gap-2 items-center"
              htmlFor=""
            >
              {" "}
              DV
              <input onChange={(e)=> changeDatosDeclarante(e, "DV")} className="rounded p-1" type="number" />
            </label>
            <label
              className="flex justify-between p-2 gap-2 items-center"
              htmlFor=""
            >
              Primer apellido
              <input onChange={(e)=> changeDatosDeclarante(e, "PriApell")} className="rounded p-1" type="text" />
            </label>
            <label
              className="flex justify-between p-2 gap-2 items-center"
              htmlFor=""
            >
              Segundo apellido
              <input onChange={(e)=> changeDatosDeclarante(e, "SegunApell")} className="rounded p-1" type="text" />
            </label>
            <label
              className="flex justify-between p-2 gap-2 items-center"
              htmlFor=""
            >
              Primer nombre
              <input onChange={(e)=> changeDatosDeclarante(e, "PriNomb")} className="rounded p-1" type="text" />
            </label>
            <label
              className="flex justify-between p-2 gap-2 items-center"
              htmlFor=""
            >
              Otros nombres
              <input onChange={(e)=> changeDatosDeclarante(e, "OtrosNomb")} className="rounded p-1 " type="text" />
            </label>
          </article>
        </section>

        <section className="p-2">
          <h2 className="font-bold text-xl mb-3">Datos informativos</h2>
          <article className="flex flex-col gap-2">
            <YesNoSelect
              onchange={handleChange}
              path={"PerNatuSinRes"}
              defaultValue={data.DatosInf.PerNatuSinRes}
              message={"Persona Natural sin residencia"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"ContrRegTriEsp"}
              defaultValue={data.DatosInf.ContrRegTriEsp}
              message={"Contribuyente del Régimen Tributario Especial"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"EntCoop"}
              defaultValue={data.DatosInf.EntCoop}
              message={
                "Entidad Cooperativa (artículo 19-4 Estatuto Tributario)"
              }
            />
            <YesNoSelect
              onchange={handleChange}
              path={"EntSecFin"}
              defaultValue={data.DatosInf.EntSecFin}
              message={"Entidad del sector financiero"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"NueSoc"}
              defaultValue={data.DatosInf.NueSoc}
              message={"Nueva sociedad -ZOMAC"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"ObrImp"}
              defaultValue={data.DatosInf.ObrImp}
              message={"Obras por impuestos -ZOMAC"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"ProgReorEmp"}
              defaultValue={data.DatosInf.ProgReorEmp}
              message={
                "Programa de reorganización empresarial durante el año gravable"
              }
            />
            <YesNoSelect
              onchange={handleChange}
              path={"SocExtPresServ"}
              defaultValue={data.DatosInf.SocExtPresServ}
              message={"Sociedad extranjera"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"OblApl"}
              defaultValue={data.DatosInf.OblApl}
              message={
                "Obligado a aplicar sistemas especiales de valoración de inversiones"
              }
            />
            <YesNoSelect
              onchange={handleChange}
              path={"CostInvEstSis"}
              defaultValue={data.DatosInf.CostInvEstSis}
              message={
                "Costo de los inventarios establecidos por el sistema de juego de inventarios"
              }
            />
            <YesNoSelect
              onchange={handleChange}
              path={"CostInvEstSim"}
              defaultValue={data.DatosInf.CostInvEstSim}
              message={
                "Costo de inventarios establecido simultáneamente por el juego de inventarios y por el sistema de inventario permanente"
              }
            />
            <YesNoSelect
              onchange={handleChange}
              path={"ProgTariImp"}
              defaultValue={data.DatosInf.ProgTariImp}
              message={"Progresividad dela tarifa de impuesto de renta"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"ContrEstJur"}
              defaultValue={data.DatosInf.ContrEstJur}
              message={"Contrato de estabilidad jurídica"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"MonFuncDif"}
              defaultValue={data.DatosInf.MonFuncDif}
              message={"Moneda funcional diferente al peso colombiano"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"MegInv"}
              defaultValue={data.DatosInf.MegInv}
              message={"Mega -Inversiones"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"EmpEcoNar"}
              defaultValue={data.DatosInf.EmpEcoNar}
              message={"Empresa en Economía Naranja"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"CompHoldCol"}
              defaultValue={data.DatosInf.CompHoldCol}
              message={"Compañia de Holding Colombiana"}
            />
            <YesNoSelect
              onchange={handleChange}
              path={"ZonaEcoSocEsp"}
              defaultValue={data.DatosInf.ZonaEcoSocEsp}
              message={"Zona Económica y social especial"}
            />
          </article>
        </section>
      </main>
    </div>
  );
}

export default CaratulaForm;
