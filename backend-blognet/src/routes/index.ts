import { Router } from 'express';
import registerRoutes from './registerRoutes';

const routes = Router();

routes.use('/register', registerRoutes);

export default routes;