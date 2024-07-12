import { Router }  from 'express';
import { postStudent, getStudents, getStudent, putStudent, deleteStudent, searchStudentByName, getStudentByRoom } from '../controllers/student.controller.js';
import { validateStudent, validateIdP, validateIdB, validateRoomId } from '../middlewares/student.middleware.js';

const userRouter = Router();

userRouter.post('/', validateStudent, postStudent);
userRouter.get('/', getStudents);
userRouter.get('/:stuID', validateIdP, getStudent);
userRouter.put('/:stuID', validateIdP, validateRoomId, putStudent);
userRouter.delete('/:stuID', validateIdP, deleteStudent);
userRouter.get('/search/:stuName/:roomID', searchStudentByName);
userRouter.get('/room/:roomID', getStudentByRoom);

export default userRouter;