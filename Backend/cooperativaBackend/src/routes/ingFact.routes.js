import { Router } from "express";
import { validateIngresosFacturaciones } from "../middlewares/formulario.middleware.js";
import { postIngresosFacturaciones, getIngresosFacturaciones, getIngresosFacturacionesById, putIngresosFacturaciones, getIngresosFacturacionesByStudent } from "../controllers/ingFact.controller.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";

const resumenESFRouter = Router();

resumenESFRouter.get("/", getIngresosFacturaciones);

resumenESFRouter.get("/student", validateStudent, getIngresosFacturacionesById);

resumenESFRouter.get("/:stuID/:roomID", validateAuth, getIngresosFacturacionesByStudent);

resumenESFRouter.post("/", validateIngresosFacturaciones, postIngresosFacturaciones);

resumenESFRouter.put("/student", validateStudent, validateIngresosFacturaciones, putIngresosFacturaciones);

export default resumenESFRouter;