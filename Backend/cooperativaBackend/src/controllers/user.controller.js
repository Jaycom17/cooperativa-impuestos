import {
  createUser,
  obtainProfessors,
  obtainAdmins,
  removeUser,
  updateUser
} from "../services/user.service.js";

export const postProfessor = async (req, res) => {
  const newUser = req.body;

  const result = await createUser({...newUser, usuRole: "profesor"});

  if (!result) {
    return res.status(500).json({ error: "No se pudo crear el usuario" });
  }

  res.status(200).json(result);
};


export const postAdmin = async (req, res) => {
  const newUser = req.body;

  const result = await createUser({...newUser, usuRole: "admin"});

  if (!result) {
    return res.status(500).json({ error: "No se pudo crear el usuario" });
  }

  res.status(200).json(result);
};

export const getProfessors = async (req, res) => {
  const result = await obtainProfessors();
  
  if(!result){
    return res.status(500).json({ error: "No se pudieron obtener los profesores" });
  }

  res.status(200).json(result);
};

export const getAdmins = async (req, res) => {
  const result = await obtainAdmins();
  
  if(!result){
    return res.status(500).json({ error: "No se pudieron obtener los administradores" });
  }

  res.status(200).json(result);
}

export const putProfessor = async (req, res) => {
  const { usuID } = req.params;
  const { usuName, usuEmail } = req.body;

  const user = { usuID, usuName, usuEmail, usuRole: "profesor" };

  const result = await updateUser(user);

  if (!result) {
    return res.status(500).json({ error: 'No se pudo actualizar el usuario' });
  }

  res.status(200).json(result);
};

export const putAdmin = async (req, res) => {
  const { usuID } = req.params;
  const { usuName, usuEmail } = req.body;

  const user = { usuID, usuName, usuEmail, usuRole: "admin" };

  const result = await updateUser(user);

  if (!result) {
    return res.status(500).json({ error: 'No se pudo actualizar el usuario' });
  }

  res.status(200).json(result);
}

export const getUser = async (req, res) => {
    const { usuID } = req.params;
    
    const result = await obtainUser(usuID);
    
    res.status(200).json(result);
};

export const deleteUser = async (req, res) => {
    const { usuID } = req.params;
    const result = await removeUser(usuID);

    if (!result) {
        return res.status(500).json({ error: 'No se pudo eliminar el usuario' });
    }  

  res.status(200).json(result);
};
