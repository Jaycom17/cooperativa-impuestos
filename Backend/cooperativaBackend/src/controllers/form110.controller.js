import { createFormulario110, listFormulario110, listFormulario110ById, updateFormulario110 } from '../services/form110.service.js';

export const getFormulario110 = async (req, res) => {
    const result = await listFormulario110();

    if (!result) {
        return res.status(500).json({ error: 'No se pudo obtener el formulario 110' });
    }

    res.json(result);
}

export const getFormulario110ById = async (req, res) => {
    const { r110ID } = req.params;

    const result = await listFormulario110ById(r110ID);

    if (!result) {
        return res.status(404).json({ error: 'Formulario 110 no encontrado' });
    }

    res.json(result);
}

export const postFormulario110 = async (req, res) => {
    const newFormulario110 = req.body;

    const result = await createFormulario110(newFormulario110);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el formulario 110' });
    }

    res.status(201).json(newFormulario110);
}

export const putFormulario110 = async (req, res) => {
    const { r110ID } = req.params;
    const updatedFormulario110 = req.body;

    const result = await updateFormulario110(r110ID, updatedFormulario110);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo actualizar el formulario 110' });
    }

    res.json(updatedFormulario110);
}