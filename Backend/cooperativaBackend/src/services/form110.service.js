import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listFormulario110 = async () => {
  try {
    const result = await prisma.formr110.findMany();

    result.forEach((form110) => {
        form110.r110Content = JSON.parse(form110.r110Content.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listFormulario110ById = async (student) => {
  try {
    const result = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },select: {
        r110ID: true,
      },
    });

    if (!result) {
      return {message: "Formulario 110 no encontrado"};
    }

    form110 = await prisma.formr110.findUnique({
      where: {
        r110ID: result.r110ID,
      },
    });

    if (!form110) {
      return {message: "Formulario 110 no encontrado"};
    }

    form110.r110Content = JSON.parse(form110.r110Content.replace(/'/g, '"'));
    return form110;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createFormulario110 = async (form110) => {
  try {
    const result = await prisma.formr110.create({
      data: {
        r110ID: uuidv4(),
        r110Content: JSON.stringify(form110)
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

export const updateFormulario110 = async (student, form110) => {
  try {

    const currentReport = await prisma.report.findUnique({
      where: {
        roomID: student.roomID,
        stuID: student.stuID,
      },
    });

    const result = await prisma.formr110.update({
      where: {
        r110ID: currentReport.r110ID,
      },
      data: {
        r110Content: JSON.stringify(form110)
          .replace(/\n|\s/g, "")
          .replace(/"/g, "'"),
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
