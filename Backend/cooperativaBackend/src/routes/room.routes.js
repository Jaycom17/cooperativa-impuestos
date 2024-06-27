import { Router } from 'express';
import { postRoom, getRoom, getRooms, putRoom, putRoomName, deleteRoom } from '../controllers/room.controller.js';
import { validateIdBody,validateIdParams, validateRoom, validateRoomUpdate, validateYear, validateRoomUpdateName } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.get('/info', (req, res) => {
    res.send('Hello from room info');
});

roomRouter.get('/info/:id', (req, res) => {
    res.send('Hello from room info id');
});

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:roomID', validateIdParams, validateRoomUpdate, putRoom);
roomRouter.put('/update/:roomID', validateIdParams, validateRoomUpdateName, putRoomName);
roomRouter.delete('/', validateYear, deleteRoom);

export default roomRouter;