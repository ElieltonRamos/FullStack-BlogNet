import MemoryDatabase from '../../src/database/memoryDatabase';
import ControllerLogin from '../../src/controllers/controllerLogin';
import ServiceLogin from '../../src/services/serviceLogin';
import User from '../../src/interfaces/user';
import { Request, Response } from 'express';

describe('tests controller Login', () => {

  let memoryModel: MemoryDatabase<User>
  let serviceLogin: ServiceLogin
  let controllerLogin: ControllerLogin
  jest.mock('../../src/services/serviceLogin')
  const req = {} as Request;
  const res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;


  beforeEach(() => {
    memoryModel = new MemoryDatabase();
    serviceLogin = new ServiceLogin(memoryModel);
    controllerLogin = new ControllerLogin(serviceLogin);
  });

  it('should login a user', async () => {
    req.body = { email: 'user@email.com', password: '123456' };
    serviceLogin.login = jest.fn().mockReturnValue({ status: 'ok', data: { token: 'token' }});
    await controllerLogin.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ token: 'token' });
  });

  it('should return unauthorized', async () => {
    req.body = { email: 'user', password: '123456' };
    serviceLogin.login = jest.fn().mockReturnValue({ status: 'unauthorized', data: { message: 'Invalid email or password' }});
    await controllerLogin.login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ message: 'Invalid email or password' });
  });
});