import { encrypt, compare } from "./encrypt.service.js";
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
                roomPassword: room.roomPassword,
                roomDate: new Date(room.roomDate).toISOString(),
                roomStatus: room.roomStatus,
                usuID: room.usuID,
                roomName: room.roomName,
                roomAnswer: {}
            }
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const listRoom = async (roomID) => {
    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID: roomID
            }
        });
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const listRooms = async () => {
    try {
        const result = await prisma.room.findMany();
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const updateRoom = async (room) => {
    try {
        const result = await prisma.room.update({
            where: {
                roomID: room.roomID
            },
            data: {
                roomDate: room.roomDate,
                roomStatus: room.roomStatus
            }
        });
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const dropRoom = async (roomID) => {
    try {
        const result = await prisma.room.delete({
            where: {
                roomID: roomID
            }
        });
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

export const validateRoomPassword = async (password) => {
    try {
        const result = await prisma.room.findUnique({
            select: {
                roomID: true
            },
            where: {
                roomPassword: password
            }
        });
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return { message: "Error al validar contraseña" };
    }
}