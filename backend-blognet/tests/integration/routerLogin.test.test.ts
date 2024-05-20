import request from 'supertest';
import app from '../../src/app';
import RegisterModel from '../../src/models/modelRegister';
import { hashSync } from 'bcryptjs';

jest.mock('../../src/models/modelRegister');

describe('Login router tests', () => {
  let mockRegisterModel: jest.MockedClass<typeof RegisterModel>;

  beforeEach(() => {
    mockRegisterModel = RegisterModel as jest.MockedClass<typeof RegisterModel>;
    mockRegisterModel.mockClear();
  });

  it('it should be possible to login and receive a token', async () => {
    const user = { name:'teste', email: 'user@email.com', password: '123456' };
    const hash = hashSync(user.password)
    mockRegisterModel.prototype.findOne.mockResolvedValue({ ...user, id: 1, password: hash});

    const { status, body } = await request(app).post('/login').send(user);
    expect(status).toBe(200);
    expect(body).toEqual({ token: expect.any(String) });
  });

  it('should return 500 when an error occurs', async () => {
    mockRegisterModel.prototype.findOne.mockImplementation(() => { throw new Error('Error') });

    const { status, body } = await request(app).post('/login').send({ email: 'email', password: 'password' });
    expect(status).toBe(500);
    expect(body).toEqual({ message: 'Server Error' });
  });

  it('checks if not sending an email and password returns status 400', async () => {
    const testNotEmail = await request(app).post('/login').send({ password: '123'});
    expect(testNotEmail.status).toBe(400);
    expect(testNotEmail.body).toEqual({ message: 'Email is required' });

    const testNotPassword = await request(app).post('/login').send({ email: 'email' });
    expect(testNotPassword.status).toBe(400);
    expect(testNotPassword.body).toEqual({ message: 'Password is required' });
  });

  it('should return 401 if email is not registered', async () => {
    mockRegisterModel.prototype.findOne.mockResolvedValue(null);

    const { status, body } = await request(app).post('/login').send({ email: 'email', password: 'password' });
    expect(status).toBe(401);
    expect(body).toEqual({ message: 'email is not registered' });
  });

});