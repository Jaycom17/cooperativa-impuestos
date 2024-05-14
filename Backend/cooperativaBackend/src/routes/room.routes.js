import { Router } from 'express';
import { postRoom, getRoom, getRooms, putRoom, deleteRoom, valRoomPassword } from '../controllers/room.controller.js';
import { validateId, validateRoom } from '../middlewares/room.middleware.js';

const roomRouter = Router();

// roomRouter.get('/', (req, res) => {
//     res.send('Hello from room routes');
// });

// roomRouter.get('/info', (req, res) => {
//     res.send('Hello from room info');
// });

// roomRouter.get('/info/:id', (req, res) => {
//     res.send('Hello from room info id');
// });

roomRouter.post('/', validateRoom, postRoom);
roomRouter.get('/:id', validateId, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:id', validateId, validateRoom, putRoom);
roomRouter.delete('/:id', validateId, deleteRoom);
roomRouter.post('/validate', valRoomPassword);

export default roomRouter;