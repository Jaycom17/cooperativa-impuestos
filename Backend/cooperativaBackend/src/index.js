//Dependences
import express from 'express';
import cors from 'cors';
import cookieParse from 'cookie-parser';

//Regular routes
import userRouter from './routes/user.routes.js';
import roomRouter from './routes/room.routes.js';
import studentRouter from './routes/student.routes.js';
import loginRouter from './routes/login.routes.js';

//Forms routes
import caratulaRouter from './routes/caratula.routes.js';
import detalleRenglonesRouter from './routes/detalleRenglones.routes.js';
import form110Router from './routes/form110.routes.js';
import ingFactRouter from './routes/ingFact.routes.js';
import esfRouter from './routes/esfPatrimonio.routes.js';
import ImpDifRouter from './routes/impuestoDiferido.routes.js';
import rentaLiquidaRouter from './routes/rentaLiquida.routes.js';
import activosFijosRouter from './routes/activosFijos.routes.js';
import resumenESFRouter from './routes/ingFact.routes.js';

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
app.use('/login', loginRouter);

app.use('/activosfijos', activosFijosRouter);
app.use('/caratula', caratulaRouter);
app.use('/detallerenglones', detalleRenglonesRouter);
app.use('/form110', form110Router);
app.use('/ingfact', ingFactRouter);
app.use('/esfpatrimonio', esfRouter);
app.use('/impuestodiferido', ImpDifRouter);
app.use('/rentaliquida', rentaLiquidaRouter);
app.use('/resumenesf', resumenESFRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
