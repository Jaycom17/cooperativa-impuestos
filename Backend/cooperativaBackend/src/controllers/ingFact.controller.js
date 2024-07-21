import { createIngresosFacturaciones, listIngresosFacturaciones, listIngresosFacturacionesById, updateIngresosFacturaciones } from '../services/ingFact.service.js';

export const getIngresosFacturaciones = async (req, res) => {
    const result = await listIngresosFacturaciones();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener el formulario' });
    }

    res.json(result);
}

export const getIngresosFacturacionesById = async (req, res) => {
    const student = req.body.student;

    const result = await listIngresosFacturacionesById(student);

    if (!result) {
        return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.json(result);
}

export const postIngresosFacturaciones = async (req, res) => {
    const newIngresosFacturaciones = req.body;

    const result = await createIngresosFacturaciones(newIngresosFacturaciones);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el formulario' });
    }

    res.status(201).json(newIngresosFacturaciones);
}

export const putIngresosFacturaciones = async (req, res) => {

    const student = req.body.student;

    const updatedIngresosFacturaciones = req.body;

    delete updatedIngresosFacturaciones.student;

    const result = await updateIngresosFacturaciones(student, updatedIngresosFacturaciones);

    if (result.message) {
        return res.status(500).json({ error: result.message });
    }

    res.json(updatedIngresosFacturaciones);
}