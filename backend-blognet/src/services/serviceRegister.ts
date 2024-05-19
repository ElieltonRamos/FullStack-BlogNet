import ServiceResponse from '../interfaces/serviceResponse';
import User, { CreateUser } from '../interfaces/user';
import JsonWebToken from '../utils/jsonWebToken';
import { Token } from '../interfaces/user';
import { hashSync } from 'bcryptjs';
import modelDatabase from '../interfaces/modelDatabase';

class ServiceRegister {
  constructor(protected model: modelDatabase<User>) { }

  async create(user: CreateUser): Promise<ServiceResponse<Token>> {
    const { email, password, name } = user;

    if (!name) return { status: 'badRequest', data: { message: 'Name is required' } };

    const userExists = await this.model.findOne('email', email);

    if (userExists) {
      return { status: 'conflict', data: { message: 'Email already registered' } };
    }

    const passwordHash = hashSync(password);
    const newUser = await this.model.create({ ...user, password: passwordHash });

    if (!newUser.id) return { status: 'serverError', data: { message: 'Error creating user' } };

    const token = JsonWebToken.generateToken({ id: newUser.id, email: newUser.email });
    return { status: 'created', data: { token } };
  }

  async find(id: number): Promise<ServiceResponse<User | null>> {
    const user = await this.model.findById(id);
    if (!user) return { status: 'notFound', data: { message: 'User not found' } };
    return { status: 'ok', data: user };
  }
}

export default ServiceRegister;