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

    const content = detReg.detContent;

    let rentKeys = Object.keys(renLiq.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer);

    Object.keys(content.R47.VentBien).forEach((key, index) => {
      renLiq.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer[rentKeys[index]].ValorContable = content.R47.VentBien[key].SaldCont;
    });

    Object.keys(content.R47.VentBien).forEach((key, index) => {
      renLiq.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer[rentKeys[index]].ValorContable = content.R47.VentBien[key].SaldCont;
    });

    console.log(content, renLiq)

  }catch(e){
    console.log(e);
  }
}