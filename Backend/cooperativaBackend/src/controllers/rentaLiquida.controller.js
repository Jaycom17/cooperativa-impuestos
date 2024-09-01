import { createRentaLiquida, listRentaLiquida, listRentaLiquidaById, updateRentaLiquida } from '../services/rentaLiquida.service.js';

export const getRentaLiquida = async (req, res) => {
    const result = await listRentaLiquida();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener el formulario' });
    }

    res.json(result);
}

export const getRentaLiquidaById = async (req, res) => {
    const student = req.body.student;

    const result = await listRentaLiquidaById(student);

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const getRentaLiquidaByStudent = async (req, res) => {
    const stuID = req.params.stuID;
    const roomID = req.params.roomID;

    const result = await listRentaLiquidaById({ stuID, roomID });

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const postRentaLiquida = async (req, res) => {
    const newRentaLiquida = req.body;

    const result = await createRentaLiquida(newRentaLiquida);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el formulario' });
    }

    res.status(201).json(newRentaLiquida);
}

export const putRentaLiquida = async (req, res) => {

    const student = req.body.student;

    const updatedRentaLiquida = req.body;

    delete updatedRentaLiquida.student;

    const result = await updateRentaLiquida(student, updatedRentaLiquida);

    if (result.message) {
        return res.status(500).json({ error: result.message });
    }

    res.json(updatedRentaLiquida);
}