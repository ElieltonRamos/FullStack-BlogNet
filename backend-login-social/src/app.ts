import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

routes.get('/', (_req, res) => res.json({ message: 'Backend Online' }));

app.use(routes);

export default app;