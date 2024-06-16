import { Router } from 'express';
<<<<<<< HEAD
import { postRoom, getRoom, getRooms, putRoom, deleteRoom, valRoomPassword } from '../controllers/room.controller.js';
import { validateId, validateRoom } from '../middlewares/room.middleware.js';

const roomRouter = Router();

// roomRouter.get('/', (req, res) => {
//     res.send('Hello from room routes');
// });

// roomRouter.get('/info', (req, res) => {
//     res.send('Hello from room info');
// });
=======
import { postRoom, getRoom, getRooms, putRoom, deleteRoom } from '../controllers/room.controller.js';
import { validateIdBody,validateIdParams, validateRoom, validateRoomUpdate, validateYear } from '../middlewares/room.middleware.js';

const roomRouter = Router();

roomRouter.get('/info', (req, res) => {
    res.send('Hello from room info');
});
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad

// roomRouter.get('/info/:id', (req, res) => {
//     res.send('Hello from room info id');
// });

roomRouter.post('/', validateRoom, postRoom);
<<<<<<< HEAD
roomRouter.get('/:id', validateId, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:id', validateId, validateRoom, putRoom);
roomRouter.delete('/:id', validateId, deleteRoom);
roomRouter.post('/validate', valRoomPassword);
=======
roomRouter.get('/:roomID', validateIdParams, getRoom);
roomRouter.get('/', getRooms);
roomRouter.put('/:roomID', validateIdParams, validateRoomUpdate, putRoom);
roomRouter.delete('/', validateYear, deleteRoom);
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad

export default roomRouter;