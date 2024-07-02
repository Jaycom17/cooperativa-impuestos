import {createStudent, obtainStudent, obtainStudents, removeStudent, updateStudent} from "../services/student.service.js"

export const postStudent = async (req, res) => {
    const {estName, roomId} = req.body
    const student = {estName, roomId}

    const result = await createStudent(student)

    if(!result){
        return res.status(500).json({message: "Error al crear usuario"})
    }
    
    res.status(201).json(result)
}

export const getStudents = async (_req, res) => {
    const result = await obtainStudents()

    res.status(201).json(result)
}

export const getStudent = async (req, res) => {
    const {stuID} = req.params
    const result = await obtainStudent(stuID)

    res.status(201).json(result)
}

export const putStudent = async (req, res) => {
    const {stuID} = req.params
    const {roomID} = req.body
    const result = await updateStudent({stuID, roomID})

    if(!result){
        return res.status(500).json({message: "Error al actualizar usuario"})
    }

    res.status(201).json(result)
}

export const deleteStudent = async (req, res) => {
    const {stuID} = req.params
    const result = await removeStudent(stuID)

    if(!result){
        return res.status(500).json({message: "Error al eliminar usuario"})
    }

    res.status(201).json(result)
}