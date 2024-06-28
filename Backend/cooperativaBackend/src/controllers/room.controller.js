import { createRoom, obtainRoom, obtainRooms, obtainRoomsByUser, updateRoom, updateRoomName, removeRoom, removeRoomByID } from "../services/room.service.js";

export const postRoom = async (req, res) => {
    const {roomName, roomPassword, roomDate, roomStatus, usuID } = req.body;
    const newRoom = {roomName, roomPassword, roomDate, roomStatus, usuID };

    const result = await createRoom(newRoom);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear la sala' });
    }

    res.status(201).json(newRoom);
};

export const getRoom = async (req, res) => {
    const { roomID } = req.params;
    const room = await obtainRoom(roomID);

    if (!room) {
        return res.status(500).json({ error: 'No se pudo obtener la sala' });
    }

    res.status(201).json(room);
}

export const getRooms = async (req, res) => {
    const rooms = await obtainRooms();

    if (!rooms) {
        return res.status(500).json({ error: 'No se pudo obtener las salas' });
    }

    res.status(201).json(rooms);
}

export const getRoomsByUser = async (req, res) => {
    const { usuID } = req.params;
    const rooms = await obtainRoomsByUser(usuID);

    if (!rooms) {
        return res.status(500).json({ error: 'No se pudo obtener las salas' });
    }

    res.status(201).json(rooms);
}

export const putRoom = async (req, res) => {
    const {roomID} = req.params;
    const {roomStatus} = req.body;
    const room = {roomID, roomStatus};
    console.log(room); 
    const result = await updateRoom(room);
    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar la sala' });
    }

    res.status(201).json(room);
}

export const putRoomName = async (req, res) => {
    const {roomID} = req.params;
    const {roomName, roomPassword} = req.body;
    const room = {roomID, roomName, roomPassword};
    console.log(room); 
    const result = await updateRoomName(room);
    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar la sala' });
    }

    res.status(201).json(room);
}

export const deleteRoom = async (req, res) => {
    const { roomDate } = req.body;
    const result = await removeRoom(roomDate);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo eliminar la sala' });
    }

    res.status(201).json(result);
}

export const deleteRoomByID = async (req, res) => {
    const { roomID } = req.params;
    const result = await removeRoomByID(roomID);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo eliminar la sala' });
    }

    res.status(201).json(result);
}