import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_SECRET_STUDENT } from '../config/env.js';
import { createAccessToken } from '../services/jwt.service.js';

export const validateAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).json({ message: "No autorizado" });

        jwt.verify(token, JWT_SECRET, (error, user) => {
            if (error) return res.status(401).json({ message: "No autorizado" });

            req.body.user = user;

            next();
        });
    } catch (error) {
        res.status(400).json({ error: "Error al validar el usuario" });
    }
}

export const validateStudent = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).json({ message: "No autorizado" });

        jwt.verify(token, JWT_SECRET_STUDENT, (error, student) => {
            if (error) return res.status(401).json({ message: "No autorizado" });

            req.body.student = student;

            next();
        });
    } catch (error) {
        res.status(400).json({ error: "Error al validar el usuario" });
    }
}