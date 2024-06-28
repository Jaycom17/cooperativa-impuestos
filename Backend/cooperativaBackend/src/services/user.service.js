import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (user) => {
  try {
    const encryptedPassword = await encrypt(user.usuPassword);
    const result = await prisma.user.create({
      data: {
        usuID: uuidv4(),
        usuName: user.usuName,
        usuEmail: user.usuEmail,
        usuPassword: encryptedPassword,
        usuRole: user.usuRole
      }
    });
    return { usuID: result.usuID, usuName: result.usuName, usuEmail: result.usuEmail };
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const obtainProfessors = async () => {
  try {
    const result = await prisma.user.findMany({where: { usuRole: "profesor" }, select: { usuID: true, usuName: true, usuEmail: true }});
    
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const obtainAdmins = async () => {
  try {
    const result = await prisma.user.findMany({where: { usuRole: "admin" }, select: { usuID: true, usuName: true, usuEmail: true }});
    
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const obtainUser = async (usuId) => {
  try {
    const result = await prisma.user.findUnique({ where: { usuID: usuId }, select: { usuID: true, usuName: true, usuEmail: true }});
    
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const removeUser = async (usuId) => {
  try {
    console.log("id " + usuId);
    const result = await prisma.user.delete({ where: { usuID: usuId } });
    console.log(result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const updateUser = async (user) => {
  try {
    const encryptedPassword = await encrypt(user.usuPassword);

    const result = await prisma.user.update({
      where: {
        usuID: user.usuID
      },
      data: {
        usuName: user.usuName,
        usuEmail: user.usuEmail,
        usuPassword: encryptedPassword,
        usuRole: user.usuRole
      }
    });
    return result;
  } catch (error) {
    console.error(error);
    return { message: "Error al actualizar usuario"};
  }
}

export const loginUser = async (user) => {
  try {
    const result = await prisma.user.findUnique({ where: { usuEmail: user.usuEmail } });
    console.log(result);
    if (!result) return null;
    const passwordMatch = await compare(user.usuPassword, result.usuPassword);
    if (!passwordMatch) return null;
    console.log("passwordMatch");
    return result.usuRole;
  } catch (error) {
    console.error(error.ConnectorError);
    return null;
  }
}
