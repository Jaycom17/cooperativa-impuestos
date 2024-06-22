import { login, logout, profile } from "../controllers/login.controller.js";
import { Router } from "express";
import { validateLogin } from '../middlewares/login.middleware.js';
import { validateAuth } from "../middlewares/auth.middleware.js";

const loginRouter = Router();

loginRouter.post("/", validateLogin, login);

loginRouter.get("/profile", validateAuth, profile);

loginRouter.get("/logout", validateAuth, logout);

export default loginRouter;