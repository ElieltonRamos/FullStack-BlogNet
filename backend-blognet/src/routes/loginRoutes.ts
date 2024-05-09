import { Request, Response, Router } from 'express';
import ControllerLogin from '../controllers/controllerLogin';
import ServiceLogin from '../services/serviceLogin';
import MemoryDatabase from '../database/memoryDatabase';
import User from '../interfaces/user';
import RegisterUserModel from '../models/modelRegister';
import validateUser from '../middlewares/validateUser';

export const memoryDatabase = new MemoryDatabase<User>();
memoryDatabase.create({ id: 1, email: 'user@email.com', password: '123456'});
const modelregisterUser = new RegisterUserModel(memoryDatabase);
const serviceLogin = new ServiceLogin(modelregisterUser);
const controllerLogin = new ControllerLogin(serviceLogin);

const loginRoutes = Router();

loginRoutes.post(
  '/',
  validateUser,
  (req: Request, res: Response) => controllerLogin.login(req, res));

export default loginRoutes;