import axios from './axios.service.js'

export const createStudent = async (student) => axios.post("http://localhost:3000/student", student);

export const searchStudent = async (stuName, roomID) => axios.get(`http://localhost:3000/student/search/${stuName}/${roomID}`);

export const getStudentsByRoom = async (roomID) => axios.get(`http://localhost:3000/student/room/${roomID}`);