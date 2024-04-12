import { User } from '../models/user.model.js';

export const validateUser = async (req, res, next) => {
    try {
        const user = User.parse(req.body);
        req.body = user;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}