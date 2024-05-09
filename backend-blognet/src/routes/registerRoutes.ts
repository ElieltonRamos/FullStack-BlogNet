import { Request, Response, Router } from 'express';
import ConstrollerRegister from '../controllers/constrollerRegister';
import ServiceRegister from '../services/serviceRegister';
import RegisterUserModel from '../models/modelRegister';
import validateUser from '../middlewares/validateUser';
import { memoryDatabase } from './loginRoutes';

const modelregisterUser = new RegisterUserModel(memoryDatabase);
const serviceRegister = new ServiceRegister(modelregisterUser);
const constrollerRegister = new ConstrollerRegister(serviceRegister);

const registerRoutes = Router();

registerRoutes.post(
  '/',
  validateUser,
  (req: Request, res: Response) => constrollerRegister.create(req, res));

export default registerRoutes;