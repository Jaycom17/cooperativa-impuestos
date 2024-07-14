import { z } from "zod"

export const ImpuestoDiferido = z.object({
  ImpuestosDiferidosDiferenciasTemporarias: z.object({
    ActivoDiferido: z.object({
      EfectivoYEfectivoEquivalente: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      InversionesEInstrumentosDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      CuentasPorCobrar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Inventarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosIntangibles: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesDeInversion: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosBiologicos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      EntregarAPropietarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PasivosFinancierosYCuentasPorPagar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ImpuestosGravamenesYTasas: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      BeneficiosAEmpleados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Provisiones: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosPasivosAnticiposYAvancesRecibidos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OperacionesConTitulosYDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PerdidasFiscalesYExcesosDeRentaPresuntiva: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Fiscales: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosActivos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Total: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      })
    }),
    PasivoDiferido: z.object({
      EfectivoYEfectivoEquivalente: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      InversionesEInstrumentosDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      CuentasPorCobrar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Inventarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosIntangibles: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesDeInversion: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosBiologicos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      EntregarAPropietarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PasivosFinancierosYCuentasPorPagar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ImpuestosGravamenesYTasas: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      BeneficiosAEmpleados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Provisiones: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosPasivosAnticiposYAvancesRecibidos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OperacionesConTitulosYDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PerdidasFiscalesYExcesosDeRentaPresuntiva: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Fiscales: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosActivos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Total: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferido: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      })
    })
  }),
  ActivosCreditosTributos: z.object({
    SaldosFavor: z.object({
      Saldo31VigenciaActual: z.number(),
      Saldo31VigenciaAnterior: z.number(),
      Variacion: z.number(),
      ReduccionCompensacion: z.number(),
      CorreccionMayorValor: z.number(),
      CorreccionMenorValor: z.number(),
      AjusteMayorValor: z.number(),
      AjusteMenorValor: z.number()
    }),
    ImpuestosPagadosExterior: z.object({
      Saldo31VigenciaActual: z.number(),
      Saldo31VigenciaAnterior: z.number(),
      Variacion: z.number(),
      ReduccionCompensacion: z.number(),
      CorreccionMayorValor: z.number(),
      CorreccionMenorValor: z.number(),
      AjusteMayorValor: z.number(),
      AjusteMenorValor: z.number()
    })
  }),
  DetalleCompensacionPerdidasFiscales: z.array(
    z.object({
      Anio: z.number(),
      PerdidasFiscalesAcumuladasCompensarInicio: z.number(),
      PerdidaFiscalGeneradaPeriodo: z.number(),
      PerdidaFiscalCompensadaPeriodo: z.number(),
      ValoresNoCompesados: z.number(),
      AjustesMayorValor: z.number(),
      AjustesMenorValor: z.number(),
      PerdidaFiscalAcumuladaCompensarFinal: z.number(),
      SaldoActivoImpuestoDiferido: z.number()
    })
  ),
  DetalleCompensacionExcesoRentaPresuntiva: z.array(
    z.object({
      Anio: z.number(),
      ValorAcumuladoCompensarInicioPeriodo: z.number(),
      ValorGeneradoPeriodo: z.number(),
      ValorCompensadoPeriodo: z.number(),
      ValoresNoCompensados: z.number(),
      AjustesMayorValor: z.number(),
      AjustesMenorValor: z.number(),
      ValorAcumuladoCompensarFinalPerido: z.number(),
      SaldoActivoImpuestoDiferidoFinal: z.number()
    })
  )
})
