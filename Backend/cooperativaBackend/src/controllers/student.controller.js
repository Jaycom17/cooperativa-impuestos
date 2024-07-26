import {
  createStudent,
  obtainStudent,
  obtainStudents,
  removeStudent,
  updateStudent,
  studentByCedula,
  obtainStudentByRoom
} from "../services/student.service.js";

export const postStudent = async (req, res) => {
  const { stuCedula, roomID } = req.body;
  const student = { stuCedula, roomID };

  const result = await createStudent(student);

  if (!result.token) {
    return res.status(500).json(result);
  }

  res.cookie("token", result.token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(201).json({ stuID: result.stuID, roomID: result.roomID });
};

export const getStudents = async (_req, res) => {
  const result = await obtainStudents();

  res.status(201).json(result);
};

export const getStudent = async (req, res) => {
  const { stuID } = req.params;
  const result = await obtainStudent(stuID);

  res.status(201).json(result);
};

export const putStudent = async (req, res) => {
  const { stuID } = req.params;
  const { roomID } = req.body;
  const result = await updateStudent({ stuID, roomID });

  if (!result) {
    return res.status(500).json({ message: "Error al actualizar usuario" });
  }

  res.status(201).json(result);
};

export const deleteStudent = async (req, res) => {
  const { stuID } = req.params;
  const result = await removeStudent(stuID);

  if (!result) {
    return res.status(500).json({ message: "Error al eliminar usuario" });
  }

  res.status(201).json(result);
};

export const searchStudentByCedula = async (req, res) => {
  const { stuCedula, roomID } = req.params;

  const result = await studentByCedula(stuCedula, roomID);

  if (result.message) {
    return res.status(500).json({ message: result.message });
  }

  res.cookie("token", result.token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(200).json({ stuID: result.stuID, roomID: result.roomID });
};

export const getStudentByRoom = async (req, res) => {
  const { roomID } = req.params;
  const result = await obtainStudentByRoom(roomID);

  if(result.message) {
    return res.status(500).json(result);
  }

  res.status(201).json(result);
}