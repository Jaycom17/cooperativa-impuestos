import axios from "./axios.service.js";

export const getAdminById = async (id) => {
  return await axios.get(`http://localhost:3000/user/${id}`);
};

export const updateAdmin = async (admin) => {
  return await axios.put(`http://localhost:3000/user/admin`, admin);
};
