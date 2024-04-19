import { Room, Id, update } from '../models/room.model.js';

export const validateRoom = async (req, res, next) => {
    try {
        const room = Room.parse(req.body);
        req.body = room;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateId = async (req, res, next) => {
    try {
        const id = Id.parse(req.body);
        req.body = id;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}
export const validateUpdate = async (req, res, next) => {
    try {
        const updateRoom = update.parse(req.body);
        req.body = updateRoom;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}