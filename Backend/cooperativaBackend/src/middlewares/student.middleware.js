import {Student, Id, roomId} from '../models/student.model.js';

export const validateStudent = async (req, res, next) => {
    try {
        const student = Student.parse(req.body);
        req.body = student;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIdP = async (req, res, next) => {
    try {
        const stuID = Id.parse(req.params);
        req.params = stuID;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIdB = async (req, res, next) => {
    try {
        const roomID = Id.parse(req.body);
        req.body = roomID;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateRoomId = async (req, res, next) => {
    try {
        const roomID = roomId.parse(req.body);
        req.body = roomID;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}