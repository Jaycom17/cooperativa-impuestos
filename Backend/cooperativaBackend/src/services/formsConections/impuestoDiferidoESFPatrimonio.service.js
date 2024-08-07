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

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.EfectivoYEfectivoEquivalente.BaseContable =  (content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable - content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal) < 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable : 0;

    impDif.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.InversionesEInstrumentosDerivados.BaseContable =  (content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable - content.Activos.ActivosEquivalentesEfectivo.Total.ValorFiscal) < 0 ? content.Activos.ActivosEquivalentesEfectivo.Total.ValorContable : 0;

  }catch(e){
    console.log(e);
  }
}