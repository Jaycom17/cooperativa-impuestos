import { Router } from 'express';
import { postRoom, getRoom, getRooms, getRoomsByUser, putRoom, putRoomName, deleteRoom, deleteRoomByID} from '../controllers/room.controller.js';
import { validateIdBody,validateIdParams, validateUsuIdParams, validateRoom, validateRoomUpdate, validateYear, validateRoomUpdateName } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.get('/info', (req, res) => {
    res.send('Hello from room info');
});

// roomRouter.get('/info/:id', (req, res) => {
//     res.send('Hello from room info id');
// });

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.get('/user/:usuID', validateUsuIdParams, getRoomsByUser);
roomRouter.put('/:roomID', validateIdParams, validateRoomUpdate, putRoom);
roomRouter.put('/update/:roomID', validateIdParams, validateRoomUpdateName, putRoomName);
roomRouter.delete('/', validateYear, deleteRoom);
roomRouter.delete('/:roomID', validateIdParams, deleteRoomByID);

export default roomRouter;