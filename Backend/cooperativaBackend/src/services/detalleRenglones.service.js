import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const listDetalleRenglones = async () => {
  try {
    const result = await prisma.formdetallerenglones.findMany();

    result.forEach((detalleRenglones) => {
        detalleRenglones.detContent = JSON.parse(detalleRenglones.detContent.replace(/'/g, '"'));
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listDetalleRenglonesById = async (student) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        stuID: student.stuID,
        roomID: student.roomID,
      },select: {
        detID: true,
      },
    });

    if (!res) {
      return {message: "Detalle Renglones no encontrado"};
    }

    const result = await prisma.formdetallerenglones.findUnique({
      where: {
        detID : res.detID,
      },
    });
    
    if (!result) {
      return {message: "Detalle Renglones no encontrado"};
    }
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createDetalleRenglones = async (detalleRenglones) => {
  try {
    const result = await prisma.formdetallerenglones.create({
      data: {
        detID: uuidv4(),
        detContent: JSON.stringify(detalleRenglones)
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

export const updateDetalleRenglones = async (student, detalleRenglones) => {
  try {
    const res = await prisma.report.findFirst({
      where: {
        roomID: student.roomID,
        stuID: student.stuID,
      },
      select: {
        detID: true,
      },
    });

    if (!res) {
      return {message: "Detalle Renglones no encontrado"};
    }

    const result = await prisma.formdetallerenglones.update({
      where: {
        detID: res.detID,
      },
      data: {
        detContent: detalleRenglones,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    return {message: {error: 'No se pudo actualizar el formulario'}};
  }
}
