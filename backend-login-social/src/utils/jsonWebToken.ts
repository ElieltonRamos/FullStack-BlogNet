import { sign, verify } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'secret';

export interface Payload {
  id: number;
  email: string;
}

class JsonWebToken {
  static generateToken(payload: Payload): string {
    return sign(payload, secretKey);
  }

  static verifyToken = (token: string): Payload | string => {
    try {
      const user = verify(token, secretKey) as Payload;
      return user;
    } catch (error) {
      return 'token-invalid';
    }
  };
}

export default JsonWebToken;
