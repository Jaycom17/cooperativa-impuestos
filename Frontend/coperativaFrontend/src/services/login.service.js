import axios from './axios.service.js';

export const login = async (user) => {
    try {
        const response = await axios.post("http://localhost:3000/login", { user });

        if (response.status === 200) {
            return true;
        }

        return false;
    } catch (error) {
        return false;
    }
}

export const profile = async (user) => {
    try {
        //const response = await axios.post("http://localhost:3001/api/login", { user });
        console.log(user);

        return true;
    } catch (error) {
        return error;
    }
}

export const logout = async (user) => {
    try {
        //const response = await axios.post("http://localhost:3001/api/login", { user });
        console.log(user);

        return true;
    } catch (error) {
        return error;
    }
}