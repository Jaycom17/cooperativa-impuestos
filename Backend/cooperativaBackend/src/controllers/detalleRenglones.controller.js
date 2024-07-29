import { createDetalleRenglones, listDetalleRenglones, listDetalleRenglonesById, updateDetalleRenglones } from '../services/detalleRenglones.service.js';

export const getDetalleRenglones = async (req, res) => {
    const result = await listDetalleRenglones();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener los detalles renglones' });
    }

    res.json(result);
}

export const getDetalleRenglonesById = async (req, res) => {
    const student = req.body.student;

    const result = await listDetalleRenglonesById(student);

    if (!result) {
        return res.status(404).json({ error: 'Detalles renglones no encontrado' });
    }

    res.json(result);
}

export const postDetalleRenglones = async (req, res) => {
    const newDetalleRenglones = req.body;

    const result = await createDetalleRenglones(newDetalleRenglones);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear los detalles renglones' });
    }

    res.status(201).json(newDetalleRenglones);
}

export const putDetalleRenglones = async (req, res) => {
    const updatedDetalleRenglones = req.body;

    const student = req.body.student;

    delete updatedDetalleRenglones.student;

    const result = await updateDetalleRenglones(student, updatedDetalleRenglones);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar los detalles renglones' });
    }

    res.json(updatedDetalleRenglones);
}