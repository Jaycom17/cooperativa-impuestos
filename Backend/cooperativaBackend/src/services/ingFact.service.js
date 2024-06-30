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

export const listIngresosFacturacionesById = async (ingID) => {
  try {
    const result = await prisma.formingresosfancturacion.findUnique({
      where: {
        ingID,
      },
    });
    result.ingContent = JSON.parse(result.ingContent.replace(/'/g, '"'));
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

export const updateIngresosFacturaciones = async (ingID, ingFact) => {
  try {
    const result = await prisma.formingresosfancturacion.update({
      where: {
        ingID,
      },
      data: {
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
}
