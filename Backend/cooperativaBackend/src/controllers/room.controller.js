import { createRoom } from "../services/room.service.js";

export const postRoom = async (req, res) => {
    const { roomPassword, roomDate, roomStatus, usuID } = req.body;
    const newRoom = { roomPassword, roomDate, roomStatus, usuID };

    const result = await createRoom(newRoom);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear la sala' });
    }

    res.status(201).json(newRoom);
};