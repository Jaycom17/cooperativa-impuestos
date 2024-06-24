import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createRoom = async (room) => {
    try {
        const encryptedPassword = await encrypt(room.roomPassword);

        const usuResult = await prisma.user.findUnique({ where: { usuID: room.usuID } });
        if (!usuResult) {
            return false;
        }
        const result = await prisma.room.create({
            data: {
                roomID: uuidv4(),
                roomName: room.roomName,
                roomPassword: encryptedPassword,
                roomDate: room.roomDate,
                roomStatus: room.roomStatus,
                roomAnswer: null,
                usuID: room.usuID
            }
        });
        console.log(result);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const obtainRoom = async (roomID) => {
    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID: roomID
            }
        });
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const obtainRooms = async () => {
    try {
        const result = await prisma.room.findMany();
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const updateRoom = async (room) => {
    try {
        console.log(room);
        const result = await prisma.room.update({
            where: {
                roomID: room.roomID
            },
            data: {
                roomDate: room.roomDate,
                roomStatus: room.roomStatus,
                usuID: room.usuID
            }
        });
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const removeRoom = async (roomDate) => {
    try {
        const startDate = new Date(`${roomDate}-01-01T00:00:00.000Z`);
        const endDate = new Date(`${roomDate}-12-31T23:59:59.999Z`);
        const delStuResult = await prisma.student.deleteMany({
            where: {
                room: {
                    roomDate: {
                        gte: startDate,
                        lte: endDate
                    }
                }
            }
        });
        console.log(delStuResult);
        const result = await prisma.room.deleteMany({
            where: {
                roomDate: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}