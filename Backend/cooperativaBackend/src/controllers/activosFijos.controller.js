import { createActivosFijos, listActivosFijos, listActivosFijosById, updateActivosFijos } from '../services/activosFijos.service.js';

export const getActivosFijos = async (req, res) => {
    const result = await listActivosFijos();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener los activos fijos' });
    }

    res.json(result);
}

export const getActivosFijosById = async (req, res) => {
    const { actID } = req.params;

    const result = await listActivosFijosById(actID);

    if (!result) {
        return res.status(404).json({ error: 'Activo fijo no encontrado' });
    }

    res.json(result);
}

export const postActivosFijos = async (req, res) => {
    const newActivosFijos = req.body;

    const result = await createActivosFijos(newActivosFijos);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el activo fijo' });
    }

    res.status(201).json(newActivosFijos);
}

export const putActivosFijos = async (req, res) => {
    const { actID } = req.params;
    const updatedActivosFijos = req.body;

    const result = await updateActivosFijos(actID, updatedActivosFijos);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar el activo fijo' });
    }

    res.json(updatedActivosFijos);
}