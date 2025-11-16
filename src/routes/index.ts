import { Router } from 'express';
const router = Router();

//importação das rotas
import admRouter from './perfils/adm.routes';



//rotas
const rota = '';

router.use(`${rota}/adm`, admRouter);


export default router;