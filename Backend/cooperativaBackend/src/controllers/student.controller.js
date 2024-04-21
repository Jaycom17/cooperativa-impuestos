import {createStudent, obtainStudent, obtainStudents, removeStudent} from "../services/student.service.js"

export const postStudent = async (req, res) => {
    const {stuName} = req.body
    const student = {stuName}

    const result = await createStudent(student)

    if(!result){
        res.status(500).json({message: "Error al crear usuario"})
    }
    
    res.status(201).json(result)
}

export const getStudents = async (req, res) => {
    const result = await obtainStudents()

    res.status(201).json(result)
}

export const getStudent = async (req, res) => {
    const {stuId} = req.params
    const result = await obtainStudent(stuId)

    res.status(201).json(result)
}

export const putStudent = async (req, res) => {
    const {stuId} = req.params
    const {roomId} = req.body
    const room = {roomId}

    const result = await updateStudent(stuId, room)

    if(!result){
        res.status(500).json({message: "Error al actualizar usuario"})
    }

    res.status(201).json(result)
}

export const deleteStudent = async (req, res) => {
    const {stuId} = req.params
    const result = await removeStudent(stuId)

    if(!result){
        res.status(500).json({message: "Error al eliminar usuario"})
    }

    res.status(201).json(result)
}