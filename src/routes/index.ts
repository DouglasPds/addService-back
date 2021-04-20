import { Router } from 'express';
import servicosRouter from './servicos.routes';

const routes = Router();

routes.use('/servicos', servicosRouter);

export default routes;
