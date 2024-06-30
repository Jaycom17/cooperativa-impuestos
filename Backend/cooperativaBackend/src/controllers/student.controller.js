import {
  createStudent,
  obtainStudent,
  obtainStudents,
  removeStudent,
  studentByName
} from "../services/student.service.js";

export const postStudent = async (req, res) => {
    const {stuName, roomID} = req.body
    const student = {stuName, roomID}

    const result = await createStudent(student);

    if(!result.token){
        res.status(500).json({message: "Error al crear usuario"})
    }

    res.cookie('token', result.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    
    res.status(201).json({stuID: result.stuID, roomID: result.roomID})
}

export const getStudents = async (_req, res) => {
  const result = await obtainStudents();

  res.status(201).json(result);
};

export const getStudent = async (req, res) => {
  const { stuId } = req.params;
  const result = await obtainStudent(stuId);

  res.status(201).json(result);
};

export const putStudent = async (req, res) => {
  const { stuId } = req.params;
  const { roomID } = req.body;
  const room = { roomID };

  const result = await updateStudent(stuId, room);

  if (!result) {
    res.status(500).json({ message: "Error al actualizar usuario" });
  }

  res.status(201).json(result);
};

export const deleteStudent = async (req, res) => {
  const { stuId } = req.params;
  const result = await removeStudent(stuId);

  if (!result) {
    res.status(500).json({ message: "Error al eliminar usuario" });
    result;
  }

  res.status(201).json(result);
};

export const searchStudentByName = async (req, res) => {
  const { stuName, roomID } = req.params;

  const result = await studentByName(stuName, roomID);

  if (!result.token) {
    res.status(500).json({ message: "Error al buscar usuario" });
    return;
  }

  res.cookie("token", result.token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(201).json({ stuID: result.stuID, roomID: result.roomID});
}
