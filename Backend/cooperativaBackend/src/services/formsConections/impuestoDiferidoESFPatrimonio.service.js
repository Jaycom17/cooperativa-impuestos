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

    //BASE FISCAL
    /**
     * TODO: corregir la parte de la base contable en la ternaria
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

  }catch(e){
    console.log(e);
  }
}