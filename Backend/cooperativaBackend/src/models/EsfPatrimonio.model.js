import { z } from "zod"

export const ESFPatrimonio =
z.object({
  Activos: z.object({
    ActivosEquivalentesEfectivo: z.object({
      Efectivo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      EquivalentesEfectivo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      EfectivoRestringido: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    InversionesInstrumentosFinancierosDerivadosVN: z.object({
      InversionesInstrumentosFinancierosDerivados: z.object({
        DerechosRecompraInversiones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InversionesSubsidiariasAsociadasNegociosConjuntos: z.object({
          ValorRazonableCambiosResultados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          ValorRazonableCambiosORI: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          MetodoParticipacion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          AlCosto: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          })
        }),
        InstrumentosDeudaCostoAmortizado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InstrumentosDeudaPatrimonioCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InstrumentosDeudaPatrimonioValorRazonableResultados: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InstrumentosDeudaPatrimonioValorRazonableORI: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InstrumentosFinancierosDerivadosNegociación: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InstrumentosFinancierosDerivadosCobertura: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DerechosFiduciarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Otros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      DeterioroAcumuladoInversiones: z.object({
        DerechosRecompraInversiones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InversionesSubsidiariasAsociadasNegociosConjuntos: z.object({
          Metodo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          })
        }),
        instrumentosDeudaCostoAmortizado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        InstrumentosDeudaPatrimoniooCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DerechosFiduciarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Otros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    CuentasComercialesCobrarOtrasPorCobrar: z.object({
      CuentasDocumentosPorCobrar: z.object({
        CarteraCreditoPrestamosBancarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasComercialesPorCobrar: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasPorCobrarAcuerdosConcesion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        ArrendamientoFinancieroOLeasingFinanciero: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DividendosParticipaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasPorCobrarSociosAccionistasParticipes: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        PrimasSegurosPorRecaudar: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CarteraDificilCobro: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        ReclamacionesPorCobrar: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AnticiposPagos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        OtrasCuentasDocumentosPorCobrar: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      DeterioroAcumuladoValorCuentasDocumentosCobrar: z.object({
        CarteraDeCredito: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasComercialesPorCobrar: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasPorCobrarAcuerdosConcesion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        ArrendamientoFinancieroLeasingFinanciero: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DividendosParticipaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasPorCobrarSociosAccionistasParticipes: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CuentasPorCobrarOtrasPartesRelacionadasAsociadas: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        OtrasCuentasPorCobrar: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    Inventarios: z.object({
      ParaLaVentaNoProducidosPorLaEmpresa: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      EnTransito: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      MateriasPrimasSuministrosMateriales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      CostosPrestadoresServicios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ObrasInmueblesConstruccionParaVenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ObrasInmueblesTerminadosParaVenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      InventarioSurgeActividadExtraccion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DeterioroAcumuladoValorInventarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    GastosPagadosPorAnticipado: z.object({
      Publicidad: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      PrimasSeguros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Arrendamientos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ActivosImpuestosCorrientes: z.object({
      SaldosaFavor: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      SaldosaFavorOtrosImpuestos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DescuentosTributarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      AnticiposyOtros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ActivosImpuestosDiferidos: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number()
    }),
    PropiedadesPlantaEquipo: z.object({
      Terrenos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ConstruccionesEnProceso: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Edificios: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AjusteAcumuladoRevaluacionesReexpresiones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      ActivosTangiblesExploracionEvaluacionRecursosMinerales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrasPropiedadesPlantaEquipo: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AjusteAcumuladoRevaluacionesReexpresiones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      DepreciacionAcumuladaPropiedadesPlantaEquipo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DeterioroAcumuladoPropiedadesPlantaEquipo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ActivosIntangibles: z.object({
      ActivosIntangiblesDistintosPlusvalia: z.object({
        AcuerdosConcesionActivoIntangible: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        ActivosIntangiblesExploracionEvaluacionRecursosMinerales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        MarcasPatentesLicenciasOtrosDerechos: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          AjusteAcumuladoRevaluacionesReexpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          })
        }),
        ArrendamientoFinanciero: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          AjusteAcumuladoRevaluacionesReexpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          })
        }),
        OtrosActivosIntangibles: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          AjusteAcumuladoRevaluacionesReexpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          })
        }),
        AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      PlusvaliaGoodwill: z.object({
        PlusvaliaGoodwill: z.object({
          AdquisicionEstablecimientoComercio: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          Fusiones: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          Escisiones: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          }),
          CompraAcciones: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number()
          })
        }),
        AmortizacionAcumuladaPlusvaliaGoodwill: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DeterioroAcumuladoPlusvaliaGoodwill: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    PropiedadesInversion: z.object({
      TerrenoEdificios: z.object({
        AlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AlValorRazonable: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      DepreciacionAcumuladaPropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DeterioroAcumuladoPropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ActivosNoCorrientes: z.object({
      MantenidosParaVenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DeterioroAcumuladoActivosCorrientesMantenidosParaVenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      MantenidosParaDistribuirPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DeterioroAcumuladoActivosCorrientesMantenidosParaDistribuirPropietarios: z.object(
        {
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }
      ),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ActivosBiologicos: z.object({
      AnimalesVivos: z.object({
        AnimalesProductoresMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AnimalesConsumiblesMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      PlantasProductorasCultivosConsumibles: z.object({
        PlantasProductorasMedidasAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DepreciacionAcumuladaDePlantasProductoras: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DeterioroAcumuladoDePlantasProductoras: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        PlantasProductorasMedidasAlValorRazonable: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CultivosConsumiblesMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    OtrosActivos: z.object({
      ActivosPlanBeneficiosEmpleados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrosActivos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ActivosReconocidosSolamenteFinesFiscales: z.object({
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    Total: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number()
    })
  }),
  Pasivos: z.object({
    ObligacionesFinancierasCuentasPorPagar: z.object({
      ObligacionesFinancierasEnMonedaLocal: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ObligacionesFinancierasEnMonedaExtranjera: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DepositosYExigibilidades: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      CuentasComercialesPorPagarEnMonedaLocal: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      CuentasComercialesPorPagarEnMonedaExtranjera: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DividendosYParticipacionesPorPagar: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      CuentasPorPagarASociosAccionistasOParticipes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      CuentasYDocumentosPorPagarAOtrasPartesRelacionadasYAsociadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      ReservaMatematicaYOTecnicaYOtrosPasivosExclusivosEnCompaniasDeSeguros: z.object(
        {
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number()
        }
      ),
      RecaudoAFavorDeTerceros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrasCuentasYDocumentosPorPagarEnMonedaLocal: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrasCuentasYDocumentosPorPagarEnMonedaExtranjera: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ArrendamientosPorPagar: z.object({
      FinancieroLeasingPartesNoRelacionadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      FinancieroLeasingPartesRelacionadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Operativo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    OtrosPasivosFinancieros: z.object({
      BonosYDocumentosEquivalentes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      InstrumentosFinancierosDerivados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      AccionesPreferencialesOAportesDeCapitalClasificadosComoPasivos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      DerechosFiduciarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrosPasivosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    ImpuestosGravamenesTasasPorPagar: z.object({
      ImpuestoRenta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      IVA: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Otrosimpuestos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    PasivosImpuestosDiferidos: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number()
    }),
    PasivosBeneficiosEmpleados: z.object({
      CortoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      LargoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      TerminacionVinculosLaborales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      PostEmpleo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    Provisiones: z.object({
      procesosLegalesLitigiosYDemandas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      mantenimientoYReparaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      obligacionesFiscales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      desmantelamientosRestauracionYRehabilitacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      garantias: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      contratosOnerosos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      reembolsosAClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      reestructuracionesDeNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      pasivosContingentesAsumidosEnUnaCombinacionDeNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      relacionadasConElMedioAmbiente: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      otrasProvisiones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    PasivosIngresosDiferidos: z.object({
      AnticiposYAvancesRecibidosDeClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      IngresosDiferidosPorProgramasDeFidelizacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      SubvencionesDelGobiernoYOtrasAyudas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrosPasivosPorIngresosDiferidos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    OtrosPasivos: z.object({
      DepositosRecibidos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      RetencionesATercerosSobreContratos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      EmbargosJudiciales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      CuentasEnParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      PasivoParaEjecucionDeExcedentesESAL: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      FondosSocialesMutualesYOtros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      OtrosPasivos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      PasivosReconocidosSolamenteParaFinesFiscales: z.object({
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
    }),
    Total: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number()
    })
  }),
  TotalPatrimonio: z.object({
    ValorContable: z.number(),
    EfectoConversion: z.number(),
    MenorValorFiscal: z.number(),
    MayorValorFiscal: z.number(),
    ValorFiscal: z.number()
  }),
  PatrimonioContable: z.object({
    CapitalSocialReservas: z.object({
      CapitalPagado: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      AccionesCuotasPartesInteresSocialPropiasCartera: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      AportesSociales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      CapitalAsignado: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      FondoSocialMutual: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      SuperavitCapital: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      Donaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      ReservasLegalesEstatutarias: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      ReservasOcasionales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      ReservasFondosEntidadesSolidarias: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      AsignacionesPermanentesRegimenTributarioEspecial: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      SuperavitRevaluaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      SuperavitMetodoParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosParticipacionesDecretadosAccionesCuotasPartesInteresSocial: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      SaldoCreditoInversionSuplementaria: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      SaldoDebitoInversionSuplementaria: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    ResultadoEjercicio: z.object({
      UtilidadOExcedenteDelEjercicioEnOperacionesContinuadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      UtilidadOExcedenteDelEjercicioEnOperacionesDiscontinuadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidaODeficitDelEjercicioEnOperacionesContinuadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidaODeficitDelEjercicioEnOperacionesDiscontinuadas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    ResultadosAcumulados: z.object({
      UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionATituloDeNoConstitutivoDeRentaNiGananciaOcasional: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionEnCalidadDeGravados: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      UtilidadesAcumuladasPorAjustesPorCorreccionDeErrores: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      UtilidadesPorAjustesPorCambiosEnPoliticasContables: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidasODeficitAcumulados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidasAcumuladasPorAjustesPorCorreccionesDeErrores: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidasPorAjustesPorCambiosEnPoliticasContables: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    GananciasPerdidasAcumuladasRetenidasAdopcionPrimera: z.object({
      GananciasPrimeraVez: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidasPrimeraVez: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    OtroResultadoIntegralAcumulado: z.object({
      AjustePositivoPorEfectoConversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      AjusteNegativoPorEfectoConversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      GananciasAcomuladasORI: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      PerdidasAcumuladasORI: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    Total: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number()
    })
  }),
  DatosInformativos: z.object({
    Activos: z.object({
      TotalIntereses: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      TotalActivos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      InventariosTerceros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      InventariosPoderTerceros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    Pasivos: z.object({
      TotalInteresespasivos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      TotalPasivos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      })
    }),
    RetencionFuenteTrasladableArt2421ET: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number()
    }),
    Patrimonio: z.object({
      DividendosGravadosDecretadosPeriodo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosNoGravadosDecretadosPeriodo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosGravadosPagadosPeriodo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosNoGravadosPagadosPeriodo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosGravadosPagadosPeriodoCargoUtilidades: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    })
  })
})


export const ESFPatrimonioinputs = {
  "Activos": {
    "ActivosEquivalentesEfectivo": {
      "Efectivo": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "EquivalentesEfectivo": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "EfectivoRestringido": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "InversionesInstrumentosFinancierosDerivadosVN": {
      "InversionesInstrumentosFinancierosDerivados": {
        "DerechosRecompraInversiones": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InversionesSubsidiariasAsociadasNegociosConjuntos": {
          "ValorRazonableCambiosResultados": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "ValorRazonableCambiosORI": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "MetodoParticipacion": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "AlCosto": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "InstrumentosDeudaCostoAmortizado": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosDeudaPatrimonioCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosDeudaPatrimonioValorRazonableResultados": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosDeudaPatrimonioValorRazonableORI": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosFinancierosDerivadosNegociación": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosFinancierosDerivadosCobertura": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DerechosFiduciarios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Otros": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "DeterioroAcumuladoInversiones": {
        "DerechosRecompraInversiones": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InversionesSubsidiariasAsociadasNegociosConjuntos": {
          "Metodo": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "Costo": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "instrumentosDeudaCostoAmortizado": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosDeudaPatrimoniooCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DerechosFiduciarios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Otros": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "CuentasComercialesCobrarOtrasPorCobrar": {
      "CuentasDocumentosPorCobrar": {
        "CarteraCreditoPrestamosBancarios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasComercialesPorCobrar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasPorCobrarAcuerdosConcesion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "ArrendamientoFinancieroOLeasingFinanciero": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DividendosParticipaciones": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasPorCobrarSociosAccionistasParticipes": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "PrimasSegurosPorRecaudar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CarteraDificilCobro": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "ReclamacionesPorCobrar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "AnticiposPagos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrasCuentasDocumentosPorCobrar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "DeterioroAcumuladoValorCuentasDocumentosCobrar": {
        "CarteraDeCredito": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasComercialesPorCobrar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasPorCobrarAcuerdosConcesion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "ArrendamientoFinancieroLeasingFinanciero": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DividendosParticipaciones": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasPorCobrarSociosAccionistasParticipes": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasPorCobrarOtrasPartesRelacionadasAsociadas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrasCuentasPorCobrar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "Inventarios": {
      "ParaLaVentaNoProducidosPorLaEmpresa": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "EnTransito": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "MateriasPrimasSuministrosMateriales": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "CostosPrestadoresServicios": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "ObrasInmueblesConstruccionParaVenta": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "ObrasInmueblesTerminadosParaVenta": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "InventarioSurgeActividadExtraccion": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "DeterioroAcumuladoValorInventarios": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "GastosPagadosPorAnticipado": {
      "Publicidad": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "PrimasSeguros": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Arrendamientos": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Otros": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "ActivosImpuestosCorrientes": {
      "SaldosaFavor": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "SaldosaFavorOtrosImpuestos": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "DescuentosTributarios" : {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "AnticiposyOtros" : {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "ActivosImpuestosDiferidos": {
      "ValorContable": 0,
      "EfectoConversion": 0,
      "MenorValorFiscal": 0
    },
    "PropiedadesPlantaEquipo": {
        "Terrenos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "ConstruccionesEnProceso": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Edificios": {
          "Costo": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "AjusteAcumuladoRevaluacionesReexpresiones": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "ActivosTangiblesExploracionEvaluacionRecursosMinerales": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrasPropiedadesPlantaEquipo": {
          "Costo": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "AjusteAcumuladoRevaluacionesReexpresiones": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "DepreciacionAcumuladaPropiedadesPlantaEquipo": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoPropiedadesPlantaEquipo": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
    },
    "ActivosIntangibles": {
        "ActivosIntangiblesDistintosPlusvalia": {
          "AcuerdosConcesionActivoIntangible": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "ActivosIntangiblesExploracionEvaluacionRecursosMinerales": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "MarcasPatentesLicenciasOtrosDerechos": {
            "Costo": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            },
            "AjusteAcumuladoRevaluacionesReexpresiones": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            }
          },
          "ArrendamientoFinanciero": {
            "Costo": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            },
            "AjusteAcumuladoRevaluacionesReexpresiones": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            }
          },
          "OtrosActivosIntangibles": {
            "Costo": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            },
            "AjusteAcumuladoRevaluacionesReexpresiones": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            }
          },
          "AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "Total": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "PlusvaliaGoodwill": {
          "PlusvaliaGoodwill": {
            "AdquisicionEstablecimientoComercio": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            },
            "Fusiones": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            },
            "Escisiones": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            },
            "CompraAcciones": {
              "ValorContable": 0,
              "EfectoConversion": 0,
              "MenorValorFiscal": 0,
              "MayorValorFiscal": 0,
              "ValorFiscal": 0
            }
          },
          "AmortizacionAcumuladaPlusvaliaGoodwill": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "DeterioroAcumuladoPlusvaliaGoodwill": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "Total": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
    },
    "PropiedadesInversion": {
        "TerrenoEdificios": {
          "AlCosto": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          },
          "AlValorRazonable": {
            "ValorContable": 0,
            "EfectoConversion": 0,
            "MenorValorFiscal": 0,
            "MayorValorFiscal": 0,
            "ValorFiscal": 0
          }
        },
        "DepreciacionAcumuladaPropiedadesInversion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoPropiedadesInversion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
    },
    "ActivosNoCorrientes": {
        "MantenidosParaVenta": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoActivosCorrientesMantenidosParaVenta": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "MantenidosParaDistribuirPropietarios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoActivosCorrientesMantenidosParaDistribuirPropietarios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
    },
    "ActivosBiologicos": {
      "AnimalesVivos": {
        "AnimalesProductoresMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "AnimalesConsumiblesMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "PlantasProductorasCultivosConsumibles": {
        "PlantasProductorasMedidasAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DepreciacionAcumuladaDePlantasProductoras": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoDePlantasProductoras": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "PlantasProductorasMedidasAlValorRazonable": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CultivosConsumiblesMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total":{
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "OtrosActivos": {
      "ActivosPlanBeneficiosEmpleados": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "OtrosActivos": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "ActivosReconocidosSolamenteFinesFiscales": {
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
    },
    "Total": {
      "ValorContable": 0,
      "EfectoConversion": 0,
      "MenorValorFiscal": 0,
      "MayorValorFiscal": 0,
      "ValorFiscal": 0
    }
  },
  "Pasivos": {
      "ObligacionesFinancierasCuentasPorPagar": {
        "ObligacionesFinancierasEnMonedaLocal": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "ObligacionesFinancierasEnMonedaExtranjera": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DepositosYExigibilidades": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasComercialesPorPagarEnMonedaLocal": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasComercialesPorPagarEnMonedaExtranjera": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DividendosYParticipacionesPorPagar": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasPorPagarASociosAccionistasOParticipes": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasYDocumentosPorPagarAOtrasPartesRelacionadasYAsociadas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "ReservaMatematicaYOTecnicaYOtrosPasivosExclusivosEnCompaniasDeSeguros": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "RecaudoAFavorDeTerceros": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrasCuentasYDocumentosPorPagarEnMonedaLocal": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrasCuentasYDocumentosPorPagarEnMonedaExtranjera": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "ArrendamientosPorPagar": {
        "FinancieroLeasingPartesNoRelacionadas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "FinancieroLeasingPartesRelacionadas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Operativo": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "OtrosPasivosFinancieros": {
        "BonosYDocumentosEquivalentes": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "InstrumentosFinancierosDerivados": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "AccionesPreferencialesOAportesDeCapitalClasificadosComoPasivos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "DerechosFiduciarios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrosPasivosFinancieros": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "ImpuestosGravamenesTasasPorPagar": {
        "ImpuestoRenta": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "IVA": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Otrosimpuestos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "PasivosImpuestosDiferidos": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0
      },
      "PasivosBeneficiosEmpleados": {
        "CortoPlazo": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "LargoPlazo": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "TerminacionVinculosLaborales": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "PostEmpleo": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "Provisiones": {
        "procesosLegalesLitigiosYDemandas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "mantenimientoYReparaciones": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "obligacionesFiscales": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "desmantelamientosRestauracionYRehabilitacion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "garantias": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "contratosOnerosos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "reembolsosAClientes": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "reestructuracionesDeNegocios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "pasivosContingentesAsumidosEnUnaCombinacionDeNegocios": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "relacionadasConElMedioAmbiente": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "otrasProvisiones": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "PasivosIngresosDiferidos": {
        "AnticiposYAvancesRecibidosDeClientes": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "IngresosDiferidosPorProgramasDeFidelizacion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "SubvencionesDelGobiernoYOtrasAyudas": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrosPasivosPorIngresosDiferidos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "OtrosPasivos": {
        "DepositosRecibidos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "RetencionesATercerosSobreContratos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "EmbargosJudiciales": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "CuentasEnParticipacion": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "PasivoParaEjecucionDeExcedentesESAL": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "FondosSocialesMutualesYOtros": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "OtrosPasivos": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "PasivosReconocidosSolamenteParaFinesFiscales": {
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        },
        "Total": {
          "ValorContable": 0,
          "EfectoConversion": 0,
          "MenorValorFiscal": 0,
          "MayorValorFiscal": 0,
          "ValorFiscal": 0
        }
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "MenorValorFiscal": 0,
        "MayorValorFiscal": 0,
        "ValorFiscal": 0
      }
  },
  "TotalPatrimonio":{
    "ValorContable": 0,
    "EfectoConversion": 0,
    "MenorValorFiscal": 0,
    "MayorValorFiscal": 0,
    "ValorFiscal": 0
  },
  "PatrimonioContable": {
    "CapitalSocialReservas": {
      "CapitalPagado": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "AccionesCuotasPartesInteresSocialPropiasCartera": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "AportesSociales": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "CapitalAsignado": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "FondoSocialMutual": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "SuperavitCapital": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "Donaciones": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "ReservasLegalesEstatutarias": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "ReservasOcasionales": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "ReservasFondosEntidadesSolidarias": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "AsignacionesPermanentesRegimenTributarioEspecial": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "SuperavitRevaluaciones": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "SuperavitMetodoParticipacion": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "DividendosParticipacionesDecretadosAccionesCuotasPartesInteresSocial": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "SaldoCreditoInversionSuplementaria": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "SaldoDebitoInversionSuplementaria": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    },
    "ResultadoEjercicio": {
      "UtilidadOExcedenteDelEjercicioEnOperacionesContinuadas": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "UtilidadOExcedenteDelEjercicioEnOperacionesDiscontinuadas": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidaODeficitDelEjercicioEnOperacionesContinuadas": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidaODeficitDelEjercicioEnOperacionesDiscontinuadas": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    },
    "ResultadosAcumulados": {
      "UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionATituloDeNoConstitutivoDeRentaNiGananciaOcasional": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionEnCalidadDeGravados": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "UtilidadesAcumuladasPorAjustesPorCorreccionDeErrores": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "UtilidadesPorAjustesPorCambiosEnPoliticasContables": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidasODeficitAcumulados": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidasAcumuladasPorAjustesPorCorreccionesDeErrores": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidasPorAjustesPorCambiosEnPoliticasContables": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    },
    "GananciasPerdidasAcumuladasRetenidasAdopcionPrimera": {
      "GananciasPrimeraVez": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidasPrimeraVez": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    },
    "OtroResultadoIntegralAcumulado": {
      "AjustePositivoPorEfectoConversion": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "AjusteNegativoPorEfectoConversion": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "GananciasAcomuladasORI": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "PerdidasAcumuladasORI": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "Total": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    },
    "Total": {
      "ValorContable": 0,
      "EfectoConversion": 0
    }
  },
  "DatosInformativos": {
    "Activos": {
      "TotalIntereses": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "TotalActivos": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "ValorFiscal": 0
      },
      "InventariosTerceros": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "InventariosPoderTerceros": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    },
    "Pasivos": {
      "TotalInteresespasivos": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "TotalPasivos": {
        "ValorContable": 0,
        "EfectoConversion": 0,
        "ValorFiscal": 0
      }
    },
    "RetencionFuenteTrasladableArt2421ET": {
      "ValorContable": 0,
      "EfectoConversion": 0
    },
    "Patrimonio": {
      "DividendosGravadosDecretadosPeriodo": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "DividendosNoGravadosDecretadosPeriodo": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "DividendosGravadosPagadosPeriodo": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "DividendosNoGravadosPagadosPeriodo": {
        "ValorContable": 0,
        "EfectoConversion": 0
      },
      "DividendosGravadosPagadosPeriodoCargoUtilidades": {
        "ValorContable": 0,
        "EfectoConversion": 0
      }
    }
  }
}

