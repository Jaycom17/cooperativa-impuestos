import { createUser } from "../services/user.service.js";

export const postUser = async (req, res) => {
    const { usuName, usuEmail, usuPassword, usuRole } = req.body;
    const newUser = { usuName, usuEmail, usuPassword, usuRole };

    const result = await createUser(newUser);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el usuario' });
    }

    res.status(201).json(newUser);
};