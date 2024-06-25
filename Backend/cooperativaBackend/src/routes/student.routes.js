import { Router }  from 'express';
import { postStudent, getStudents, getStudent, putStudent, deleteStudent } from '../controllers/student.controller.js';
import { validateStudent, validateIdP, validateIdB } from '../middlewares/student.middleware.js';

const userRouter = Router();

userRouter.post('/', validateStudent, postStudent);
userRouter.get('/', getStudents);
userRouter.get('/:stuId', validateIdP, getStudent);
userRouter.put('/:stuId', validateIdP, validateIdB, putStudent);
userRouter.delete('/:stuId', validateIdP, deleteStudent);

export default userRouter;