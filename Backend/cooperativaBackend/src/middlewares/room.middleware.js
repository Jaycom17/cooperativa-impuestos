import { Room } from '../models/room.model.js';

export const validateRoom = async (req, res, next) => {
    try {
        const room = Room.parse(req.body);
        req.body = room;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}