import { z } from "zod"

export const Caratula = z.object({
  Anno: z.number(),
  DatDecl: z.object({
    NIT: z.number(),
    DV: z.number(),
    PriApell: z.string(),
    SegunApell: z.string(),
    PriNomb: z.string(),
    OtrosNomb: z.string(),
    RazonSoc: z.string(),
    CodDir: z.string()
  }),
  Tarif: z.object({
    Art240: z.number(),
    Art2401: z.number(),
    Art194240360: z.number(),
    MegaInvHot: z.number(),
    MegaInv: z.number(),
    TarifGen: z.number()
  }),
  DatosInf: z.object({
    PerNatuSinRes: z.boolean(),
    ContrRegTriEsp: z.boolean(),
    EntCoop: z.boolean(),
    EntSecFin: z.boolean(),
    NueSoc: z.boolean(),
    ObrImp: z.boolean(),
    ProgReorEmp: z.boolean(),
    SocExtPresServ: z.boolean(),
    OblApl: z.boolean(),
    CostInvEstSis: z.boolean(),
    CostInvEstSim: z.boolean(),
    ProgTariImp: z.boolean(),
    ContrEstJur: z.boolean(),
    MonFuncDif: z.boolean(),
    MegInv: z.boolean(),
    EmpEcoNar: z.boolean(),
    CompHoldCol: z.boolean(),
    ZonaEcoSocEsp: z.boolean()
  }),
  NoIdSig: z.number(),
  CodRepre: z.number(),
  CodCont: z.number(),
  Salvedad: z.boolean(),
  NoTarjProf: z.number()
})

export const CaratulaInput = {
  "Anno": 1,
  "DatDecl": {
    "NIT": 1,
    "DV": 1,
    "PriApell": "",
    "SegunApell": "",
    "PriNomb": "",
    "OtrosNomb": "",
    "RazonSoc": "",
    "CodDir": ""
  },
  "Tarif": {
    "Art240": 1,
    "Art2401": 1,
    "Art194240360": 1,
    "MegaInvHot": 1,
    "MegaInv": 1,
    "TarifGen": 1
  },
  "DatosInf": {
    "PerNatuSinRes": true,
    "ContrRegTriEsp": true,
    "EntCoop": true,
    "EntSecFin": true,
    "NueSoc": true,
    "ObrImp": true,
    "ProgReorEmp": true,
    "SocExtPresServ": true,
    "OblApl": true,
    "CostInvEstSis": true,
    "CostInvEstSim": true,
    "ProgTariImp": true,
    "ContrEstJur": true,
    "MonFuncDif": true,
    "MegInv": true,
    "EmpEcoNar": true,
    "CompHoldCol": true,
    "ZonaEcoSocEsp": true
  },
  "NoIdSig": 1,
  "CodRepre": 1,
  "CodCont": 1,
  "Salvedad": true,
  "NoTarjProf": 1
}
