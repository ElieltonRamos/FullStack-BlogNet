import MemoryDatabase from '../../src/database/memoryDatabase';
import ServiceRegister from '../../src/services/serviceRegister';
import User from '../../src/interfaces/user';

describe('tests model user', () => {
  it('should create a new user', async () => {
    let memoryModel = new MemoryDatabase<User>();
    let userService = new ServiceRegister(memoryModel);
    const response = await userService.create({email: 'test@email.com', password: '123'});
    expect(response.status).toBe('created');
    expect(response.data).toHaveProperty('token')
  })
})