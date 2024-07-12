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