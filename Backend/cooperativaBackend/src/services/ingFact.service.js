import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listIngresosFacturaciones = async () => {
  try {
    const result = await prisma.formingresosfancturacion.findMany();

    result.forEach((ingFact) => {
        ingFact.ingContent = JSON.parse(ingFact.ingContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listIngresosFacturacionesById = async (student) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        ingID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formingresosfancturacion.findUnique({
      where: {
        ingID: res.ingID,
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

export const createIngresosFacturaciones = async (ingFact) => {
  try {
    const result = await prisma.formingresosfancturacion.create({
      data: {
        ingID: uuidv4(),
        ingContent: JSON.stringify(ingFact)
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

export const updateIngresosFacturaciones = async (student, ingFact) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        ingID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }
    
    const result = await prisma.formingresosfancturacion.update({
      where: {
        ingID: res.ingID,
      },
      data: {
        ingContent: ingFact
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
