import { createUser, obtainUsers, obtainUser, removeUser, loginUser} from "../services/user.service.js";

export const postUser = async (req, res) => {
    const newUser = req.body;

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
    const { id } = req.body;
    const result = await obtainUser(id);
    
    res.status(201).json(result);
};

export const deleteUser = async (req, res) => {
    const { id } = req.body;
    const result = await removeUser(id);

    if (!result) {
        return res.status(500).json({ error: 'No se pudieron obtener el usuario' });
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