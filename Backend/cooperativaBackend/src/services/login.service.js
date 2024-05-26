import { encrypt, compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { createAccessToken } from "./jwt.service.js";

export const studentLogin = async (student) => {};

export const loginUser = async (user) => {
  try {
    const result = await prisma.user.findUnique({
      where: { usuEmail: user.usuEmail },
    });
    
    if (!result) return { message: "Usuario o contraseña incorrectos" };

    const passwordMatch = await compare(user.usuPassword, result.usuPassword);

    if (!passwordMatch) return { message: "Usuario o contraseña incorrectos" };

    const token = await createAccessToken({ usuId: result.usuID });

    return { token };

  } catch (error) {
    return { message: "Error al iniciar sesión" };
  }
};
