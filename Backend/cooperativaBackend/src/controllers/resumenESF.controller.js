import { createResumenESF, listResumenESF, listResumenESFById, updateResumenESF } from '../services/resumenESF.service.js';

export const getResumenESF = async (req, res) => {
    const result = await listResumenESF();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener el formulario' });
    }

    res.json(result);
}

export const getResumenESFById = async (req, res) => {
    const student = req.body.student;

    const result = await listResumenESFById(student);

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const getResumenESFByStudent = async (req, res) => {
    const stuID = req.params.stuID;
    const roomID = req.params.roomID;

    const result = await listResumenESFById({ stuID, roomID });

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const postResumenESF = async (req, res) => {
    const newResumenESF = req.body;

    const result = await createResumenESF(newResumenESF);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el formulario' });
    }

    res.status(201).json(newResumenESF);
}

export const putResumenESF = async (req, res) => {

    const student = req.body.student;

    const updatedResumenESF = req.body;

    delete updatedResumenESF.student;

    const result = await updateResumenESF(student, updatedResumenESF);

    if (result.message) {
        return res.status(500).json({ error: result.message });
    }

    res.json(updatedResumenESF);
}