import { login, logout, profile, studentProfile } from "../controllers/login.controller.js";
import { Router } from "express";
import { validateLogin } from '../middlewares/login.middleware.js';
import { validateAuth, validateStudent } from "../middlewares/auth.middleware.js";

const loginRouter = Router();

loginRouter.post("/", validateLogin, login);

loginRouter.get("/profile", validateAuth, profile);

loginRouter.get("/logout", validateAuth, logout);

loginRouter.get("/studentprofile", validateStudent, studentProfile);

loginRouter.get("/logoutstudent", validateStudent, logout);

export default loginRouter;