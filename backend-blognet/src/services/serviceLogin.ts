import modelDatabase from '../interfaces/modelDatabase';
import ServiceResponse from '../interfaces/serviceResponse';
import User, { Token } from '../interfaces/user';
import JsonWebToken, { Payload } from '../utils/jsonWebToken';
import { compareSync } from 'bcryptjs';

class ServiceLogin {

  constructor(
    protected model: modelDatabase<User>,
  ) { }

  async validateLogin(email: string, password: string): Promise<string | User> {
    const user = await this.model.findOne('email', email);
    const error = 'Invalid email or password';

    if (!user) return error;

    const isValidPassword = compareSync(password, user.password);
    if (!isValidPassword) error;

    return user;
  }

  async login(email: string, password: string): Promise<ServiceResponse<Token>> {
    const validUser = await this.validateLogin(email, password);

    if (typeof validUser === 'string') {
      return { status: 'unauthorized', data: { message: validUser } };
    }

    const payload: Payload = {
      id: validUser.id as number,
      email: validUser.email,
    };

    const token = JsonWebToken.generateToken(payload);
    return { status: 'ok', data: { token } };
  }
}

export default ServiceLogin;