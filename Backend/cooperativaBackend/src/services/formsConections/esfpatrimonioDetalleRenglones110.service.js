import prisma from '../../config/prisma.js';

export const getESFRenglones110 = async (esfData, student) => {
  try{
    const res = await prisma.report.findFirst({
        where: {
          stuID: student.stuID,
          roomID: student.roomID,
        },
        select: {
            detID: true,
        },
    });

    const renglones110 = await prisma.formdetallerenglones.findUnique({
        where: {
            detID: res.detID,
        }
    });

    if (!renglones110) {
        return { message: 'Formulario no encontrado' };
    }

    const content = renglones110.detContent;

    esfData.Activos.ActivosEquivalentesEfectivo.EquivalentesEfectivo.ValorContable = content.R36["1140"].SaldCont;
    return esfData;

  }catch(e){
    console.log(e);
  }
}