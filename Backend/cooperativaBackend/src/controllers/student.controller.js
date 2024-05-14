import {createStudent, obtainStudent, obtainStudents, removeStudent} from "../services/student.service.js"

export const postStudent = async (req, res) => {
    const {estName, roomId} = req.body
    const student = {estName, roomId}

    const result = await createStudent(student)

    if(!result){
        res.status(500).json({message: "Error al crear usuario"})
    }
    
    res.status(201).json(result)
}

export const getStudents = async (_req, res) => {
    const result = await obtainStudents()

    res.status(201).json(result)
}

export const getStudent = async (req, res) => {
    const {estId} = req.params
    const result = await obtainStudent(estId)

    res.status(201).json(result)
}

export const putStudent = async (req, res) => {
    const {estId} = req.params
    const {roomId} = req.body
    const room = {roomId}

    const result = await updateStudent(estId, room)

    if(!result){
        res.status(500).json({message: "Error al actualizar usuario"})
    }

    res.status(201).json(result)
}

export const deleteStudent = async (req, res) => {
    const {estId} = req.params
    const result = await removeStudent(estId)

    if(!result){
        res.status(500).json({message: "Error al eliminar usuario"})
    }

    res.status(201).json(result)
}