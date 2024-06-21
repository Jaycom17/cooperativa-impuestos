import { z } from "zod"

export const IngresosFacturacion = z.object({
  VentBien: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number()
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number()
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number()
    })
  }),
  PrestServ: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number()
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number()
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number()
    })
  }),
  OtrosIngresos: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number()
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number()
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number()
    })
  }),
  IngresosTer: z.object({
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number()
    }),
    IngrContDevPer: z.object({ TotalIngrContDevPer: z.number() })
  }),
  AjustesValAdec: z.object({
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number()
    }),
    IngrContDevPer: z.object({ TotalIngrContDevPer: z.number() })
  }),
  Totales: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number()
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number()
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number()
    })
  })
})
