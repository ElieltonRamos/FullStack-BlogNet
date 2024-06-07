import { NextFunction, Request, Response } from 'express';

function validateString(image: string) {
  const msgError = 'Invalid image';
  const initialPath = 'data:image/jpeg;base64';
  const initialURL = 'https://';
  const suspiciousTexts = ['.js', '.txt', '.py', '.xml', '.html', '.ts',
    '.tsx', '.json', '.sh', 'script'];

  try {
    const imageExists = image !== undefined && image !== '' && image !== null;
    const imageIsValid = image.startsWith(initialPath) || image.startsWith(initialURL);
    if (imageExists && !imageIsValid) {
      return { message: msgError };
    }
    if (suspiciousTexts.some((text) => image.includes(text))) {
      return { message: msgError };
    }
    return 'ok';
  } catch (error) {
    return 'ok';
  }
}

export function validateImage(req: Request, res: Response, next: NextFunction) {
  const { image } = req.body;

  const result = validateString(image);

  if (typeof result !== 'string') {
    return res.status(400).json({ message: result.message });
  }
  
  next();
}