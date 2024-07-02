import { Router }  from 'express';
import { getUser, deleteUser, postAdmin, postProfessor, getAdmins, getProfessors, putAdmin, putProfessor } from '../controllers/user.controller.js';
import { validateUser, validateId } from '../middlewares/user.middleware.js';

const userRouter = Router();

userRouter.post('/admin',validateUser, postAdmin);
userRouter.post('/professor', validateUser, postProfessor);
userRouter.get('/admin', getAdmins);
userRouter.get('/professor', getProfessors);
userRouter.get('/:usuID', validateId, getUser);
userRouter.delete('/:usuID', validateId, deleteUser);
userRouter.put('/admin/:usuID', validateId, putAdmin);
userRouter.put('/professor/:usuID', putProfessor);

export default userRouter;