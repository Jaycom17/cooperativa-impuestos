import prisma from '../../config/prisma.js';

export const getRentaLiquitaDetalle = async (renLiq, student) => {
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

    const detReg = await prisma.formdetallerenglones.findUnique({
        where: {
            detID: res.detID,
        }
    });

    if (!detReg) {
        return { message: 'Formulario no encontrado' };
    }

    const content = JSON.parse(detReg.detContent);

    console.log(content, renLiq)

  }catch(e){
    console.log(e);
  }
}