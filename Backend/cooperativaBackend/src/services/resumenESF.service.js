import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listResumenESF = async () => {
  try {
    const result = await prisma.formresumenesferi.findMany();

    result.forEach((resESF) => {
        resESF.resContent = JSON.parse(resESF.resContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listResumenESFById = async (student) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        resID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formresumenesferi.findUnique({
      where: {
        resID: res.resID,
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

export const createResumenESF = async (resESF) => {
  try {
    const result = await prisma.formresumenesferi.create({
      data: {
        resID: uuidv4(),
        resContent: JSON.stringify(resESF)
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

export const updateResumenESF = async (student, resESF) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        resID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }
    
    const result = await prisma.formresumenesferi.update({
      where: {
        resID: res.resID,
      },
      data: {
        resContent: resESF
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
