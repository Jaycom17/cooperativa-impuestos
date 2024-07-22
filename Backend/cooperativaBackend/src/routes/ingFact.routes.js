import { Router } from "express";
import { validateIngresosFacturaciones } from "../middlewares/formulario.middleware.js";
import { postIngresosFacturaciones, getIngresosFacturaciones, getIngresosFacturacionesById, putIngresosFacturaciones, getIngresosFacturacionesByStudent } from "../controllers/ingFact.controller.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";

const ingFactRouter = Router();

ingFactRouter.get("/", getIngresosFacturaciones);

ingFactRouter.get("/student", validateStudent, getIngresosFacturacionesById);

ingFactRouter.get("/:stuID/:roomID", validateAuth, getIngresosFacturacionesByStudent);

ingFactRouter.post("/", validateIngresosFacturaciones, postIngresosFacturaciones);

ingFactRouter.put("/student", validateStudent, validateIngresosFacturaciones, putIngresosFacturaciones);

export default ingFactRouter;