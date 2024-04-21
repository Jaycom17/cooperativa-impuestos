import { createUser, obtainUsers, obtainUser, removeUser, loginUser} from "../services/user.service.js";

export const postUser = async (req, res) => {
    const { usuName, usuEmail, usuPassword, usuRole } = req.body;
    const newUser = { usuName, usuEmail, usuPassword, usuRole };

    const result = await createUser(newUser);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el usuario' });
    }

    res.status(201).json(newUser);
};

export const getUsers = async (req, res) => {
    const result = await obtainUsers();

    res.status(201).json(result);
};

export const getUser = async (req, res) => {
    const { usuId } = req.params;
    console.log("getuser id "+usuId);
    const result = await obtainUser(usuId);
    
    res.status(201).json(result);
};

export const deleteUser = async (req, res) => {
    const { usuId } = req.params;
    const result = await removeUser(usuId);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo eliminar el usuario' });
    }  

    res.status(201).json(result);
};

export const login = async (req, res) => {
    const { usuEmail, usuPassword } = req.body;
    const result = await loginUser({ usuEmail, usuPassword });

    if (result==null) {
        return res.status(500).json({ error: 'No se pudo Iniciar sesion' });
    }

    res.status(201).json(result);
};