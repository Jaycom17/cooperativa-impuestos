import { Router } from "express";
import { validateDetalleRenglones } from "../middlewares/formulario.middleware.js";
import { postDetalleRenglones, getDetalleRenglones, getDetalleRenglonesById, putDetalleRenglones } from "../controllers/detalleRenglones.controller.js";

const detalleRenglonesRouter = Router();

detalleRenglonesRouter.get("/", getDetalleRenglones);

detalleRenglonesRouter.get("/student", getDetalleRenglonesById);

detalleRenglonesRouter.post("/", validateDetalleRenglones, postDetalleRenglones);

detalleRenglonesRouter.put("/student", validateDetalleRenglones, putDetalleRenglones);

export default detalleRenglonesRouter;