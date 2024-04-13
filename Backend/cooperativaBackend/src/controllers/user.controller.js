import { createUser } from "../services/user.service.js";

export const postUser = async (req, res) => {
    const newUser = req.body;

    const result = await createUser(newUser);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo crear el usuario' });
    }

    res.status(201).json(newUser);
};