import { createEsfPatrimonio, listEsfPatrimonio, listEsfPatrimonioById, updateEsfPatrimonio } from "../services/esfPatrimonio.service.js";

export const getEsfPatrimonio = async (req, res) => {
    const result = await listEsfPatrimonio();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener el formulario' });
    }

    res.json(result);
}

export const getEsfPatrimonioById = async (req, res) => {
    const student = req.body.student;

    const result = await listEsfPatrimonioById(student);

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const getEsfPatrimonioByStudent = async (req, res) => {
    const stuID = req.params.stuID;
    const roomID = req.params.roomID;

    const result = await listEsfPatrimonioById({ stuID, roomID });

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const postEsfPatrimonio = async (req, res) => {
    const newEsfPatrimonio = req.body;

    const result = await createEsfPatrimonio(newEsfPatrimonio);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el formulario' });
    }

    res.status(201).json(newEsfPatrimonio);
}

export const putEsfPatrimonio = async (req, res) => {

    const student = req.body.student;

    const updatedEsfPatrimonio = req.body;

    delete updatedEsfPatrimonio.student;

    const result = await updateEsfPatrimonio(student, updatedEsfPatrimonio);

    if (result.message) {
        return res.status(500).json({ error: result.message });
    }

    res.json(updatedEsfPatrimonio);
}