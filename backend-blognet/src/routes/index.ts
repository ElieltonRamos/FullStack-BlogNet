import { Router } from 'express';
import registerRoutes from './registerRoutes';
import loginRoutes from './loginRoutes';
import blogPostsRoutes from './blogPostsRoutes';

const routes = Router();

routes.use('/register', registerRoutes);
routes.use('/login', loginRoutes);
routes.use('/posts', blogPostsRoutes);

export default routes;