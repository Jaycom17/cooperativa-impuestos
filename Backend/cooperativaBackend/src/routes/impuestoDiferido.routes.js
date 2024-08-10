import { Router } from "express";
import { postImpuestoDiferido, getImpuestoDiferido, getImpuestoDiferidoById, putImpuestoDiferido, getImpuestoDiferidoByStudent } from "../controllers/impuestoDiferido.controllers.js";
import { validateStudent, validateAuth } from "../middlewares/auth.middleware.js";
import { isRoomActive } from "../middlewares/isRoomActive.js";

const ImpDifRouter = Router();

ImpDifRouter.get("/", getImpuestoDiferido);

ImpDifRouter.get("/student", validateStudent, isRoomActive, getImpuestoDiferidoById);

ImpDifRouter.get("/:stuID/:roomID", validateAuth, getImpuestoDiferidoByStudent);

ImpDifRouter.post("/", postImpuestoDiferido);

ImpDifRouter.put("/student", validateStudent, isRoomActive, putImpuestoDiferido);

export default ImpDifRouter;