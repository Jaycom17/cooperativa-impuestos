import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";
import { createAccessTokenStudent } from "./jwt.service.js";
import { createReport } from "./report.service.js";

export const createStudent = async (student) => {
  try {
    const roomResult = await prisma.room.findUnique({
      where: {
        roomID: student.roomID,
      },
    });

    if (!roomResult) {
      return { message: "La sala no existe" };
    }

    const studentExist = await prisma.student.findFirst({
      where: {
        stuName: student.stuName,
        roomID: student.roomID,
      },
    });

    if (studentExist) {
      return { message: "El estudiante ya existe" };
    }

    const result = await prisma.student.create({
      data: {
        stuID: uuidv4(),
        stuName: student.stuName,
        roomID: student.roomID,
      },
    });

    if (!result) {
      return { message: "Error al crear el estudiante" };
    }

    await createReport(result.stuID, result.roomID);

    const token = await createAccessTokenStudent({
      stuID: result.stuID,
      roomID: student.roomID,
    });

    return { stuID: result.stuID, roomID: result.roomID, token };
  } catch (error) {
    console.error(error);
    return { message: "Error al crear el estudiante" };
  }
};

export const obtainStudent = async (stuID) => {
  try {
    const result = await prisma.student.findUnique({
      where: {
        stuID: stuID,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtainStudents = async () => {
  try {
    const result = await prisma.student.findMany();
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateStudent = async (student) => {
  try {
    const roomResult = await prisma.room.findUnique({
      where: {
        roomID: student.roomID,
      },
    });
    if (!roomResult) {
      return false;
    }
    const result = await prisma.student.update({
      where: {
        stuID: student.stuID,
      },
      data: {
        roomID: student.roomID,
      },
    });
    if (!result) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const removeStudent = async (stuID) => {
  try {
    const studentExist = await prisma.student.findUnique({
      where: {
        stuID: stuID,
      },
    });

    if (!studentExist) {
      return false;
    }
    const result = await prisma.student.delete({
      where: {
        stuID: stuID,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const studentByName = async (stuName, roomID) => {
  try {
    const result = await prisma.student.findMany({
      where: {
        stuName: stuName,
        roomID: roomID,
      },
    });

    if (result.length === 0) {
      return { message: "No se encontró al estudiante" };
    }

    if (result.length > 1) {
      return { message: "Se encontraron varios estudiantes" };
    }

    const token = await createAccessTokenStudent({
      stuID: result[0].stuID,
      roomID: result[0].roomID,
    });

    return { stuID: result[0].stuID, roomID: result[0].roomID, token };
  } catch (error) {
    console.error(error);
    return { message: "Error al buscar el estudiante" };
  }
};

export const obtainStudentByRoom = async (roomID) => {
  try {
    const result = await prisma.student.findMany({
      where: {
        roomID: roomID,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return { message: "Error al buscar los estudiantes" };
  }
};
