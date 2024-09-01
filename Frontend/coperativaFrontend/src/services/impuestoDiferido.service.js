import axios from './axios.service';

export const getImpuestoDiferido = async () => axios.get("http://localhost:3000/impuestoDiferido/student");

export const getImpuestoDiferidoStu = async (stuID, roomID) => axios.get(`http://localhost:3000/impuestoDiferido/${stuID}/${roomID}`);

export const updateImpuestoDiferido = async (impDif) => axios.put("http://localhost:3000/impuestoDiferido/student", impDif);