import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listImpuestoDiferido = async () => {
  try {
    const result = await prisma.formimpuestodiferido.findMany();

    result.forEach((impDif) => {
        impDif.impContent = JSON.parse(impDif.impContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listImpuestoDiferidoById = async (student) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        impID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formimpuestodiferido.findUnique({
      where: {
        impID: res.impID,
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

export const createImpuestoDiferido = async (impDif) => {
  try {
    const result = await prisma.formimpuestodiferido.create({
      data: {
        impID: uuidv4(),
        impContent: JSON.stringify(impDif)
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

export const updateImpuestoDiferido = async (student, impDif) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        impID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }
    
    const result = await prisma.formimpuestodiferido.update({
      where: {
        impID: res.impID,
      },
      data: {
        impContent: impDif
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
