import { z } from "zod"

export const Formulario110 = z.object({
  DatoPers: z.object({
    Anno: z.number(),
    NumForm: z.number(),
    DatDecl: z.object({
      NIT: z.number(),
      DV: z.number(),
      PriApll: z.string(),
      SecApll: z.string(),
      PriNomb: z.string(),
      OtrosNomb: z.string(),
      RazonSoc: z.string(),
      CodDir: z.string(),
      ActEcoPrin: z.string(),
      Correct: z.object({ Cod: z.number(), NoFormAnt: z.number() })
    }),
    FractAnnoAgrv: z.boolean(),
    RenunPertRegTribEsp: z.boolean(),
    VinPagObraImpu: z.boolean(),
    PerdFiscAcumAnnoAnt: z.number()
  }),
  DatosResum: z.object({
    DatosInf: z.object({
      TotalCostGastNom: z.number(),
      AportSistSegSocial: z.number(),
      AportSenaEtc: z.number()
    }),
    Patrim: z.object({
      EfectvEquiEfect: z.number(),
      InvInstFinDeriv: z.number(),
      CuentDocArreFinCob: z.number(),
      Inv: z.number(),
      ActivInt: z.number(),
      ActivBio: z.number(),
      PPEPANCMC: z.number(),
      Otro: z.number(),
      TotalBruto: z.number(),
      Pasiv: z.number(),
      TotalLiqui: z.number()
    }),
    Ingre: z.object({
      Brutos: z.number(),
      Finan: z.number(),
      DividNoCont: z.number(),
      DividDistrEntNoCol: z.number(),
      DividGravExt06: z.number(),
      DividGravNat06: z.number(),
      DividGravNat07: z.number(),
      DiviDNoGrav07: z.number(),
      DividGravExt07: z.number(),
      DividGravMega07: z.number(),
      Otro: z.number(),
      TotBruto: z.number(),
      DevRebDec: z.number(),
      IngNoRent: z.number(),
      Tot: z.number()
    }),
    CostDedic: z.object({
      Cost: z.number(),
      GastAdmin: z.number(),
      GastDistVent: z.number(),
      GastFinan: z.number(),
      Otro: z.number(),
      Tot: z.number()
    }),
    ESAL: z.object({ InvEfecAnno: z.number(), InvLiqui: z.number() }),
    Renta: z.object({
      RecuDedu: z.number(),
      Passiv: z.number(),
      LiquidOrd: z.number(),
      PerdidLiqui: z.number(),
      Compensacion: z.number(),
      RentLiquida: z.number(),
      RentPresun: z.number(),
      RentExenta: z.number(),
      RenGravable: z.number(),
      RenLiquida: z.number()
    }),
    GananciasOcasion: z.object({
      IngreGananOcasion: z.number(),
      RentDeudReg: z.number(),
      UtiliPerdFisc: z.number(),
      CostGananOcas: z.number(),
      GananOcasionNoAgrav: z.number(),
      GananOcasGrav: z.number()
    }),
    LiquiPriv: z.object({
      ImpuesRentLiquiGrav: z.object({
        RentLiquidGrav: z.number(),
        DivPartGravET00: z.number(),
        DivPartGravET: z.number(),
        DivPartGrav27: z.number(),
        DivPartGrav: z.number(),
        DivPartGrav33: z.number()
      }),
      TotImpRentLiquidGrav: z.number(),
      DescTrib: z.number(),
      ImpNetRent: z.number(),
      ImpGanOcas: z.number(),
      DescPorImpPagad: z.number(),
      TotImpCarg: z.number(),
      ValInvObraImp50: z.number(),
      DescEfectInvObrImp: z.number(),
      CredFisc: z.number(),
      AnticRentLiquidAnnoAntGrav: z.number(),
      SaldFavAnnoAntGrav: z.number(),
      Reten: z.object({
        AutoReten: z.number(),
        OtraReten: z.number(),
        TotReten: z.number()
      }),
      AntRenAnnoGravSig: z.number(),
      SobreInstFin: z.object({
        AnticSobreInstAnnoGranAnt: z.number(),
        SobreInstFinan: z.number(),
        AnticSobreInstAnnoGravSig: z.number()
      }),
      SaldoPagImp: z.number(),
      Sansion: z.number(),
      TotSaldPag: z.number(),
      TotSaldFav: z.number()
    })
  }),
  Totales: z.object({
    ValTotExiObrImpMod0: z.number(),
    ValTotProyObrImpMod2: z.number(),
    CodRepre: z.number(),
    CodCont: z.number(),
    Salvedad: z.boolean(),
    NoTarjProf: z.number(),
    PagoTot: z.number()
  })
})

export const Form110Input = {
  "DatoPers": {
    "Anno": 0,
    "NumForm": 0,
    "DatDecl": {
      "NIT": 0,
      "DV": 0,
      "PriApll": "",
      "SecApll": "",
      "PriNomb": "",
      "OtrosNomb": "",
      "RazonSoc": "",
      "CodDir": "",
      "ActEcoPrin": "",
      "Correct": {
        "Cod": 0,
        "NoFormAnt": 0
      }
    },
    "FractAnnoAgrv": false,
    "RenunPertRegTribEsp": false,
    "VinPagObraImpu": false,
    "PerdFiscAcumAnnoAnt": 0
  },
  "DatosResum": {
    "DatosInf": {
      "TotalCostGastNom": 0,
      "AportSistSegSocial": 0,
      "AportSenaEtc": 0
    },
    "Patrim": {
      "EfectvEquiEfect": 0,
      "InvInstFinDeriv": 0,
      "CuentDocArreFinCob": 0,
      "Inv": 0,
      "ActivInt": 0,
      "ActivBio": 0,
      "PPEPANCMC": 0,
      "Otro": 0,
      "TotalBruto": 0,
      "Pasiv": 0,
      "TotalLiqui": 0
    },
    "Ingre": {
      "Brutos": 0,
      "Finan": 0,
      "DividNoCont": 0,
      "DividDistrEntNoCol": 0,
      "DividGravExt06": 0,
      "DividGravNat06": 0,
      "DividGravNat07": 0,
      "DiviDNoGrav07": 0,
      "DividGravExt07": 0,
      "DividGravMega07": 0,
      "Otro": 0,
      "TotBruto": 0,
      "DevRebDec": 0,
      "IngNoRent": 0,
      "Tot": 0
    },
    "CostDedic": {
      "Cost": 0,
      "GastAdmin": 0,
      "GastDistVent": 0,
      "GastFinan": 0,
      "Otro": 0,
      "Tot": 0
    },
    "ESAL": {
      "InvEfecAnno": 0,
      "InvLiqui": 0
    },
    "Renta": {
      "RecuDedu": 0,
      "Passiv": 0,
      "LiquidOrd": 0,
      "PerdidLiqui": 0,
      "Compensacion": 0,
      "RentLiquida": 0,
      "RentPresun": 0,
      "RentExenta": 0,
      "RenGravable": 0,
      "RenLiquida": 0
    },
    "GananciasOcasion": {
      "IngreGananOcasion": 0,
      "RentDeudReg": 0,
      "UtiliPerdFisc": 0,
      "CostGananOcas": 0,
      "GananOcasionNoAgrav": 0,
      "GananOcasGrav": 0
    },
    "LiquiPriv": {
      "ImpuesRentLiquiGrav": {
        "RentLiquidGrav": 0,
        "DivPartGravET00": 0,
        "DivPartGravET": 0,
        "DivPartGrav27": 0,
        "DivPartGrav": 0,
        "DivPartGrav33": 0
      },
      "TotImpRentLiquidGrav": 0,
      "DescTrib": 0,
      "ImpNetRent": 0,
      "ImpGanOcas": 0,
      "DescPorImpPagad": 0,
      "TotImpCarg": 0,
      "ValInvObraImp50": 0,
      "DescEfectInvObrImp": 0,
      "CredFisc": 0,
      "AnticRentLiquidAnnoAntGrav": 0,
      "SaldFavAnnoAntGrav": 0,
      "Reten": {
        "AutoReten": 0,
        "OtraReten": 0,
        "TotReten": 0
      },
      "AntRenAnnoGravSig": 0,
      "SobreInstFin": {
        "AnticSobreInstAnnoGranAnt": 0,
        "SobreInstFinan": 0,
        "AnticSobreInstAnnoGravSig": 0
      },
      "SaldoPagImp": 0,
      "Sansion": 0,
      "TotSaldPag": 0,
      "TotSaldFav": 0
    }
  },
  "Totales": {
    "ValTotExiObrImpMod0": 0,
    "ValTotProyObrImpMod2": 0,
    "CodRepre": 0,
    "CodCont": 0,
    "Salvedad": false,
    "NoTarjProf": 0,
    "PagoTot": 0
  }
};