import express from 'express';
import userRouter from './routes/user.routes.js';
import roomRouter from './routes/room.routes.js';
import studentRouter from './routes/student.routes.js';
import activosFijosRouter from './routes/activosFijos.routes.js';
import loginRouter from './routes/login.routes.js';
import cookieParse from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParse());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/user', userRouter);
app.use('/room', roomRouter);
app.use('/student', studentRouter);
app.use('/activosFijos', activosFijosRouter);
app.use('/login', loginRouter);
app.use('/room', roomRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
