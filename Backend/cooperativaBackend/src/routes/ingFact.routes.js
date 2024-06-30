import { Router } from "express";
import { validateIngresosFacturaciones } from "../middlewares/formulario.middleware.js";
import { postIngresosFacturaciones, getIngresosFacturaciones, getIngresosFacturacionesById, putIngresosFacturaciones } from "../controllers/ingFact.controller.js";

const ingFactRouter = Router();

ingFactRouter.get("/", getIngresosFacturaciones);

ingFactRouter.get("/:ingID", getIngresosFacturacionesById);

ingFactRouter.post("/", validateIngresosFacturaciones, postIngresosFacturaciones);

ingFactRouter.put("/:ingID", validateIngresosFacturaciones, putIngresosFacturaciones);

export default ingFactRouter;