import { Router }  from 'express';
import { postStudent, getStudents, getStudent, putStudent, deleteStudent } from '../controllers/student.controller.js';
import { validateStudent, validateIdP, validateIdB, validateRoomId } from '../middlewares/student.middleware.js';

const userRouter = Router();

userRouter.post('/', validateStudent, postStudent);
userRouter.get('/', getStudents);
userRouter.get('/:stuID', validateIdP, getStudent);
userRouter.put('/:stuID', validateIdP, validateRoomId, putStudent);
userRouter.delete('/:stuID', validateIdP, deleteStudent);

export default userRouter;