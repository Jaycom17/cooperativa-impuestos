import { Router } from "express";
import { getReport } from "../controllers/report.controller.js";
import { validateStudent } from "../middlewares/auth.middleware.js";

const reportRouter = Router();

reportRouter.get("/", validateStudent, getReport);

export default reportRouter;