import prisma from '../../config/prisma.js';

export const getImpuestoDiferidoESF = async (impDif, student) => {
  try{
    const res = await prisma.report.findFirst({
        where: {
          stuID: student.stuID,
          roomID: student.roomID,
        },
        select: {
            esfID: true,
        },
    });

    const esfPat = await prisma.formesfpatrimonio.findUnique({
        where: {
            esfID: res.esfID,
        }
    });

    if (!esfPat) {
        return { message: 'Formulario no encontrado' };
    }

    const content = esfPat.esfContent;

    /**
     * Activo Diferido
     */

    //BASE CONTABLE

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EfectivoYEfectivoEquivalente.BaseContable =  (content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable - content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal) < 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.InversionesEInstrumentosDerivados.BaseContable =  (content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable - content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal) < 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.CuentasPorCobrar.BaseContable =  (content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorContable - content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorFiscal) < 0 ? content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Inventarios.BaseContable =  (content.Activos.Inventarios.Total.ValorContable - content.Activos.Inventarios.Total.ValorFiscal) < 0 ? content.Activos.Inventarios.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PropiedadesPlantaYEquipo.BaseContable =  (content.Activos.PropiedadesPlantaEquipo.Total.ValorContable - content.Activos.PropiedadesPlantaEquipo.Total.ValorFiscal) < 0 ? content.Activos.PropiedadesPlantaEquipo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ActivosIntangibles.BaseContable =  (content.Activos.ActivosIntangibles.Total.ValorContable - content.Activos.ActivosIntangibles.Total.ValorFiscal) < 0 ? content.Activos.ActivosIntangibles.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PropiedadesDeInversion.BaseContable =  (content.Activos.PropiedadesInversion.Total.ValorContable - content.Activos.PropiedadesInversion.Total.ValorFiscal) < 0 ? content.Activos.PropiedadesInversion.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ActivosBiologicos.BaseContable =  (content.Activos.ActivosBiologicos.Total.ValorContable - content.Activos.ActivosBiologicos.Total.ValorFiscal) < 0 ? content.Activos.ActivosBiologicos.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EntregarAPropietarios.BaseContable =  (content.Activos.ActivosNoCorrientes.Total.ValorContable - content.Activos.ActivosNoCorrientes.Total.ValorFiscal) < 0 ? content.Activos.ActivosNoCorrientes.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PasivosFinancierosYCuentasPorPagar.BaseContable =  (content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorContable - content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorFiscal) < 0 ? content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ImpuestosGravamenesYTasas.BaseContable =  (content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorContable - content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorFiscal) < 0 ? content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.BeneficiosAEmpleados.BaseContable =  (content.Activos.PasivosBeneficiosEmpleados.Total.ValorContable - content.Activos.PasivosBeneficiosEmpleados.Total.ValorFiscal) < 0 ? content.Activos.PasivosBeneficiosEmpleados.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Provisiones.BaseContable =  (content.Activos.Provisiones.Total.ValorContable - content.Activos.Provisiones.Total.ValorFiscal) < 0 ? content.Activos.Provisiones.Total.ValorContable : 0;

    //Variables auxiliares Otros pasivos anticipos

    let auxOtrosPas1 = ( content.Pasivos.ArrendamientosPorPagar.Total.ValorContable + content.Pasivos.OtrosPasivosFinancieros.Total.ValorContable + content.Pasivos.PasivosIngresosDiferidos.Total.ValorContable + content.Pasivos.OtrosPasivos.Total.ValorContable );
    let auxOtrosPas2 = ( content.Pasivos.ArrendamientosPorPagar.Total.ValorFiscal + content.Pasivos.OtrosPasivosFinancieros.Total.ValorFiscal + content.Pasivos.PasivosIngresosDiferidos.Total.ValorFiscal + content.Pasivos.OtrosPasivos.Total.ValorFiscal );

    //BASE CONTABLE
    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.OtrosPasivosAnticiposYAvancesRecibidos.BaseContable = (auxOtrosPas1-auxOtrosPas2) > 0 ? auxOtrosPas1 : auxOtrosPas2; 

    //BASE FISCAL
    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.OtrosPasivosAnticiposYAvancesRecibidos.BaseFiscal = impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.OtrosPasivosAnticiposYAvancesRecibidos.BaseContable > 0 ? auxOtrosPas2 : 0;


    //Variables auxiliares Otros activos

    let auxOtrosAct1 = ( content.Activos.GastosPagadosPorAnticipado.Total.ValorContable + content.Activos.ActivosImpuestosCorrientes.Total.ValorContable + content.Activos.OtrosActivos.Total.ValorContable );
    let auxOtrosAct2 = ( content.Activos.GastosPagadosPorAnticipado.Total.ValorFiscal + content.Activos.ActivosImpuestosCorrientes.Total.ValorFiscal + content.Activos.OtrosActivos.Total.ValorFiscal );

    //BASE CONTABLE
    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.OtrosActivos.BaseContable = (auxOtrosAct1-auxOtrosAct2) > 0 ? auxOtrosAct1 : 0;

    //BASE FISCAL
    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.OtrosActivos.BaseFiscal = impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.OtrosActivos.BaseContable > 0 ? auxOtrosAct2 : 0;

    
    /**
     * BASE FISCAL
     */

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EfectivoYEfectivoEquivalente.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EfectivoYEfectivoEquivalente.BaseContable < 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.InversionesEInstrumentosDerivados.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.InversionesEInstrumentosDerivados.BaseContable < 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.CuentasPorCobrar.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.CuentasPorCobrar.BaseContable < 0 ? content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Inventarios.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Inventarios.BaseContable < 0 ? content.Activos.Inventarios.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PropiedadesPlantaYEquipo.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PropiedadesPlantaYEquipo.BaseContable < 0 ? content.Activos.PropiedadesPlantaEquipo.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ActivosIntangibles.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ActivosIntangibles.BaseContable < 0 ? content.Activos.ActivosIntangibles.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PropiedadesDeInversion.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PropiedadesDeInversion.BaseContable < 0 ? content.Activos.PropiedadesInversion.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ActivosBiologicos.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ActivosBiologicos.BaseContable < 0 ? content.Activos.ActivosBiologicos.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EntregarAPropietarios.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EntregarAPropietarios.BaseContable < 0 ? content.Activos.ActivosNoCorrientes.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PasivosFinancierosYCuentasPorPagar.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.PasivosFinancierosYCuentasPorPagar.BaseContable < 0 ? content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ImpuestosGravamenesYTasas.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.ImpuestosGravamenesYTasas.BaseContable < 0 ? content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.BeneficiosAEmpleados.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.BeneficiosAEmpleados.BaseContable < 0 ? content.Activos.PasivosBeneficiosEmpleados.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Provisiones.BaseFiscal = impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Provisiones.BaseContable < 0 ? content.Activos.Provisiones.Total.ValorFiscal : 0;

    /**
     * Pasivos Diferidos
     */

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.EfectivoYEfectivoEquivalente.BaseContable =  (content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable - content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal) > 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.InversionesEInstrumentosDerivados.BaseContable =  (content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable - content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal) > 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.CuentasPorCobrar.BaseContable =  (content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorContable - content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorFiscal) > 0 ? content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Inventarios.BaseContable =  (content.Activos.Inventarios.Total.ValorContable - content.Activos.Inventarios.Total.ValorFiscal) > 0 ? content.Activos.Inventarios.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PropiedadesPlantaYEquipo.BaseContable =  (content.Activos.PropiedadesPlantaEquipo.Total.ValorContable - content.Activos.PropiedadesPlantaEquipo.Total.ValorFiscal) > 0 ? content.Activos.PropiedadesPlantaEquipo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ActivosIntangibles.BaseContable =  (content.Activos.ActivosIntangibles.Total.ValorContable - content.Activos.ActivosIntangibles.Total.ValorFiscal) > 0 ? content.Activos.ActivosIntangibles.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PropiedadesDeInversion.BaseContable =  (content.Activos.PropiedadesInversion.Total.ValorContable - content.Activos.PropiedadesInversion.Total.ValorFiscal) > 0 ? content.Activos.PropiedadesInversion.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ActivosBiologicos.BaseContable =  (content.Activos.ActivosBiologicos.Total.ValorContable - content.Activos.ActivosBiologicos.Total.ValorFiscal) > 0 ? content.Activos.ActivosBiologicos.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.EntregarAPropietarios.BaseContable =  (content.Activos.ActivosNoCorrientes.Total.ValorContable - content.Activos.ActivosNoCorrientes.Total.ValorFiscal) > 0 ? content.Activos.ActivosNoCorrientes.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PasivosFinancierosYCuentasPorPagar.BaseContable =  (content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorContable - content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorFiscal) > 0 ? content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ImpuestosGravamenesYTasas.BaseContable =  (content.Activos.ImpuestosGrav<amenesTasasPorPagar.Total.ValorContable - content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorFiscal) > 0 ? content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.BeneficiosAEmpleados.BaseContable =  (content.Activos.PasivosBeneficiosEmpleados.Total.ValorContable - content.Activos.PasivosBeneficiosEmpleados.Total.ValorFiscal) > 0 ? content.Activos.PasivosBeneficiosEmpleados.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Provisiones.BaseContable =  (content.Activos.Provisiones.Total.ValorContable - content.Activos.Provisiones.Total.ValorFiscal) > 0 ? content.Activos.Provisiones.Total.ValorContable : 0;

    //BASE FISCAL
    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.OtrosPasivosAnticiposYAvancesRecibidos.BaseFiscal = impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.OtrosPasivosAnticiposYAvancesRecibidos.BaseContable > 0 ? auxOtrosPas2 : 0;

    //BASE CONTABLE
    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.OtrosActivos.BaseContable = (auxOtrosAct1-auxOtrosAct2) > 0 ? auxOtrosAct1 : 0;

    //BASE FISCAL
    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.OtrosActivos.BaseFiscal = impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.OtrosActivos.BaseContable > 0 ? auxOtrosAct2 : 0;

    
    /**
     * BASE FISCAL
     */

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.EfectivoYEfectivoEquivalente.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.EfectivoYEfectivoEquivalente.BaseContable > 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.InversionesEInstrumentosDerivados.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.InversionesEInstrumentosDerivados.BaseContable > 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.CuentasPorCobrar.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.CuentasPorCobrar.BaseContable > 0 ? content.Activos.CuentasComercialesCobrarOtrasPorCobrar.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Inventarios.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Inventarios.BaseContable > 0 ? content.Activos.Inventarios.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PropiedadesPlantaYEquipo.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PropiedadesPlantaYEquipo.BaseContable > 0 ? content.Activos.PropiedadesPlantaEquipo.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ActivosIntangibles.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ActivosIntangibles.BaseContable > 0 ? content.Activos.ActivosIntangibles.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PropiedadesDeInversion.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PropiedadesDeInversion.BaseContable > 0 ? content.Activos.PropiedadesInversion.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ActivosBiologicos.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ActivosBiologicos.BaseContable > 0 ? content.Activos.ActivosBiologicos.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.EntregarAPropietarios.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.EntregarAPropietarios.BaseContable > 0 ? content.Activos.ActivosNoCorrientes.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PasivosFinancierosYCuentasPorPagar.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.PasivosFinancierosYCuentasPorPagar.BaseContable > 0 ? content.Activos.ObligacionesFinancierasCuentasPorPagar.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ImpuestosGravamenesYTasas.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.ImpuestosGravamenesYTasas.BaseContable > 0 ? content.Activos.ImpuestosGravamenesTasasPorPagar.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.BeneficiosAEmpleados.BaseFiscal =  impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.BeneficiosAEmpleados.BaseContable > 0 ? content.Activos.PasivosBeneficiosEmpleados.Total.ValorFiscal : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Provisiones.BaseFiscal = impDif.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Provisiones.BaseContable > 0 ? content.Activos.Provisiones.Total.ValorFiscal : 0;

    return impDif;

  }catch(e){
    console.log(e);
  }
}