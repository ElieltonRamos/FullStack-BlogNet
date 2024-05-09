import { Request, Response, Router } from 'express';
import ControllerLogin from '../controllers/controllerLogin';
import ServiceLogin from '../services/serviceLogin';
import RegisterUserModel from '../models/modelRegister';
import validateUser from '../middlewares/validateUser';

// const memoryModelDatabase = new MemoryDatabase<User>();
const modelregisterUser = new RegisterUserModel();
const serviceLogin = new ServiceLogin(modelregisterUser);
const controllerLogin = new ControllerLogin(serviceLogin);

const loginRoutes = Router();

loginRoutes.post(
  '/',
  validateUser,
  (req: Request, res: Response) => controllerLogin.login(req, res));

export default loginRoutes;