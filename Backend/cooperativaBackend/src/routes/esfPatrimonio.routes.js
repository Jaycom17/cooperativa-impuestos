import { Router } from "express";
import { getEsfPatrimonio, getEsfPatrimonioById, getEsfPatrimonioByStudent, postEsfPatrimonio, putEsfPatrimonio } from "../controllers/esfPatrimonio.controller.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";

const esfRouter = Router();

esfRouter.get("/", getEsfPatrimonio);

esfRouter.get("/student", validateStudent, getEsfPatrimonioById);

esfRouter.get("/:stuID/:roomID", validateAuth, getEsfPatrimonioByStudent);

esfRouter.post("/", postEsfPatrimonio);

esfRouter.put("/student", validateStudent, putEsfPatrimonio);

export default esfRouter;