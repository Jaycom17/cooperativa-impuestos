import { login } from "../controllers/login.controller.js";
import { Router } from "express";
import { validateLogin } from '../middlewares/login.middleware.js';
import { validateAuth } from "../middlewares/auth.middleware.js";

const loginRouter = Router();

loginRouter.post("/", validateLogin, login);

loginRouter.get("/profile", validateAuth, (req, res) => {
    res.status(200).json({ message: "Perfil de usuario" });
});

export default loginRouter;