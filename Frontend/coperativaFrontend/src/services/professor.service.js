import axios from './axios.service.js';

export const getProfessors = async () => axios.get("http://localhost:3000/user/professor");

export const createProfessor = async (professor) => axios.post("http://localhost:3000/user/professor", professor);

export const updateProfessor = async (professor) => axios.put("http://localhost:3000/user/professor", professor);

export const deleteProfessor = async (professor) => axios.delete("http://localhost:3000/user/professor", { data: professor });

export const getProfessor = async (professor) => axios.get(`http://localhost:3000/user/${professor}`);