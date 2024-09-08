import prisma from '../../config/prisma.js';

export const getDetalleRengImptoDif = async (detReng, student) => {
    try {
        const res = await prisma.report.findFirst({
            where: {
                stuID: student.stuID,
                roomID: student.roomID,
            },
            select: {
                impID: true,
            },
        });

        const impDif = await prisma.formimpuestodiferido.findUnique({
            where: {
                impID: res.impID,
            }
        });

        if (!impDif) {
            return { message: 'Formulario no encontrado' };
        }

        const content = impDif.impContent;
        detReng["R43"]["1860"].REFSaldCont = content.ImpuestosDiferidosDiferenciasTemporarias.ActivoDiferido.Total.SaldoImpuestoDiferidoActual || 0;
        detReng["R45"]["2826"].REFSaldCont = content.ImpuestosDiferidosDiferenciasTemporarias.PasivoDiferido.Total.SaldoImpuestoDiferidoActual || 0;
        
        return detReng;

    } catch (e) {
        console.log(e);
    }
}