import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listCaratula = async () => {
  try {
    const result = await prisma.formcaratula.findMany();

    result.forEach((caratula) => {
        caratula.carContent = JSON.parse(caratula.carContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listCaratulaById = async (carID) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },select: {
        carID: true,
      },
    });

    if (!res) {
      return {message: "Caratula no encontrado"};
    }

    const result = await prisma.formcaratula.findUnique({
      where: {
        carID: res.carID,
      },
    });
    
    if (!result) {
      return {message: "Caratula no encontrado"};
    }

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createCaratula = async (caratula) => {
  try {
    const result = await prisma.formcaratula.create({
      data: {
        carID: uuidv4(),
        carContent: JSON.stringify(caratula)
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

export const updateCaratula = async (student, caratula) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        roomID: student.roomID,
        stuID: student.stuID,
      },
      select: {
        carID: true,
      },
    });

    if (!res) {
      return {message:'Formulario no encontrado'};
    }

    const result = await prisma.formcaratula.update({
      where: {
        carID: res.carID,
      },
      data: {
        carContent: caratula,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
