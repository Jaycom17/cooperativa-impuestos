import { Router } from "express";
import { validateDetalleRenglones } from "../middlewares/formulario.middleware.js";
import { postDetalleRenglones, getDetalleRenglones, getDetalleRenglonesById, putDetalleRenglones } from "../controllers/detalleRenglones.controller.js";
import { validateStudent } from "../middlewares/auth.middleware.js";

const detalleRenglonesRouter = Router();

detalleRenglonesRouter.get("/", getDetalleRenglones);

detalleRenglonesRouter.get("/student", validateStudent, getDetalleRenglonesById);

detalleRenglonesRouter.post("/", validateStudent, validateDetalleRenglones, postDetalleRenglones);

detalleRenglonesRouter.put("/student",validateStudent, validateDetalleRenglones, putDetalleRenglones);

export default detalleRenglonesRouter;