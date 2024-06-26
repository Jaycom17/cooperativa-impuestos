import axios from './axios.service.js'

export const createStudent = async (student) => axios.post("http://localhost:3000/student", student);