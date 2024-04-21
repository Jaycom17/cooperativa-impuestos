import {Student, Id} from '../models/student.model.js';

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
        const id = Id.parse(req.params);
        req.params = id;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIdB = async (req, res, next) => {
    try {
        const room = Id.parse(req.body);
        req.params = room;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}