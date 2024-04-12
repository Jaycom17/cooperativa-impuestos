import { User, Id, Login } from '../models/user.model.js';

export const validateUser = async (req, res, next) => {
    try {
        const user = User.parse(req.body);
        req.body = user;
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

export const validateLogin = async (req, res, next) => {
    try {
        const login = Login.parse(req.body);
        req.body = login;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}