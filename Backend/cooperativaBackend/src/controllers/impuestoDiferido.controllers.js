import { createImpuestoDiferido, listImpuestoDiferido, listImpuestoDiferidoById, updateImpuestoDiferido } from '../services/impuestoDiferido.service.js';

export const getImpuestoDiferido = async (req, res) => {
    const result = await listImpuestoDiferido();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener el formulario' });
    }

    res.json(result);
}

export const getImpuestoDiferidoById = async (req, res) => {
    const student = req.body.student;

    const result = await listImpuestoDiferidoById(student);

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const getImpuestoDiferidoByStudent = async (req, res) => {
    const stuID = req.params.stuID;
    const roomID = req.params.roomID;

    const result = await listImpuestoDiferidoById({ stuID, roomID });

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const postImpuestoDiferido = async (req, res) => {
    const newImpuestoDiferido = req.body;

    const result = await createImpuestoDiferido(newImpuestoDiferido);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el formulario' });
    }

    res.status(201).json(newImpuestoDiferido);
}

export const putImpuestoDiferido = async (req, res) => {

    const student = req.body.student;

    const updatedImpuestoDiferido = req.body;

    delete updatedImpuestoDiferido.student;

    const result = await updateImpuestoDiferido(student, updatedImpuestoDiferido);

    if (result.message) {
        return res.status(500).json({ error: result.message });
    }

    res.json(updatedImpuestoDiferido);
}