import MemoryDatabase from '../../src/database/memoryDatabase';
import ServiceRegister from '../../src/services/serviceRegister';
import User from '../../src/interfaces/user';
import { newUser, userBody } from '../mocks/mockUser';

describe('tests service user', () => {

  let memoryModel: MemoryDatabase<User>
  let registerService: ServiceRegister

  beforeEach(() => {
    memoryModel = new MemoryDatabase();
    registerService = new ServiceRegister(memoryModel);
  });

  it('should create a new user', async () => {
    const response = await registerService.create(userBody);
    expect(response.status).toBe('created');
    expect(response.data).toHaveProperty('token')
  })

  it('should not create a new user with the same email', async () => {
    const userRegistered = {email: 'created@email.com', password: 'test'}
    await memoryModel.create(newUser);
    const { status, data } = await registerService.create(userBody);
    expect(status).toBe('conflict');
    expect(data).toEqual({ message: 'Email already registered' });
  });
})