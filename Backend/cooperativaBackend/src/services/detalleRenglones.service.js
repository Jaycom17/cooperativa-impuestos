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

export const listDetalleRenglonesById = async (detID) => {
  try {
    const result = await prisma.formdetallerenglones.findUnique({
      where: {
        detID,
      },
    });
    result.detContent = JSON.parse(result.detContent.replace(/'/g, '"'));
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

export const updateDetalleRenglones = async (detID, detalleRenglones) => {
  try {
    const result = await prisma.formdetallerenglones.update({
      where: {
        detID,
      },
      data: {
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
}
