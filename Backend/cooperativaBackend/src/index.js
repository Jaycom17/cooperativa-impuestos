import express from 'express';
import userRouter from './routes/user.routes.js';
import roomRouter from './routes/room.routes.js';
import studentRouter from './routes/student.routes.js';

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/room', roomRouter);
app.use('/student', studentRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
