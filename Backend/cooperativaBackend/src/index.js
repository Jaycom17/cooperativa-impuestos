import express from 'express';
import userRouter from './routes/user.routes.js';
import roomRouter from './routes/room.routes.js';
import studentRouter from './routes/student.routes.js';
import activosFijosRouter from './routes/activosFijos.routes.js';
import caratulaRouter from './routes/caratula.routes.js';
import detalleRenglonesRouter from './routes/detalleRenglones.routes.js';
import form110Router from './routes/form110.routes.js';
import ingFactRouter from './routes/ingFact.routes.js';
import loginRouter from './routes/login.routes.js';
import reportRouter from './routes/report.routes.js';
import cookieParse from 'cookie-parser';
import cors from 'cors';

import esfRouter from './routes/esfPatrimonio.routes.js';

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
app.use('/caratula', caratulaRouter);
app.use('/detalleRenglones', detalleRenglonesRouter);
app.use('/form110', form110Router);
app.use('/ingFact', ingFactRouter);
app.use('/login', loginRouter);
app.use('/room', roomRouter);
app.use('/report', reportRouter);
app.use('/esfPatrimonio', esfRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
