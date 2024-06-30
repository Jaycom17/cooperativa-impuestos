import axios from './axios.service.js'

export const validateRoom = async (room) => axios.post("http://localhost:3000/room/validate", room);