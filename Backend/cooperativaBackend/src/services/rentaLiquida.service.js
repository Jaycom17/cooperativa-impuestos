import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

import { getRentaLiquitaDetalle } from "./formsConections/rentaLiquitaDetalle.service.js";

export const listRentaLiquida = async () => {
  try {
    const result = await prisma.formrentaliquida.findMany();

    result.forEach((rentLiq) => {
        rentLiq.renContent = JSON.parse(rentLiq.renContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listRentaLiquidaById = async (student) => {
  try {

    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        renID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }

    const result = await prisma.formrentaliquida.findUnique({
      where: {
        renID: res.renID,
      },
    });

    if (!result) {
      return { message: 'Formulario no encontrado' };
    } 

    getRentaLiquitaDetalle(result.renContent, student);

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createRentaLiquida = async (rentLiq) => {
  try {
    const result = await prisma.formrentaliquida.create({
      data: {
        renID: uuidv4(),
        renContent: JSON.stringify(rentLiq)
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

export const updateRentaLiquida = async (student, rentLiq) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },
      select: {
        renID: true,
      },
    });

    if (!res) {
      return { message: 'Formulario no encontrado' };
    }
    
    const result = await prisma.formrentaliquida.update({
      where: {
        renID: res.renID,
      },
      data: {
        renContent: rentLiq
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
