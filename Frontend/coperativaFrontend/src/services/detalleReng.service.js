import axios from "./axios.service.js";

export const updateForm = async (form) => {
  return await axios.put(`http://localhost:3000/detalleRenglones/student`, form);
};

export const getForm = async () => {
  return await axios.get(`http://localhost:3000/detalleRenglones/student`);
}