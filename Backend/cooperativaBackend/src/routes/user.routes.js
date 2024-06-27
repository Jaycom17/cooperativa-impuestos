import { Router }  from 'express';
import { postUser, getUsers, getUser, deleteUser, postAdmin, postProfessor, getAdmins, getProfessors } from '../controllers/user.controller.js';
import { validateUser, validateId, validateLogin } from '../middlewares/user.middleware.js';

const userRouter = Router();

//userRouter.post('/',validateUser, postUser);
userRouter.post('/admin',validateUser, postAdmin);
userRouter.post('/professor', validateUser, postProfessor);
userRouter.get('/', getUsers);
userRouter.get('/admin', getAdmins);
userRouter.get('/professor', getProfessors);
userRouter.get('/:usuId', validateId, getUser);
userRouter.delete('/:usuId', validateId, deleteUser);
//userRouter.post('/login', validateLogin, login);

export default userRouter;