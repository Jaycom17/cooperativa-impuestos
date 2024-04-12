import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createRoom = async (room) => {
    try {
        const encryptedPassword = await encrypt(room.roomPassword);
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