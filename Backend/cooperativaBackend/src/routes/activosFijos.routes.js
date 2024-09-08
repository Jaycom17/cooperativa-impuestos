import { Router } from "express";
import { validateActivosFijos } from "../middlewares/activosFijos.middleware.js";
import { getActivosFijos, getActivosFijosById, putActivosFijos, getActivosFijosByStudent } from "../controllers/activosFijos.controller.js";
import { validateAuth, validateStudent } from "../middlewares/auth.middleware.js";

const activosFijosRouter = Router();

activosFijosRouter.get("/", getActivosFijos);

activosFijosRouter.get("/student", validateStudent, getActivosFijosById);

activosFijosRouter.get("/:stuID/:roomID", validateAuth, getActivosFijosByStudent);

activosFijosRouter.put("/student", validateActivosFijos,validateStudent, putActivosFijos);

export default activosFijosRouter;