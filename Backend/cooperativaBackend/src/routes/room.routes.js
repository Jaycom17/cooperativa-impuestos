import { Router } from 'express';
import { postRoom, getRoom, getRooms, getRoomsByUser, putRoom, putRoomName, deleteRoom, deleteRoomByID, valRoomPassword} from '../controllers/room.controller.js';
import { validateIdBody,validateIdParams, validateUsuIdParams, validateRoom, validateRoomUpdate, validateYear, validateRoomUpdateName } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.get('/user/:usuID', validateUsuIdParams, getRoomsByUser);
roomRouter.put('/:roomID', validateIdParams, validateRoomUpdate, putRoom);
roomRouter.put('/update/:roomID', validateIdParams, validateRoomUpdateName, putRoomName);
roomRouter.delete('/', validateYear, deleteRoom);
roomRouter.delete('/:roomID', validateIdParams, deleteRoomByID);
roomRouter.post('/validate', valRoomPassword);

export default roomRouter;