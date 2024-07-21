import axios from "./axios.service.js";

export const getReport = async () => {
  return await axios.get(`http://localhost:3000/report`);
};
