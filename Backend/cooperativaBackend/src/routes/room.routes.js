import { Router } from 'express';
import { postRoom, getRoom, getRooms, putRoom, deleteRoom, valRoomPassword } from '../controllers/room.controller.js';
import { validateIdParams, validateRoom, validateRoomUpdate, validateYear } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:roomID', validateRoomUpdate, putRoom);
roomRouter.delete('/', validateYear, deleteRoom);
roomRouter.post('/validate', valRoomPassword);

export default roomRouter;