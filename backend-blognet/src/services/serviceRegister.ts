import ServiceResponse from '../interfaces/serviceResponse';
import User, { CreateUser, UserNoPassword } from '../interfaces/user';
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

  async find(id: number): Promise<ServiceResponse<UserNoPassword | null>> {
    const user = await this.model.findById(id);
    if (!user) return { status: 'notFound', data: { message: 'User not found' } };
    const { name, email, image } = user;
    const userNoPassword = { id, name, email, image };
    return { status: 'ok', data: userNoPassword };
  }

  async update(id: number, user: UserNoPassword): Promise<ServiceResponse<UserNoPassword>> {
    const userExists = await this.model.findById(id);
    const { name, email, image } = user;
    if (!userExists) return { status: 'notFound', data: { message: 'User not found' } };

    if (!name) return { status: 'badRequest', data: { message: 'Name is required' } };
    if (!email) return { status: 'badRequest', data: { message: 'Email is required' } };

    const newUser = { ...userExists, name, email, image };
    const updatedUser = await this.model.update(id, newUser);
    console.log(updatedUser);
    if (!updatedUser) return { status: 'serverError', data: { message: 'Error updating user' } };

    const resultUpdate = { id: userExists.id, name, email, image};
    return { status: 'ok', data: resultUpdate };
  }
}

export default ServiceRegister;