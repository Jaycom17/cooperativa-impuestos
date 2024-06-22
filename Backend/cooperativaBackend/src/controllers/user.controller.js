import {
  createUser,
  obtainUsers,
  obtainUser,
  removeUser,
} from "../services/user.service.js";

export const postUser = async (req, res) => {
  const newUser = req.body;

  const result = await createUser(newUser);

  if (!result) {
    return res.status(500).json({ error: "No se pudo crear el usuario" });
  }

  res.status(201).json(newUser);
};

export const getUsers = async (req, res) => {
  const result = await obtainUsers();

  res.status(201).json(result);
};

export const getUser = async (req, res) => {
    const { usuId } = req.params;
    
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
