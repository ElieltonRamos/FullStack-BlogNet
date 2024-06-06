import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTPP';

const msgErro = {
  allFields: 'All fields are required',
  email: 'Email is required',
  emailInvalid: 'Invalid email',
  password: 'Password is required',
  passwordLength: 'Password must be at least 6 characters',
  name: 'Name is required',
  nameLength: 'Name must be at least 3 characters',
};

export function validateEmail(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!email && !password) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.allFields });
  }

  if (!email || email === '') {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.email });
  }

  if (!regexEmail.test(email)) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.emailInvalid });
  }
  next();
}

export function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.password });
  }

  if (password.length < 6) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.passwordLength });
  }

  next();
}

export function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.name });
  }

  if (name.length < 3) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.nameLength });
  }
  
  next();
}

export function validadeUserLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.allFields });
  }

  if (!email) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.email });

  if (!password) return res.status(mapStatusHTTP('badRequest')).json({ message: msgErro.password });

  next();
}