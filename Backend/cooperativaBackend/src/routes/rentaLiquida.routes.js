import { Router } from "express";
import { postRentaLiquida, getRentaLiquida, getRentaLiquidaById, putRentaLiquida, getRentaLiquidaByStudent } from "../controllers/rentaLiquida.controller.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";

const rentaLiquidaRouter = Router();

rentaLiquidaRouter.get("/", getRentaLiquida);

rentaLiquidaRouter.get("/student", validateStudent, getRentaLiquidaById);

rentaLiquidaRouter.get("/:stuID/:roomID", validateAuth, getRentaLiquidaByStudent);

rentaLiquidaRouter.post("/", postRentaLiquida);

rentaLiquidaRouter.put("/student", validateStudent, putRentaLiquida);

export default rentaLiquidaRouter;