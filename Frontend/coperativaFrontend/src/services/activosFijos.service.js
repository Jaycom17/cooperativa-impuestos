import axios from './axios.service';

export const getActivosFijos = async () => axios.get("http://localhost:3000/activosfijos/student");

export const getActivosFijosStu = async (stuID, roomID) => axios.get(`http://localhost:3000/activosfijos/${stuID}/${roomID}`);

export const updateActivosFijos = async (actFij) => axios.put("http://localhost:3000/activosfijos/student", actFij);