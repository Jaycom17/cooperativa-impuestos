import PropTypes from "prop-types";


function ActivosFijosValues ({title}) {
    return(
        <div className="flex flex-col border rounded-md p-4 gap-4 bg-white">
            <h3 className="w-full font-bold text-xl pb-2" >{title}</h3>
            <section className="flex flex-col gap-3 border rounded-md p-2">
                <h3 className="font-semibold text-2xl text-center">Datos contables</h3>
                <section className="border rounded-md p-2">
                    <h3 className="font-semibold text-xl">Valor total</h3>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        <article className="flex flex-col border p-3 rounded-md">
                            <h4 className="mb-3 text-lg font-medium">Importe</h4>
                            <section className="flex flex-col gap-y-2">
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Costo</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Efecto de conversión</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Ajuste</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                            </section>
                        </article>
                        <article className="flex flex-col border p-3 rounded-md">
                            <h4 className="mb-3 text-lg font-medium">Incrementos</h4>
                            <section className="flex flex-col gap-y-2">
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Transferencias</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Cambios de valor</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                            </section>
                        </article>
                        <article className="flex flex-col border p-3 rounded-md">
                            <h4 className="mb-3 text-lg font-medium">Disminuciones</h4>
                            <section className="flex flex-col gap-y-2">
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Transferencias</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Cambios de valor</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                            </section>
                        </article>
                        <article className="flex flex-col border p-3 rounded-md">
                            <h4 className="mb-3 text-lg font-medium">Depreciación</h4>
                            <section className="flex flex-col gap-y-2">
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Por costo</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Efecto de conversión</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                                <div className="flex flex-col space-y-2 bg-white">
                                    <label className="bg-white font-semibold text-sm" htmlFor="Costo">Ajuste</label>
                                    <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                                </div>
                            </section>
                        </article>
                    </section>
                </section>

                <section className="border rounded-md p-2">
                    <h3 className="font-semibold text-xl">Datos informativos </h3>
                    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Valor activos</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Desmantelamiento</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Mayor valor</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                    </section>
                </section>
            </section>

            <section className="flex flex-col gap-3 border rounded-md p-2">
                <h3 className="font-semibold text-2xl text-center">Datos Fiscales</h3>
                <section className="border rounded-md p-2">
                    <h3 className="font-semibold text-xl">Valor total </h3>
                    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Saldo al comienzo</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Incrementos</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Disminuciones</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Subtotal al final</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Depresiación</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Total neto</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Gasto fiscal</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                    </section>
                </section>

                <section className="border rounded-md p-2">
                    <h3 className="font-semibold text-xl">Datos informativos </h3>
                    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Valor total al final</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Depreciación</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Valor neto al final</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                        <div className="flex flex-col space-y-2 bg-white">
                            <label className="bg-white font-semibold text-sm" htmlFor="Costo">Gasto fiscal</label>
                            <input className=" bg-white border rounded-md p-1" type="number" name="Costo" placeholder={0} />
                        </div>
                    </section>
                </section>
            </section>

        </div>
    );
}

export default ActivosFijosValues;

ActivosFijosValues.propTypes = {
    title: PropTypes.string.isRequired,
}