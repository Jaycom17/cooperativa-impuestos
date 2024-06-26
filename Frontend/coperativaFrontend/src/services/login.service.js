import axios from './axios.service.js';

export const login = async(user) => axios.post("http://localhost:3000/login", user);

export const profile = async () => axios.get("http://localhost:3000/login/profile");

export const logout = async () => axios.get("http://localhost:3000/login/logout");