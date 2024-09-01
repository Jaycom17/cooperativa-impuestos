import { Router } from "express";
import { postResumenESF, getResumenESF, getResumenESFById, putResumenESF, getResumenESFByStudent } from "../controllers/resumenESF.controller.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";

const ingFactRouter = Router();

ingFactRouter.get("/", getResumenESF);

ingFactRouter.get("/student", validateStudent, getResumenESFById);

ingFactRouter.get("/:stuID/:roomID", validateAuth, getResumenESFByStudent);

ingFactRouter.post("/", validateResumenESF, postResumenESF);

ingFactRouter.put("/student", validateStudent, putResumenESF);

export default ingFactRouter;