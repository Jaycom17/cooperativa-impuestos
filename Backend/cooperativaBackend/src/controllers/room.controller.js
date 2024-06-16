<<<<<<< HEAD
import { createRoom, listRoom, listRooms, updateRoom, dropRoom, validateRoomPassword } from "../services/room.service.js";

export const postRoom = async (req, res) => {
    const { roomPassword, roomDate, roomStatus, usuID, roomName } = req.body;
    const newRoom = { roomPassword, roomDate, roomStatus, usuID, roomName };
=======
import { createRoom, obtainRoom, obtainRooms, updateRoom, removeRoom } from "../services/room.service.js";

export const postRoom = async (req, res) => {
    const {roomName, roomPassword, roomDate, roomStatus, usuID } = req.body;
    const newRoom = {roomName, roomPassword, roomDate, roomStatus, usuID };
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad

    const result = await createRoom(newRoom);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear la sala' });
    }

    res.status(201).json(newRoom);
};

export const getRoom = async (req, res) => {
<<<<<<< HEAD
    const { id } = req.params;
    const room = await listRoom(id);
=======
    const { roomID } = req.params;
    const room = await obtainRoom(roomID);
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad

    if (!room) {
        return res.status(500).json({ error: 'No se pudo obtener la sala' });
    }

    res.status(201).json(room);
}

export const getRooms = async (req, res) => {
<<<<<<< HEAD
    const rooms = await listRooms();
=======
    const rooms = await obtainRooms();
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad

    if (!rooms) {
        return res.status(500).json({ error: 'No se pudo obtener las salas' });
    }

    res.status(201).json(rooms);
}

export const putRoom = async (req, res) => {
    const {roomID} = req.params;
    const { roomDate, roomStatus,usuID} = req.body;
    const room = { roomID, roomDate, roomStatus,usuID};
    console.log(room); 
    const result = await updateRoom(room);
    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar la sala' });
    }

    res.status(201).json(room);
}

export const deleteRoom = async (req, res) => {
<<<<<<< HEAD
    const { id } = req.params;
    const result = await dropRoom(id);
=======
    const { roomID } = req.params;
    const result = await removeRoom(roomID);
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad

    if (!result) {
        return res.status(500).json({ error: 'No se pudo eliminar la sala' });
    }

    res.status(201).json(result);
}

export const valRoomPassword = async (req, res) => {
    const { roomPassword } = req.body;
    const result = await validateRoomPassword(roomPassword);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo validar la contraseña de la sala' });
    }

    res.status(201).json(result);
}