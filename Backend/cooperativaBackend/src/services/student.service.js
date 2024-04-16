import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createStudent = async (student) => {
    try {
        const result = await prisma.student.create({
            data: {
                estID: uuidv4(),
                estName: student.estName,
                roomId: 0
            }
        });
        console.log(result);
        return true;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const obtainStudent = async (estID) => {
    try {
        const result = await prisma.student.findUnique({
            where: {
                estID: estID
            }
        });

        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const obtainStudents = async () => {
    try {
        const result = await prisma.student.findMany();
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const updateStudent = async (student) => {
    try {
        const roomResult = await prisma.room.findUnique({
            where: {
                roomId: student.roomId
            }
        });
        if (!roomResult) {
            return false;
        }
        const result = await prisma.student.update({
            where: {
                estID: student.estID
            },
            data: {
                roomId: student.roomId
            }
        });
        if (!result) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const removeStudent = async (estID) => {
    try {
        const result = await prisma.student.delete({
            where: {
                estID: estID
            }
        });
        if (!result) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}
