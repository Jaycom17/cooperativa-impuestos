import axios from './axios.service.js';

export const getProfessors = async () => axios.get("http://localhost:3000/user/professor");

export const createProfessor = async (professor) => axios.post("http://localhost:3000/user/professor", professor);

export const updateProfessor = async (usuID,professor) => axios.put(`http://localhost:3000/user/professor/${usuID}`, professor);

export const deleteProfessor = async (usuID) => axios.delete(`http://localhost:3000/user/${usuID}`);

export const getProfessor = async (usuID) => axios.get(`http://localhost:3000/user/${usuID}`);