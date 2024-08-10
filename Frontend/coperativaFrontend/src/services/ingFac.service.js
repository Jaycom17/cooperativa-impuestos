import axios from './axios.service';

export const getIngresosFacturacion = async () => axios.get("http://localhost:3000/ingFact/student");

export const getIngresosFacturacionStu = async (stuID, roomID) => axios.get(`http://localhost:3000/ingFact/${stuID}/${roomID}`);

export const updateIngresosFacturacion = async (ingFact) => axios.put("http://localhost:3000/ingFact/student", ingFact);