import { Router } from "express";
import { validateCaratula } from "../middlewares/formulario.middleware.js";
import { postCaratula, getCaratula, getCaratulaById, putCaratula } from "../controllers/caratula.controller.js";
import { validateAuth, validateStudent } from "../middlewares/auth.middleware.js";

const caratulaRouter = Router();

caratulaRouter.get("/", getCaratula);

caratulaRouter.get("/student", validateStudent,  getCaratulaById);

caratulaRouter.get("/:stuID/:roomID",validateAuth, validateCaratula, postCaratula);

caratulaRouter.put("/student", validateStudent, validateCaratula, putCaratula);

export default caratulaRouter;