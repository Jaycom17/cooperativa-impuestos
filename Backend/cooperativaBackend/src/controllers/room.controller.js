import { createRoom, listRoom, listRooms, updateRoom, dropRoom, validateRoomPassword } from "../services/room.service.js";

export const postRoom = async (req, res) => {
    const { roomPassword, roomDate, roomStatus, usuID, roomName } = req.body;
    const newRoom = { roomPassword, roomDate, roomStatus, usuID, roomName };

    const result = await createRoom(newRoom);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear la sala' });
    }

    res.status(201).json(newRoom);
};

export const getRoom = async (req, res) => {
    const { id } = req.params;
    const room = await listRoom(id);

    if (!room) {
        return res.status(500).json({ error: 'No se pudo obtener la sala' });
    }

    res.status(201).json(room);
}

export const getRooms = async (req, res) => {
    const rooms = await listRooms();

    if (!rooms) {
        return res.status(500).json({ error: 'No se pudo obtener las salas' });
    }

    res.status(201).json(rooms);
}

export const putRoom = async (req, res) => {
    const {id} = req.params;
    const { roomDate, roomStatus} = req.body;
    const room = { id, roomDate, roomStatus};

    const result = await updateRoom(room);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar la sala' });
    }

    res.status(201).json(room);
}

export const deleteRoom = async (req, res) => {
    const { id } = req.params;
    const result = await dropRoom(id);

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