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

export const listActivosFijosById = async (actID) => {
  try {
    const result = await prisma.formactivosfijos.findUnique({
      where: {
        actID,
      },
    });
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

export const updateActivosFijos = async (actID, activosFijos) => {
  try {
    const result = await prisma.formactivosfijos.update({
      where: {
        actID,
      },
      data: {
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
}
