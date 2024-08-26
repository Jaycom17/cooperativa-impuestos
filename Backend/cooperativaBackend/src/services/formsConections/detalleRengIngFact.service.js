import prisma from '../../config/prisma.js';

export const getDetalleRengActivosFijos = async (detReng, student) => {
    try {
        const res = await prisma.report.findFirst({
            where: {
                stuID: student.stuID,
                roomID: student.roomID,
            },
            select: {
                ingID: true,
            },
        });

        const ingFact = await prisma.formingresosfancturacion.findUnique({
            where: {
                ingID: res.ingID,
            }
        });

        if (!ingFact) {
            return { message: 'Formulario no encontrado' };
        }

        const content = impDif.actContent;

        detReng[R43][2816].REFSaldCont = content.Totales.PasivIngrDif.TotPasivDif || 0;

    } catch (e) {
        console.log(e);
    }
}