import { Router } from "express";
import { validateCaratula } from "../middlewares/formulario.middleware.js";
import { postCaratula, getCaratula, getCaratulaById, putCaratula } from "../controllers/caratula.controller.js";

const caratulaRouter = Router();

caratulaRouter.get("/", getCaratula);

caratulaRouter.get("/:carID", getCaratulaById);

caratulaRouter.post("/", validateCaratula, postCaratula);

caratulaRouter.put("/:carID", validateCaratula, putCaratula);

export default caratulaRouter;