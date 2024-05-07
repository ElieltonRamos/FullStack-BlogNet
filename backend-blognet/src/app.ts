import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

routes.get('/', (_req, res) => res.json({ message: 'Backend Online' }));

app.use(routes);

export default app;