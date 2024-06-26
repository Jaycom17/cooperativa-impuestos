import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import { createAccessToken } from '../services/jwt.service.js';

export const validateAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).json({ message: "No autorizado" });

        jwt.verify(token, JWT_SECRET, (error, user) => {
            if (error) return res.status(401).json({ message: "No autorizado" });

            req.body.user = user;

            //TODO: revisar si esto funciona bien

            if (req.originalUrl === '/login/logout' || req.originalUrl === '/login/profile') return next();

            const auxToken = createAccessToken(user.usuID);

            res.cookie('token', auxToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            });

            //END TODO

            next();
        });
    } catch (error) {
        res.status(400).json({ error: "Error al validar el usuario" });
    }
}