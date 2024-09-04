import prisma from "../../config/prisma.js";

export const getImpuestoDifereridoDetalle = async (impDif, student) => {
  try {
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
      },
    });

    if (!detReg) {
      return { message: "Formulario no encontrado" };
    }

    const content = detReg.detContent;

    impDif.ActivosCreditosTributos.SaldosFavor.Saldo31VigenciaActual = content.R113.TotFisc;

    impDif.ActivosCreditosTributos.SaldosFavor.Saldo31VigenciaAnterior = content.R102.TotFisc;

    impDif.DetalleCompensacionPerdidasFiscales.Actual.PerdidasFiscalesAcumuladasCompensarInicio = content.R73.TotFisc;

    impDif.DetalleCompensacionPerdidasFiscales.Actual.PerdidaFiscalGeneradaPeriodo = content.R74.SaldFisc;

    impDif.DetalleCompensacionExcesoRentaPresuntiva.Actual.ValorGeneradoPeriodo = (content.R76.TotFisc > content.R75.TotFisc ? content.R76.TotFisc - content.R75.TotFisc: 0);

    return impDif;

  } catch (e) {
    console.log(e);
  }
};
