import { useState } from "react";

const OPTIONS = {
  SI: "SI",
  NO: "NO",
  NOTHING: "NOTHING",
};

function MiddlewareStudent() {
  const [firstTime, setFirstTime] = useState(OPTIONS.NOTHING);

  return (
    <div className="bg-[#1f324e] w-full h-screen flex justify-center items-center flex-col text-white">
      {firstTime === OPTIONS.NOTHING && (
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg">
            ¿Primera vez que entras a la sala?
          </h2>
          <section className="flex gap-3 mt-3">
            <button
              onClick={() => setFirstTime(OPTIONS.SI)}
              className="p-2 bg-green-400 w-16 text-black rounded-sm hover:bg-green-300"
            >
              SI
            </button>
            <button
              onClick={() => setFirstTime(OPTIONS.NO)}
              className="p-2 bg-red-400 w-16 text-black rounded-sm hover:bg-red-300"
            >
              NO
            </button>
          </section>
        </div>
      )}

      {firstTime === OPTIONS.SI && (
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg">
            Bienvenido a la sala
          </h2>
            <p className="text-center mt-3">
                A continuación escribe el nombre con el cual ingresaste previamente a la sala.
            </p>
            <form className="flex flex-col w-full items-center gap-2">
            <input
                type="text"
                className="w-1/2 p-2 rounded-md border border-gray-300 mt-3 text-black"
            />
            <button className="p-2 bg-green-400 w-24 text-black rounded-sm hover:bg-green-300">Buscar</button>
            </form>
            
          <div className="w-full">
          <button onClick={() => setFirstTime(OPTIONS.NOTHING)} className=" text-start underline text-cyan-400 hover:text-[#11a3f1]">Atras</button>
          </div>
        </div>
      )}

      {firstTime === OPTIONS.NO && (
        <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg">
          Bienvenido a la sala
        </h2>
          <p className="text-center mt-3">
              A continuación escribe el nombre con el cual se va a registrar en la sala.
          </p>
          <form className="flex flex-col w-full items-center gap-2">
          <input
              type="text"
              className="w-1/2 p-2 rounded-md border border-gray-300 mt-3 text-black"
          />
          <button className="p-2 bg-green-400 w-24 text-black rounded-sm hover:bg-green-300">Ingresar</button>
          </form>
          <div className="w-full">
          <button onClick={() => setFirstTime(OPTIONS.NOTHING)} className=" text-start underline text-cyan-400 hover:text-[#11a3f1]">Atras</button>
          </div>
      </div>
      )}
    </div>
  );
}

export default MiddlewareStudent;
