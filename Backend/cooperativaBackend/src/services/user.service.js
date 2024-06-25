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
    console.log(result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const obtainUsers = async () => {
  try {
    console.log("get users");
    const result = await prisma.user.findMany();

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const obtainUser = async (usuId) => {
  try {
    console.log("Id ingresada " + usuId);
    const result = await prisma.user.findUnique({ where: { usuID: usuId } });
    console.log("get user");
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const removeUser = async (usuId) => {
  try {
    // Encontrar todas las salas asignadas al usuario
    const userRooms = await prisma.room.findMany({
      where: { usuID: usuId },
      include: { student: true }
    });

    // Verificar si el usuario tiene salas asignadas
    if (userRooms.length > 0) {
      // Eliminar estudiantes y salas asignadas al usuario
      for (const room of userRooms) {
        const roomId = room.roomID;

        // Verificar si la sala tiene estudiantes
        if (room.student.length > 0) {
          // Eliminar estudiantes asignados a la sala
          const deleteStudentsResult = await prisma.student.deleteMany({
            where: { roomID: roomId }
          });

          console.log(`Estudiantes eliminados en la sala ${roomId}: ${deleteStudentsResult.count}`);
        }

        // Eliminar la sala
        const deleteRoomResult = await prisma.room.delete({
          where: { roomID: roomId }
        });

        console.log(`Sala eliminada: ${deleteRoomResult.roomID}`);
      }
    }

    // Verificar si el usuario existe antes de eliminarlo
    const userExists = await prisma.user.findUnique({
      where: { usuID: usuId }
    });

    if (userExists) {
      // Eliminar el usuario
      const deleteUserResult = await prisma.user.delete({
        where: { usuID: usuId }
      });

      console.log(`Usuario eliminado: ${deleteUserResult.usuID}`);
      return true;
    } else {
      console.log(`Usuario con ID ${usuId} no existe.`);
      return false;
    }
    //console.log("id " + usuId);
    //const result = await prisma.user.delete({ where: { usuID: usuId } });
    //console.log(result);
  } catch (error) {
    console.error(error);
    return false;
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
