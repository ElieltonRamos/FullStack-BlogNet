import MemoryDatabase from "../../src/database/memoryDatabase";
import User from "../../src/interfaces/user";
import ServiceLogin from '../../src/services/serviceLogin';

describe('tests service login', () => {
  let memoryModel: MemoryDatabase<User>
  let loginService: ServiceLogin

  beforeEach(() => {
    memoryModel = new MemoryDatabase();
    loginService = new ServiceLogin(memoryModel);
  });

  it('should login a user', async () => {
    const userRegistered = {id: 1, email: 'user@mail.com', password: '123456'}
    memoryModel.memory.push(userRegistered);
    const { status, data } = await loginService.login(userRegistered.email, userRegistered.password);
    expect(status).toBe('ok');
    expect(data).toHaveProperty('token');
  });

  it('should not login a user with invalid email', async () => {
    const { status, data } = await loginService.login('', '123456');
    expect(status).toBe('unauthorized');
    expect(data).toEqual({ message: 'Invalid email or password' });
  });
  
});