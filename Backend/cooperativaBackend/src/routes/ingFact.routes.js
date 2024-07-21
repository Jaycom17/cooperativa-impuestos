import { Router } from "express";
import { validateIngresosFacturaciones } from "../middlewares/formulario.middleware.js";
import { postIngresosFacturaciones, getIngresosFacturaciones, getIngresosFacturacionesById, putIngresosFacturaciones } from "../controllers/ingFact.controller.js";
import { validateStudent } from "../middlewares/auth.middleware.js";

const ingFactRouter = Router();

ingFactRouter.get("/", getIngresosFacturaciones);

ingFactRouter.get("/student", validateStudent, getIngresosFacturacionesById);

ingFactRouter.post("/", validateIngresosFacturaciones, postIngresosFacturaciones);

ingFactRouter.put("/student", validateStudent, validateIngresosFacturaciones, putIngresosFacturaciones);

export default ingFactRouter;