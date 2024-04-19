import { Router } from 'express';
import { postUser, getRoom, getRooms, updateRoom, deleteRoom } from '../controllers/room.controller.js';
import { validateUser, validateId, validateRoom } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.get('/', (req, res) => {
    res.send('Hello from room routes');
});

roomRouter.get('/info', (req, res) => {
    res.send('Hello from room info');
});

roomRouter.get('/info/:id', (req, res) => {
    res.send('Hello from room info id');
});

roomRouter.post('/', validateUser, postUser);
roomRouter.get('/:id', validateId, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:id', validateId, validateRoom, updateRoom);
roomRouter.delete('/:id', validateId, deleteRoom);

export default roomRouter;