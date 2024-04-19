import { z } from "zod"

export const ESFPatrimonio = z.object({
  ActivosPasivos: z.object({
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
            }),
            Total: z.object({
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
            }),
            Total: z.object({
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
          InstrumentosDeudaPatrimonioCosto: z.object({
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
      ActivosImpuestosDiferidos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
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
            }),
            Total: z.object({
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
            }),
            Total: z.object({
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
              }),
              Total: z.object({
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
              }),
              Total: z.object({
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
              }),
              Total: z.object({
                ValorContable: z.number(),
                EfectoConversion: z.number(),
                MenorValorFiscal: z.number(),
                MayorValorFiscal: z.number(),
                ValorFiscal: z.number()
              })
            }),
            AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia: z.object(
              {
                ValorContable: z.number(),
                EfectoConversion: z.number(),
                MenorValorFiscal: z.number(),
                MayorValorFiscal: z.number(),
                ValorFiscal: z.number()
              }
            ),
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
              }),
              Total: z.object({
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
          Total: z.object({})
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
            AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta: z.object(
              {
                ValorContable: z.number(),
                EfectoConversion: z.number(),
                MenorValorFiscal: z.number(),
                MayorValorFiscal: z.number(),
                ValorFiscal: z.number()
              }
            ),
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
            AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta: z.object(
              {
                ValorContable: z.number(),
                EfectoConversion: z.number(),
                MenorValorFiscal: z.number(),
                MayorValorFiscal: z.number(),
                ValorFiscal: z.number()
              }
            ),
            Total: z.object({})
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
            CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta: z.object(
              {
                ValorContable: z.number(),
                EfectoConversion: z.number(),
                MenorValorFiscal: z.number(),
                MayorValorFiscal: z.number(),
                ValorFiscal: z.number()
              }
            )
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
          CuentasYDocumentosPorPagarAOtrasPartesRelacionadasYAsociadas: z.object(
            {
              ValorContable: z.number(),
              EfectoConversion: z.number(),
              MenorValorFiscal: z.number(),
              MayorValorFiscal: z.number(),
              ValorFiscal: z.number()
            }
          ),
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
          AccionesPreferencialesOAportesDeCapitalClasificadosComoPasivos: z.object(
            {
              ValorContable: z.number(),
              EfectoConversion: z.number(),
              MenorValorFiscal: z.number(),
              MayorValorFiscal: z.number(),
              ValorFiscal: z.number()
            }
          ),
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
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number()
      })
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
        TotalIntereses: z.object({
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
})
