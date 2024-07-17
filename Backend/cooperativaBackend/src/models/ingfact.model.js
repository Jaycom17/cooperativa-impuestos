import { z } from "zod";

export const IngresosFacturacion = z.object({
  VentBien: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number(),
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number(),
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number(),
    }),
  }),
  PrestServ: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number(),
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number(),
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number(),
    }),
  }),
  OtrosIngresos: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number(),
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number(),
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number(),
    }),
  }),
  IngresosTer: z.object({
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number(),
    }),
    IngrContDevPer: z.object({ TotalIngrContDevPer: z.number() }),
  }),
  AjustesValAdec: z.object({
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number(),
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number(),
    }),
  }),
  Totales: z.object({
    PasivIngrDif: z.object({
      SaldoIniPer: z.number(),
      IngrContPer: z.number(),
      GenPer: z.number(),
      TotPasivDif: z.number(),
    }),
    FactEmitPer: z.object({
      DevIngrPerAnt: z.number(),
      DevIngrPerAct: z.number(),
      RegIngDif: z.number(),
      SoloFact: z.number(),
      TotFactEmiPEr: z.number(),
    }),
    IngrContDevPer: z.object({
      SinFact: z.number(),
      FactPerAnt: z.number(),
      TotalIngrContDevPer: z.number(),
    }),
  }),
});

export const IngresosFacturacionInput = {
  VentBien: {
    PasivIngrDif: {
      SaldoIniPer: 0,
      IngrContPer: 0,
      GenPer: 0,
      TotPasivDif: 0,
    },
    FactEmitPer: {
      DevIngrPerAnt: 0,
      DevIngrPerAct: 0,
      RegIngDif: 0,
      SoloFact: 0,
      TotFactEmiPEr: 0,
    },
    IngrContDevPer: {
      SinFact: 0,
      FactPerAnt: 0,
      TotalIngrContDevPer: 0,
    },
  },
  PrestServ: {
    PasivIngrDif: {
      SaldoIniPer: 0,
      IngrContPer: 0,
      GenPer: 0,
      TotPasivDif: 0,
    },
    FactEmitPer: {
      DevIngrPerAnt: 0,
      DevIngrPerAct: 0,
      RegIngDif: 0,
      SoloFact: 0,
      TotFactEmiPEr: 0,
    },
    IngrContDevPer: {
      SinFact: 0,
      FactPerAnt: 0,
      TotalIngrContDevPer: 0,
    },
  },
  OtrosIngresos: {
    PasivIngrDif: {
      SaldoIniPer: 0,
      IngrContPer: 0,
      GenPer: 0,
      TotPasivDif: 0,
    },
    FactEmitPer: {
      DevIngrPerAnt: 0,
      DevIngrPerAct: 0,
      RegIngDif: 0,
      SoloFact: 0,
      TotFactEmiPEr: 0,
    },
    IngrContDevPer: {
      SinFact: 0,
      FactPerAnt: 0,
      TotalIngrContDevPer: 0,
    },
  },
  IngresosTer: {
    FactEmitPer: {
      DevIngrPerAnt: 0,
      DevIngrPerAct: 0,
      RegIngDif: 0,
      SoloFact: 0,
      TotFactEmiPEr: 0,
    },
    IngrContDevPer: {
      TotalIngrContDevPer: 0,
    },
  },
  AjustesValAdec: {
    FactEmitPer: {
      DevIngrPerAnt: 0,
      DevIngrPerAct: 0,
      RegIngDif: 0,
      SoloFact: 0,
      TotFactEmiPEr: 0,
    },
    IngrContDevPer: {
      SinFact: 0,
      FactPerAnt: 0,
      TotalIngrContDevPer: 0,
    },
  },
  Totales: {
    PasivIngrDif: {
      SaldoIniPer: 0,
      IngrContPer: 0,
      GenPer: 0,
      TotPasivDif: 0,
    },
    FactEmitPer: {
      DevIngrPerAnt: 0,
      DevIngrPerAct: 0,
      RegIngDif: 0,
      SoloFact: 0,
      TotFactEmiPEr: 0,
    },
    IngrContDevPer: {
      SinFact: 0,
      FactPerAnt: 0,
      TotalIngrContDevPer: 0,
    },
  },
};
