import prisma from '../../config/prisma.js';

export const getForm110Caratula = async (form110, student) => {
    try {

        const res = await prisma.report.findFirst({
            where: {
                stuID: student.stuID,
                roomID: student.roomID,
            },
            select: {
                carID: true,
            },
        });

        const caratula = await prisma.formcaratula.findUnique({
            where: {
                carID: res.carID,
            }
        });

        if (!caratula) {
            return { message: 'Formulario no encontrado' };
        }

        const content = caratula.carContent;

        form110.DatoPers.DatDecl.RazonSoc = (content.DatDecl.RazonSoc || 0)

    } catch (e) {
        console.log(e);
    }
}