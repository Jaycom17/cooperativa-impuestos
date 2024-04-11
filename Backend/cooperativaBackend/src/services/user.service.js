import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (user) => {
  try{
  const encryptedPassword = await encrypt(user.usuPassword);
  const result = await prisma.user.create({
    data:{
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