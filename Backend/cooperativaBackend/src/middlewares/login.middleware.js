import { Login } from '../models/user.model.js';

export const validateLogin = async (req, res, next) => {
    try {
        const login = Login.parse(req.body);
        req.body = login;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}