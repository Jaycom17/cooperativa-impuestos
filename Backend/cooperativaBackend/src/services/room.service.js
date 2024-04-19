import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createRoom = async (room) => {
    try {
        const encryptedPassword = await encrypt(room.roomPassword);

        const usuResult = await prisma.user.findUnique({ where: { usuID: id } });
        if (!usuResult) {
            return false;
        }

        const result = await prisma.room.create({
            data: {
                roomID: uuidv4(),
                roomPassword: encryptedPassword,
                roomDate: room.roomDate,
                roomStatus: room.roomStatus,
                usuID: room.usuID
            }
        });
        console.log(result);
        return true;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

const getRoom = async (roomID) => {
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

const getRooms = async () => {
    try {
        const result = await prisma.room.findMany();
        return result;
    } catch (error) {
        console.error(error.ConnectorError);
        return false;
    }
}

const updateRoom = async (room) => {
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

const deleteRoom = async (roomID) => {
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