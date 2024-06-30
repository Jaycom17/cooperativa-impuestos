import { Router } from "express";
import { validateFormulario110 } from "../middlewares/formulario.middleware.js";
import { postFormulario110, getFormulario110, getFormulario110ById, putFormulario110 } from "../controllers/form110.controller.js";

const form110Router = Router();

form110Router.get("/", getFormulario110);

form110Router.get("/:r110ID", getFormulario110ById);

form110Router.post("/", validateFormulario110, postFormulario110);

form110Router.put("/:r110ID", validateFormulario110, putFormulario110);

export default form110Router;