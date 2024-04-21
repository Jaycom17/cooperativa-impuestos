import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';

export const validateAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).json({ message: "No autorizado" });

        jwt.verify(token, JWT_SECRET, (error, user) => {
            if (error) return res.status(401).json({ message: "No autorizado" });

            req.user = user;

            next();
        });
    } catch (error) {
        res.status(400).json({ error: "Error al validar el usuario" });
    }
}