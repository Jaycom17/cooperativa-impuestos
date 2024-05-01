import { z } from "zod"

export const schema = z.object({
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
