import { Router }  from 'express';
import { postStudent, getStudents, getStudent, putStudent, deleteStudent } from '../controllers/student.controller.js';
import { validateStudent, validateIdP, validateIdB } from '../middlewares/student.middleware.js';

const userRouter = Router();

userRouter.post('/', validateStudent, postStudent);
userRouter.get('/', getStudents);
userRouter.get('/:id', validateIdP, getStudent);
userRouter.put('/:id', validateIdP, validateIdB, putStudent);
userRouter.delete('/:id', validateIdP, deleteStudent);

export default userRouter;