import { Router }  from 'express';
import { postUser, getUsers, getUser, deleteUser } from '../controllers/user.controller.js';
import { validateUser, validateId, validateLogin } from '../middlewares/user.middleware.js';

const userRouter = Router();

userRouter.post('/',validateUser, postUser);
userRouter.get('/', getUsers);
userRouter.get('/:usuId', validateId, getUser);
userRouter.delete('/:usuId', validateId, deleteUser);
userRouter.post('/login', validateLogin, login);

export default userRouter;