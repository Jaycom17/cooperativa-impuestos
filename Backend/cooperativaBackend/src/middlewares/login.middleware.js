import { Login } from '../models/user.model.js';

export const validateLogin = async (req, res, next) => {
    try {
        console.log(req.body)
        const login = Login.parse(req.body.user);
        console.log(login)
        req.body = login;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}