import { Router } from 'express';
import { postUser } from '../controllers/room.controller.js';
import { validateUser } from '../middlewares/room.middleware.js';

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

export default roomRouter;