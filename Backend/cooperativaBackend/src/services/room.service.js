import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createRoom = async (room) => {
    try {
        const usuResult = await prisma.user.findUnique({ where: { usuID: room.usuID } });
        if (!usuResult) {
            return false;
        }
        const result = await prisma.room.create({
            data: {
                roomID: uuidv4(),
                roomName: room.roomName,
                roomPassword: room.roomPassword,
                roomDate: new Date(room.roomDate).toISOString(),
                roomStatus: room.roomStatus,
                roomAnswer: {},
                usuID: room.usuID
            }
        });

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
                roomDate: new Date(room.roomDate).toISOString(),
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
        const result = await prisma.room.deleteMany({
            where: {
                roomDate: {
                    startsWith: roomDate
                }
            }
        });
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const validateRoomPassword = async (password) => {
    try {
        const result = await prisma.room.findUnique({
            select: {
                roomID: true,
                roomPassword: true,
                roomStatus: true
            },
            where: {
                roomPassword: password
            }
        });

        if (!result) {
            return { message: "Contraseña incorrecta" };
        }

        if (result.roomStatus === "closed") {
            return { message: "La sala se encuentra cerrada" };
        }

        return { roomID: result.roomID, roomPassword: result.roomPassword };
    } catch (error) {
        console.error(error);
        return { message: "Error al validar contraseña" };
    }
}