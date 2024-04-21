import { ActivosFijos } from "../models/activosFijos.model.js";

export const validateActivosFijos = async (req, res, next) => {
    try {
        const activosFijos = ActivosFijos.parse(req.body);
        req.body = activosFijos;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}