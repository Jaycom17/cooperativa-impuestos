import { Router } from "express";
import { postImpuestoDiferido, getImpuestoDiferido, getImpuestoDiferidoById, putImpuestoDiferido, getImpuestoDiferidoByStudent } from "../controllers/impuestoDiferido.controllers.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";

const ImpDifRouter = Router();

ImpDifRouter.get("/", getImpuestoDiferido);

ImpDifRouter.get("/student", validateStudent, getImpuestoDiferidoById);

ImpDifRouter.get("/:stuID/:roomID", validateAuth, getImpuestoDiferidoByStudent);

ImpDifRouter.post("/", postImpuestoDiferido);

ImpDifRouter.put("/student", validateStudent, putImpuestoDiferido);

export default ImpDifRouter;