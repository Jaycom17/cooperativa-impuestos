import { Router }  from 'express';
import { postUser } from '../controllers/user.controller.js';
import { validateUser } from '../middlewares/user.middleware.js';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('Hello from user routes');
});

userRouter.get('/profile', (req, res) => {
    res.send('Hello from user profile');
});

userRouter.get('/profile/:id', (req, res) => {
    res.send('Hello from user profile id');
});

userRouter.post('/',validateUser, postUser);

export default userRouter;