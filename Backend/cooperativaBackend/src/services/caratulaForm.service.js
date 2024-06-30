import prisma from "../config/prisma.js";

export const createCaratula = async () => {
    try {
        const result = await prisma.formcaratula.create({
            data: {
                carID: uuidv4(),
                carContent: {}
            }
        });

        return result.carID;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const obtainCaratula = async (carID) => {
    try {
        const result = await prisma.formcaratula.findUnique({
            where: {
                carID: carID
            }
        });

        return result.carContent;
    } catch (error) {
        console.error(error);
        return false;
    }
}