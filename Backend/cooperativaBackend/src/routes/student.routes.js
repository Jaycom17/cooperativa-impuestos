import { Router } from "express";
import {
  postStudent,
  getStudents,
  getStudent,
  putStudent,
  deleteStudent,
  searchStudentByCedula,
  getStudentByRoom,
} from "../controllers/student.controller.js";
import {
  validateStudent,
  validateIdP,
  validateIdB,
  validateRoomId,
} from "../middlewares/student.middleware.js";
import {
  isRoomActiveBody,
  isRoomActiveParams,
} from "../middlewares/isRoomActive.js";

const userRouter = Router();

userRouter.post("/", validateStudent, isRoomActiveBody, postStudent);
userRouter.get("/", getStudents);
userRouter.get("/:stuID", validateIdP, getStudent);
userRouter.put("/:stuID", validateIdP, validateRoomId, putStudent);
userRouter.delete("/:stuID", validateIdP, deleteStudent);
userRouter.get(
  "/search/:stuCedula/:roomID",
  isRoomActiveParams,
  searchStudentByCedula
);
userRouter.get("/room/:roomID", getStudentByRoom);

export default userRouter;
