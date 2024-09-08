import prisma from '../../config/prisma.js';

export const getDetalleRengActivosFijos = async (detReng, student) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        actID: true,
      },
    });

    const actFij = await prisma.formactivosfijos.findUnique({
      where: {
        actID: res.actID,
      }
    });

    if (!actFij) {
      return { message: 'Formulario no encontrado' };
    }

    const content = actFij.actContent;
    
    
    detReng["R40"]["1510"].REFSaldCont = (content.ActivosIntangibles.MarcasComerciales.Contables.Comienzo.Costo || 0) + (content.ActivosIntangibles.MarcasComerciales.Contables.Incrementos.Transferencias || 0) - (content.ActivosIntangibles.MarcasComerciales.Contables.Disminuciones.Transferencias || 0);
    detReng["R40"]["1510"].REFSaldFisc = (content.ActivosIntangibles.MarcasComerciales.Fiscales.SaldoComienzo || 0) + (content.ActivosIntangibles.MarcasComerciales.Fiscales.IncrementosTransferencias || 0) - (content.ActivosIntangibles.MarcasComerciales.Fiscales.DisminucionesTransferencias || 0);
    detReng["R42"]["1779"]["ValCost"].REFSaldCont = (content.PropiedadesInversión.Terrenos.Contables.Comienzo.Costo || 0) + (content.PropiedadesInversión.Terrenos.Contables.Incrementos.Transferencias || 0) - (content.PropiedadesInversión.Terrenos.Contables.Disminuciones.Transferencias || 0);
    detReng["R42"]["1779"]["Reval"].REFSaldCont = (content.PropiedadesInversión.Terrenos.Contables.Comienzo.Ajuste || 0) + (content.PropiedadesInversión.Terrenos.Contables.Incrementos.CambiosValorRazonable || 0) - (content.PropiedadesInversión.Terrenos.Contables.Disminuciones.CambiosValorRazonable || 0);
    detReng["R42"]["1780"]["ValCost"].REFSaldCont = (content.PropiedadesInversión.Edificios.Contables.Comienzo.Costo || 0) + (content.PropiedadesInversión.Edificios.Contables.Incrementos.Transferencias || 0) - (content.PropiedadesInversión.Edificios.Contables.Disminuciones.Transferencias || 0);
    detReng["R42"]["1780"]["Reval"].REFSaldCont = (content.PropiedadesInversión.Edificios.Contables.Comienzo.Ajuste || 0) + (content.PropiedadesInversión.Edificios.Contables.Incrementos.CambiosValorRazonable || 0) - (content.PropiedadesInversión.Edificios.Contables.Disminuciones.CambiosValorRazonable || 0);
    detReng["R42"]["1788"]["ValCost"].REFSaldCont = (content.PropiedadesInversión.Terrenos.Contables.Depreciacion.Costo || 0) + (content.PropiedadesInversión.Edificios.Contables.Depreciacion.Costo || 0);
    detReng["R42"]["1788"]["Reval"].REFSaldCont = (content.PropiedadesInversión.Terrenos.Contables.Depreciacion.Ajuste || 0) + (content.PropiedadesInversión.Edificios.Contables.Depreciacion.Ajuste || 0);
    detReng["R42"]["1789"].REFSaldCont = (content.PropiedadesInversión.Terrenos.Contables.Deterioro || 0) + (content.PropiedadesInversión.Edificios.Contables.Deterioro);
    detReng["R42"]["1790"]["ValCost"].REFSaldCont = (content.ANCMV.ANCMV.Contables.Comienzo.Costo || 0) + (content.ANCMV.ANCMV.Contables.Incrementos.Transferencias || 0) - (content.ANCMV.ANCMV.Contables.Disminuciones.Transferencias || 0);
    detReng["R42"]["1790"]["ValCost"].REFSaldFisc = (content.ANCMV.ANCMV.Fiscales.SubtotalFinalPeriodo || 0)
    detReng["R42"]["1790"]["DeprAcum"].REFSaldCont = (content.ANCMV.ANCMV.Contables.Depreciacion.Costo || 0) + (content.ANCMV.ANCMV.Contables.Depreciacion.Conversion || 0) - (content.ANCMV.ANCMV.Contables.Depreciacion.Ajuste || 0);
    detReng["R42"]["1790"]["DeprAcum"].REFSaldFisc = (content.ANCMV.ANCMV.Fiscales.Depreciacion || 0);
    detReng["R42"]["1790"]["Det"].REFSaldCont = (content.ANCMV.ANCMV.Contables.Deterioro || 0);

    return detReng;

  } catch (e) {
    console.log(e);
  }
}