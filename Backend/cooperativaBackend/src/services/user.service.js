import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

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
    console.log(result);
    return true;
  } catch (error) {
    console.error(error.ConnectorError);
    return false;
  }
}

export const obtainUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error.ConnectorError);
    return null;
  }
}

export const obtainUser = async (id) => {
  try {
    const result = await prisma.user.findUnique({ where: { usuID: id } });
    return result;
  } catch (error) {
    console.error(error.ConnectorError);
    return null;
  }
}

export const removeUser = async (id) => {
  try {
    const result = await prisma.user.delete({ where: { usuID: id } });
    console.log(result);
    return true;
  } catch (error) {
    console.error(error.ConnectorError);
    return false;
  }
}

export const loginUser = async (user) => {
  try {
    const result = await prisma.user.findUnique({ where: { usuEmail: user.usuEmail } });
    if (!result) return null;
    const passwordMatch = await compare(user.usuPassword, result.usuPassword);
    if (!passwordMatch) return null;
    return user.usuRole;
  } catch (error) {
    console.error(error.ConnectorError);
    return null;
  }
}