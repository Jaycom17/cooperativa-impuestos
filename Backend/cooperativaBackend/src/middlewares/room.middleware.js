import { Room, Id, updateRoom, Date } from '../models/room.model.js';

export const validateRoom = async (req, res, next) => {
    try {
        const room = Room.parse(req.body);
        req.body = room;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIdParams = async (req, res, next) => {
    try {
        const roomId = Id.parse(req.params);
        req.params = roomId;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIdBody = async (req, res, next) => {
    try {
        const roomId = Id.parse(req.body);
        req.body = roomId;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateRoomUpdate = async (req, res, next) => {
    try {
        const room = updateRoom.parse(req.body);
        
        req.body = room;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}
export const validateYear = async (req, res, next) => {
    try {
        const roomDate = Date.parse(req.body);
        req.body = roomDate;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}