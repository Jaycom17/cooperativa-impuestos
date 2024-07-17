import { Router } from "express";
import { validateFormulario110 } from "../middlewares/formulario.middleware.js";
import { postFormulario110, getFormulario110, getFormulario110ById, putFormulario110 } from "../controllers/form110.controller.js";
import { validateStudent } from "../middlewares/auth.middleware.js";

const form110Router = Router();

form110Router.get("/", getFormulario110);

form110Router.get("/student",validateStudent, getFormulario110ById);

form110Router.post("/", validateStudent, validateFormulario110, postFormulario110);

form110Router.put("/", validateStudent, validateFormulario110, putFormulario110);

export default form110Router;