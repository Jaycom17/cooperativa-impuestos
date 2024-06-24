import { Router } from 'express';
import { postRoom, getRoom, getRooms, putRoom, deleteRoom } from '../controllers/room.controller.js';
import { validateIdBody,validateIdParams, validateRoom, validateRoomUpdate, validateYear } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.get('/info', (req, res) => {
    res.send('Hello from room info');
});

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:roomID', validateIdParams, validateRoomUpdate, putRoom);
roomRouter.delete('/', validateYear, deleteRoom);

export default roomRouter;