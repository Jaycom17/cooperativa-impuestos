import { Router }  from 'express';
import { getUser, deleteUser, postAdmin, postProfessor, getAdmins, getProfessors } from '../controllers/user.controller.js';
import { validateUser, validateId } from '../middlewares/user.middleware.js';

const userRouter = Router();

userRouter.post('/admin',validateUser, postAdmin);
userRouter.post('/professor', validateUser, postProfessor);
userRouter.get('/admin', getAdmins);
userRouter.get('/professor', getProfessors);
userRouter.get('/:usuId', validateId, getUser);
userRouter.delete('/:usuId', validateId, deleteUser);

export default userRouter;