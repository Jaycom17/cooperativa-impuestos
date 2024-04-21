import { Room, Id, updateRoom, Year } from '../models/room.model.js';

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
        const id = Id.parse(req.params);
        req.params = id;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIdBody = async (req, res, next) => {
    try {
        const id = Id.parse(req.body);
        req.body = id;
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
        const year = Year.parse(req.body);
        req.body = year;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}