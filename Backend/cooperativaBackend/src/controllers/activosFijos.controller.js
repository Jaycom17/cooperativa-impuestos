import {
  createActivosFijos,
  listActivosFijos,
  listActivosFijosById,
  updateActivosFijos,
} from "../services/activosFijos.service.js";

export const getActivosFijos = async (_req, res) => {
  const result = await listActivosFijos();

  if (!result) {
    return res
      .status(500)
      .json({ error: "No se pudo obtener los activos fijos" });
  }

  res.json(result);
};

export const getActivosFijosById = async (req, res) => {
  const student = req.body.student;

  const result = await listActivosFijosById(student);

  if (!result) {
    return res.status(404).json({ error: "Activo fijo no encontrado" });
  }

  res.json(result);
};

export const getActivosFijosByStudent = async (req, res) => {
  const stuID = req.params.stuID;
  const roomID = req.params.roomID;

  const result = await listActivosFijosById({ stuID, roomID });

  if (!result) {
      return res.status(404).json({ error: 'Formulario no encontrado' });
  }
  res.json(result);
}

export const postActivosFijos = async (req, res) => {
  const newActivosFijos = req.body;

  const result = await createActivosFijos(newActivosFijos);

  if (!result) {
    return res.status(500).json({ error: "No se pudo crear el activo fijo" });
  }

  res.status(201).json(newActivosFijos);
};

export const putActivosFijos = async (req, res) => {
  const student = req.body.student;

  const updatedActivosFijos = req.body;

  delete updatedActivosFijos.student;

  const result = await updateActivosFijos(student, updatedActivosFijos);

  if (!result) {
    return res
      .status(500)
      .json({ error: "No se pudo actualizar el activo fijo" });
  }

  res.json(updatedActivosFijos);
};
