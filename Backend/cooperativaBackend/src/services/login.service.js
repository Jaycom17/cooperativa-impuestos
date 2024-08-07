import { compare } from "./encrypt.service.js";
import prisma from "../config/prisma.js";
import { createAccessToken } from "./jwt.service.js";

export const loginUser = async (user) => {
  try {
    const result = await prisma.user.findUnique({
      where: { usuEmail: user.usuEmail },
    });

    if (!result) return { message: "Usuario o contraseña incorrectos" };

    const passwordMatch = await compare(user.usuPassword, result.usuPassword);

    if (!passwordMatch) return { message: "Usuario o contraseña incorrectos" };

    const token = await createAccessToken({ usuID: result.usuID });

    return { usuID: result.usuID, usuEmail: result.usuEmail, usuName: result.usuName, usuRole: result.usuRole,  token };

  } catch (error) {
    console.error(error);
    return { message: "Error al iniciar sesión" };
  }
};

export const userProfile = async (usuId) => {
  try {
    const result = await prisma.user.findUnique({
      where: { usuID: usuId },
      select: {
        usuID: true,
        usuEmail: true,
        usuName: true,
        usuRole: true,
      },
    });

    return result;
  } catch (error) {
    return { message: "Error al obtener el perfil" };
  }
}
