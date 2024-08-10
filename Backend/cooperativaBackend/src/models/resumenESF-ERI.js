import { z } from "zod";

export const ResumenESF = z.object({
  EstadoSituacionFinanciera: z.object({
    Activos: z.object({
      EfectivoEquivalentesEfectivo: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      InversionesInstrumentosFinancierosDerivados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      CuentasPorCobrar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      Inventarios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      GastosPagadosAnticipado: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ActivosImpuestosCorrientes: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ActivosImpuestosDiferidos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PropiedadesPlantaEquipo: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PropiedadesInversion: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ActivosNoCorrientesMantenidosVentaDistribuirPropietarios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      OtrosActivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      TotalActivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
    }),
    Pasivos: z.object({
      ObligacionesFinancierasCuentasPorPagar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ArrendamientosPorPagar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      OtrosPasivosFinancieros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ImpuestosGravamenesTasasPorPagar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PasivosImpuestosDiferidos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PasivosBeneficiosEmpleados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      Provisiones: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PasivosIngresosDiferidos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      OtrosPasivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      TotalPasivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
    }),
    Patrimonio: z.object({
      CapitalSocialReservas: z.object({ ValorContable: z.number() }),
      ResultadosEjercicio: z.object({ ValorContable: z.number() }),
      ResultadosAcumulados: z.object({ ValorContable: z.number() }),
      GananciasPerdidasAcumuladasAdopcionPrimera: z.object({
        ValorContable: z.number(),
      }),
      OtroResultadoIntegralAcumulado: z.object({ ValorContable: z.number() }),
      TotalPatrimonio: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
      }),
    }),
  }),
  EstadosResultadoIntegral: z.object({
    Ingresos: z.object({
      IngresosNetosActividadIndustrialComercialServicios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      DevolucionesRebajasDescuentos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      IngresosFinancieros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      GananciasInversionesSubsidiariasAsociadasNegociosConjuntos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      IngresosMedicionesValorRazonable: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      UtilidadVentaEnajenacionActivosMenos2Anios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      UtilidadVentaEnajenacionActivosMas2Anios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      IngresosReversionDeterioroValor: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      IngresosReversionProvisiones: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      IngresosReversionPasivosBeneficiosEmpleados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      OtrosIngresos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      GananciasNetasOperacionesDiscontinuadas: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      AjustesFiscales: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      IngresosNoGravados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      TotalIngresos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
    }),
    Costos: z.object({
      MateriasPrimasReventaBienesTerminadosServicios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      ManoDeObra: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      DepreciacionesAmortizacionesDeterioros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      OtrosCostos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      MenorCostoAjustePreciosTransferencia: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      TotalCostos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
    }),
    Gastos: z.object({
      Administracion: z.object({
        ManoDeObra: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
        OtrosGastosAdministracion: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
        DepreciacionesAmortizacionesDeterioros: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
        TotalGastosAdministracion: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
      }),
      DistribucionVentas: z.object({
        ManoDeObra: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
        OtrosGastosDistribucionVentas: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
        DepreciacionesAmortizacionesDeterioros: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
        TotalGastosDistribucionVentas: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number(),
        }),
      }),
      GastosFinancieros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PerdidasInversionesSubsidiariasAsociadasNegociosConjuntos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PerdidasMedicionesValorRazonable: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PerdidaVentaEnajenacionActivosFijos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      GastosProvisiones: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      OtrosGastos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      PerdidasNetasOperacionesDiscontinuadas: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      MenorGastoDeduccionAjustePreciosTransferencia: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
      TotalGastos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number(),
      }),
    }),
  }),
  ResultadoEjercicio: z.object({
    ValorContable: z.number(),
    ValorFiscal: z.number(),
    Variacion: z.number(),
  }),
});

export const ResumenESFInput = {
  EstadoSituacionFinanciera: {
    Activos: {
      EfectivoEquivalentesEfectivo: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      InversionesInstrumentosFinancierosDerivados: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      CuentasPorCobrar: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      Inventarios: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      GastosPagadosAnticipado: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ActivosImpuestosCorrientes: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ActivosImpuestosDiferidos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PropiedadesPlantaEquipo: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ActivosIntangibles: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PropiedadesInversion: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ActivosNoCorrientesMantenidosVentaDistribuirPropietarios: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ActivosBiologicos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      OtrosActivos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      TotalActivos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
    },
    Pasivos: {
      ObligacionesFinancierasCuentasPorPagar: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ArrendamientosPorPagar: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      OtrosPasivosFinancieros: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ImpuestosGravamenesTasasPorPagar: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PasivosImpuestosDiferidos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PasivosBeneficiosEmpleados: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      Provisiones: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PasivosIngresosDiferidos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      OtrosPasivos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      TotalPasivos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
    },
    Patrimonio: {
      CapitalSocialReservas: {
        ValorContable: 0,
      },
      ResultadosEjercicio: {
        ValorContable: 0,
      },
      ResultadosAcumulados: {
        ValorContable: 0,
      },
      GananciasPerdidasAcumuladasAdopcionPrimera: {
        ValorContable: 0,
      },
      OtroResultadoIntegralAcumulado: {
        ValorContable: 0,
      },
      TotalPatrimonio: {
        ValorContable: 0,
        ValorFiscal: 0,
      },
    },
  },
  EstadosResultadoIntegral: {
    Ingresos: {
      IngresosNetosActividadIndustrialComercialServicios: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      DevolucionesRebajasDescuentos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      IngresosFinancieros: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      GananciasInversionesSubsidiariasAsociadasNegociosConjuntos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      IngresosMedicionesValorRazonable: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      UtilidadVentaEnajenacionActivosMenos2Anios: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      UtilidadVentaEnajenacionActivosMas2Anios: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      IngresosReversionDeterioroValor: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      IngresosReversionProvisiones: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      IngresosReversionPasivosBeneficiosEmpleados: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      OtrosIngresos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      GananciasNetasOperacionesDiscontinuadas: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      AjustesFiscales: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      IngresosNoGravados: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      TotalIngresos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
    },
    Costos: {
      MateriasPrimasReventaBienesTerminadosServicios: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      ManoDeObra: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      DepreciacionesAmortizacionesDeterioros: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      OtrosCostos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      MenorCostoAjustePreciosTransferencia: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      TotalCostos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
    },
    Gastos: {
      Administracion: {
        ManoDeObra: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
        OtrosGastosAdministracion: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
        DepreciacionesAmortizacionesDeterioros: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
        TotalGastosAdministracion: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
      },
      DistribucionVentas: {
        ManoDeObra: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
        OtrosGastosDistribucionVentas: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
        DepreciacionesAmortizacionesDeterioros: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
        TotalGastosDistribucionVentas: {
          ValorContable: 0,
          ValorFiscal: 0,
          Variacion: 0,
        },
      },
      GastosFinancieros: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PerdidasInversionesSubsidiariasAsociadasNegociosConjuntos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PerdidasMedicionesValorRazonable: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PerdidaVentaEnajenacionActivosFijos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      GastosProvisiones: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      OtrosGastos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      PerdidasNetasOperacionesDiscontinuadas: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      MenorGastoDeduccionAjustePreciosTransferencia: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
      TotalGastos: {
        ValorContable: 0,
        ValorFiscal: 0,
        Variacion: 0,
      },
    },
  },
  ResultadoEjercicio: {
    ValorContable: 0,
    ValorFiscal: 0,
    Variacion: 0,
  },
};
