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

export const listFormulario110ById = async (r110ID) => {
  try {
    const result = await prisma.formr110.findUnique({
      where: {
        r110ID,
      },
    });
    result.r110Content = JSON.parse(result.r110Content.replace(/'/g, '"'));
    return result;
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

export const updateFormulario110 = async (r110ID, form110) => {
  try {
    const result = await prisma.formr110.update({
      where: {
        r110ID,
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
