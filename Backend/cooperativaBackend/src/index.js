import express from 'express';
import userRouter from './routes/user.routes.js';
import activosFijosRouter from './routes/activosFijos.routes.js';

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/activosFijos', activosFijosRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
