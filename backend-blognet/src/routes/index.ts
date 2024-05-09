import { Router } from 'express';
import registerRoutes from './registerRoutes';
import loginRoutes from './loginRoutes';

const routes = Router();

routes.use('/register', registerRoutes);
routes.use('/login', loginRoutes);

export default routes;