import ServiceResponse from '../interfaces/serviceResponse';
import User from '../interfaces/user';
import JsonWebToken from '../utils/jsonWebToken';
import AbstractService from './abstractService';
import { Token } from '../interfaces/user';

class ServiceRegister extends AbstractService<User> {
  override async create(user: User): Promise<ServiceResponse<Token>> {
    const { email, password } = user;

    if (!email || !password) {
      return { status: 'badRequest', data: { message: 'Email and password are required' } };
    }

    const allUsers = await this.model.listAll();
    const userExists = allUsers.find((user) => user.email === email);

    if (userExists) {
      return { status: 'confict', data: { message: 'Email already registered' } };
    }

    const newUser = await this.model.create(user);

    const token = JsonWebToken.generateToken({ id: newUser.id, email: newUser.email });
    return { status: 'ok', data: { token } };
  }
}

export default ServiceRegister;