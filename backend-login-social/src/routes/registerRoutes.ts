import { Request, Response, Router } from 'express';
import ConstrollerRegister from '../controllers/constrollerRegister';
import ServiceRegister from '../services/serviceRegister';
import RegisterUserModel from '../models/modelRegister';
import { validateEmail, validatePassword } from '../middlewares/validateUser';
import AuthenticateToken from '../middlewares/authenticateToken';

const modelregisterUser = new RegisterUserModel();
const serviceRegister = new ServiceRegister(modelregisterUser);
const constrollerRegister = new ConstrollerRegister(serviceRegister);

const registerRoutes = Router();

registerRoutes.post(
  '/',
  validateEmail,
  validatePassword,
  (req: Request, res: Response) => constrollerRegister.create(req, res));

registerRoutes.get(
  '/user',
  AuthenticateToken.verifyToken,
  (req: Request, res: Response) => constrollerRegister.find(req, res));

registerRoutes.patch(
  '/user',
  AuthenticateToken.verifyToken,
  (req: Request, res: Response) => constrollerRegister.update(req, res)
);

export default registerRoutes;