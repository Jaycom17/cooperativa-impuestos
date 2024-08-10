import { Router } from "express";
import { validateCaratula } from "../middlewares/formulario.middleware.js";
import { postCaratula, getCaratula, getCaratulaById, putCaratula } from "../controllers/caratula.controller.js";
import { validateStudent } from "../middlewares/auth.middleware.js";

const caratulaRouter = Router();

caratulaRouter.get("/", getCaratula);

caratulaRouter.get("/student",validateStudent, getCaratulaById);

caratulaRouter.post("/", validateStudent, postCaratula);

caratulaRouter.put("/student",validateStudent, validateCaratula, putCaratula);

export default caratulaRouter;