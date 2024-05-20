import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTPP';

const msgErro = {
  allFields: 'all fields are required',
  email: 'Email is required',
  password: 'Password is required',
  name: 'Name is required'
};

function validateCreateUser(req: Request, res: Response, next: NextFunction) {
  const { email, password, name} = req.body;
  if (!email && !password) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.allFields });
  }

  if (!email) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.email });

  if (!password) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.password });

  if (!name) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.name});

  next();
}

function validadeUserLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.allFields });
  }

  if (!email) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.email });

  if (!password) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.password });

  next();
}

export default {
  validateCreateUser,
  validadeUserLogin
};