
import axios from './axios.service.js'

export const validateRoom = async (room) => axios.post("http://localhost:3000/room/validate", room);

export const createRoom = async (room) => axios.post("http://localhost:3000/room", room)

export const getRooms = async () => axios.get("http://localhost:3000/room");

export const updateRoomState = async ( room, roomID ) => axios.put(`http://localhost:3000/room/${roomID}`,room);

export const updateRoom = async (room, roomID) => axios.put(`http://localhost:3000/room/update/${roomID}`, room);

export const getRoom = async(roomID) => axios.get(`http://localhost:3000/room/${roomID}`);

export const deleteRoom = async(roomID) => axios.delete(`http://localhost:3000/room/${roomID}`);