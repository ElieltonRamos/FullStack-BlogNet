import MemoryDatabase from '../../src/database/memoryDatabase';
import ControllerRegister from '../../src/controllers/constrollerRegister';
import ServiceRegister from '../../src/services/serviceRegister';
import User from '../../src/interfaces/user';
import { Request, Response } from 'express';

describe('tests controller user', () => {

  let memoryModel: MemoryDatabase<User>
  let serviceRegister: ServiceRegister
  let controllerRegister: ControllerRegister
  jest.mock('../../src/services/serviceRegister')
  const req = {} as Request;
  const res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;


  beforeEach(() => {
    memoryModel = new MemoryDatabase();
    serviceRegister = new ServiceRegister(memoryModel);
    controllerRegister = new ControllerRegister(serviceRegister);
  });

  it('should create a new user', async () => {
    req.body = { email: 'user@email.com', password: '123456' };
    await controllerRegister.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({ token: expect.any(String) });
  })

  it('should not create a new user with the same email', async () => {
    const userRegistered = {email: 'created@email.com', password: 'test'}
    await memoryModel.create(userRegistered);
    req.body = userRegistered;
    serviceRegister.create = jest.fn().mockReturnValue({ status: 'confict', data: { message: 'Email already registered' } });
    await controllerRegister.create(req, res);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.send).toHaveBeenCalledWith({ message: 'Email already registered' });
  });
})