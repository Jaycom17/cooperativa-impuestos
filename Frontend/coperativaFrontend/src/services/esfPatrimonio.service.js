import axios from './axios.service';

export const getEsfPatrimonio = async () => axios.get("http://localhost:3000/esfpatrimonio/student");

export const getEsfPatrimonioStu = async (stuID, roomID) => axios.get(`http://localhost:3000/esfpatrimonio/${stuID}/${roomID}`);

export const updateEsfPatrimonio = async (esfPatrimonio) => axios.put("http://localhost:3000/esfpatrimonio/student", esfPatrimonio);