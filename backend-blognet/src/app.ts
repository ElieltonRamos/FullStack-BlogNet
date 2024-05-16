import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

routes.get('/', (_req, res) => res.json({ message: 'Backend Online' }));

app.use(routes);

export default app;