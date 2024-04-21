import { Router } from "express";
import { validateActivosFijos } from "../middlewares/activosFijos.middleware.js";
import { postActivosFijos, getActivosFijos, getActivosFijosById, putActivosFijos } from "../controllers/activosFijos.controller.js";

const activosFijosRouter = Router();

activosFijosRouter.get("/", getActivosFijos);

activosFijosRouter.get("/:actID", getActivosFijosById);

activosFijosRouter.post("/", validateActivosFijos, postActivosFijos);

activosFijosRouter.put("/:actID", validateActivosFijos, putActivosFijos);

export default activosFijosRouter;