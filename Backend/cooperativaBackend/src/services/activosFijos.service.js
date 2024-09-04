import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listActivosFijos = async () => {
  try {
    const result = await prisma.formactivosfijos.findMany();

    result.forEach((activosFijos) => {
      activosFijos.actContent = JSON.parse(activosFijos.actContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listActivosFijosById = async (student) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        actID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formactivosfijos.findUnique({
      where: {
        actID: res.actID,
      },
    });

    if (!result) {
      return { message: 'Formulario no encontrado' };
    } 

    return result;
  } catch (error) {
    console.error(error.ConnectorError);
    return false;
  }
};

export const createActivosFijos = async (activosFijos) => {
  try {
    const result = await prisma.formactivosfijos.create({
      data: {
        actID: uuidv4(),
        actContent: JSON.stringify(activosFijos)
          .replace(/\n|\s/g, "")
          .replace(/"/g, "'"),
      },
    });
    return true;
  } catch (error) {
    console.error(error.ConnectorError);
    return false;
  }
};

export const updateActivosFijos = async (student, activosFijos) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        actID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formactivosfijos.update({
      where: {
        actID: res.actID,
      },
      data: {
        actContent: activosFijos,
      },
    });
    return true;
  } catch (error) {
    console.error(error.ConnectorError);
    return false;
  }
}
