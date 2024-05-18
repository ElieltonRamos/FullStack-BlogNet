import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTPP';

function validateUser(req: Request, res: Response, next: NextFunction) {
  const { email, password} = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: 'all fields are required' });
  }
  next();
}

export default validateUser;