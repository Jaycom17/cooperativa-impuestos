import { createCaratula, listCaratula, listCaratulaById, updateCaratula } from '../services/caratula.service.js';

export const getCaratula = async (req, res) => {
    const result = await listCaratula();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener las caratulas' });
    }

    res.json(result);
}

export const getCaratulaById = async (req, res) => {
    const { carID } = req.params;

    const result = await listCaratulaById(carID);

    if (!result) {
        return res.status(404).json({ error: 'Caratula no encontrado' });
    }

    res.json(result);
}

export const postCaratula = async (req, res) => {
    const newCaratula = req.body;

    const result = await createCaratula(newCaratula);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear la caratula' });
    }

    res.status(201).json(newCaratula);
}

export const putCaratula = async (req, res) => {
    const { carID } = req.params;
    const updatedCaratula = req.body;

    const result = await updateCaratula(carID, updatedCaratula);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar la caratula' });
    }

    res.json(updatedActivosFijos);
}