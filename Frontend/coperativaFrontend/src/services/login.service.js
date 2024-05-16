import axios from "axios";

export const login = async (user) => {
    try {
        //const response = await axios.post("http://localhost:3001/api/login", { user });
        console.log(user);

        return true;
    } catch (error) {
        return error;
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