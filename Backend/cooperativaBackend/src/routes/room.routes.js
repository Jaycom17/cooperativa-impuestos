import { Router } from 'express';
import { postRoom, getRoom, getRooms, putRoom, putRoomName, deleteRoom, valRoomPassword } from '../controllers/room.controller.js';
import { validateIdBody,validateIdParams, validateRoom, validateRoomUpdate, validateYear, validateRoomUpdateName } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:roomID', validateIdParams, validateRoomUpdate, putRoom);
roomRouter.put('/update/:roomID', validateIdParams, validateRoomUpdateName, putRoomName);
roomRouter.delete('/', validateYear, deleteRoom);
roomRouter.post('/validate', valRoomPassword);

export default roomRouter;