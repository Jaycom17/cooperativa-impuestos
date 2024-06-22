import axios from './axios.service.js';

export const login = async (user) => {
    try {
        const response = await axios.post("http://localhost:3000/login", { usuEmail: user.usuEmail, usuPassword: user.usuPassword });

        if (response.status === 200) {
            return response.data;
        }

        return null;
    } catch (error) {
        return null;
    }
}

export const profile = async () => {
    try {
        const response = await axios.get("http://localhost:3000/login/profile");

        return response.data;
    } catch (error) {
        return error;
    }
}

export const logout = async () => {
    try {
        const response = await axios.get("http://localhost:3000/login/logout");

        if (response.status === 200) {
            return true;
        }

        return false;
    } catch (error) {
        return error;
    }
}