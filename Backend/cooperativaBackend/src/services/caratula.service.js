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
    const result = await prisma.formcaratula.findUnique({
      where: {
        carID,
      },
    });
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

export const updateCaratula = async (carID, caratula) => {
  try {
    const result = await prisma.formcaratula.update({
      where: {
        carID,
      },
      data: {
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
}
