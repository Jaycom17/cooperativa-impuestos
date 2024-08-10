import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listEsfPatrimonio = async () => {
  try {
    const result = await prisma.formesfpatrimonio.findMany();

    result.forEach((estPat) => {
        estPat.esfContent = JSON.parse(estPat.esfContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listEsfPatrimonioById = async (student) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        esfID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formesfpatrimonio.findUnique({
      where: {
        esfID: res.esfID,
      },
    });

    if (!result) {
      return { message: 'Formulario no encontrado' };
    } 

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createEsfPatrimonio = async (esfPat) => {
  try {
    const result = await prisma.formesfpatrimonio.create({
      data: {
        esfID: uuidv4(),
        esfContent: JSON.stringify(esfPat)
          .replace(/\n|\s/g, "")
          .replace(/"/g, "'"),
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateEsfPatrimonio = async (student, esfPat) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        esfID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }
    
    const result = await prisma.formesfpatrimonio.update({
      where: {
        esfID: res.esfID,
      },
      data: {
        esfContent: esfPat
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
