import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createStudent = async (student) => {
    try {
        
        const result = await prisma.student.create({
            data: {
<<<<<<< HEAD
                estID: uuidv4(),
                estName: student.estName,
                roomId: student.roomId
            }
        });

        await prisma.report.create({
            data: {
                repID: uuidv4(),
                estID: result.stuID,
                roomID: student.roomId,
=======
                stuID: uuidv4(),
                stuName: student.stuName,
                roomId: null
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
            }
        });
        console.log(result);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const obtainStudent = async (stuID) => {
    try {
        const result = await prisma.student.findUnique({
            where: {
                stuID: stuID
            }
        });

        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const obtainStudents = async () => {
    try {
        const result = await prisma.student.findMany();
        return result;
    } catch (error) {
        console.error(error);
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
                stuID: student.stuID
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
        console.error(error);
        return false;
    }
}

export const removeStudent = async (stuID) => {
    try {
        const result = await prisma.student.delete({
            where: {
                stuID: stuID
            }
        });
        if (!result) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

