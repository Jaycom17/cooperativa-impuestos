import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createRoom = async (room) => {
    try {
        const usuResult = await prisma.user.findUnique({ where: { usuID: room.usuID } });

<<<<<<< HEAD
=======
        const usuResult = await prisma.user.findUnique({ where: { usuID: room.usuID } });
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
        if (!usuResult) {
            return false;
        }
        console.log("Id usuario");
        console.log(room.roomName);
        const result = await prisma.room.create({
            data: {
                roomID: uuidv4(),
<<<<<<< HEAD
                roomPassword: room.roomPassword,
                roomDate: new Date(room.roomDate).toISOString(),
                roomStatus: room.roomStatus,
                usuID: room.usuID,
                roomName: room.roomName,
                roomAnswer: {}
=======
                roomName: room.roomName,
                roomPassword: encryptedPassword,
                roomDate: room.roomDate,
                roomStatus: room.roomStatus,
                roomAnswer: null,
                usuID: room.usuID
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
            }
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

<<<<<<< HEAD
export const listRoom = async (roomID) => {
=======
export const obtainRoom = async (roomID) => {
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
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

<<<<<<< HEAD
export const listRooms = async () => {
=======
export const obtainRooms = async () => {
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
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

<<<<<<< HEAD
export const dropRoom = async (roomID) => {
=======
export const removeRoom = async (roomDate) => {
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
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