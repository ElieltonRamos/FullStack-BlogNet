import request from 'supertest';
import app from '../../src/app';
import RegisterModel from '../../src/models/modelRegister';
import { newUser, userBody } from '../mocks/mockUser';

jest.mock('../../src/models/modelRegister');

describe('Register router tests', () => {
  let mockRegisterModel: jest.MockedClass<typeof RegisterModel>;

  beforeEach(() => {
    mockRegisterModel = RegisterModel as jest.MockedClass<typeof RegisterModel>;
    mockRegisterModel.mockClear();
  });
  
  it('should create a user', async () => {
    mockRegisterModel.prototype.create.mockResolvedValue(newUser);

    const response = await request(app).post('/register').send(userBody);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ token: expect.any(String) });
  });

  it('should return 409 if email is already registered', async () => {
    mockRegisterModel.prototype.findOne.mockResolvedValue(newUser);

    const { status, body } = await request(app).post('/register').send(userBody);

    expect(status).toBe(409);
    expect(body).toEqual({ message: 'Email already registered' });
  });

  it('checks if not sending an email and password returns status 400', async () => {
    const testNotEmail = await request(app).post('/register').send({ password: '123'});
    expect(testNotEmail.status).toBe(400);
    expect(testNotEmail.body).toEqual({ message: 'Email is required' });

    const testNotPassword = await request(app).post('/register').send({ email: 'email' });
    expect(testNotPassword.status).toBe(400);
    expect(testNotPassword.body).toEqual({ message: 'Password is required' });
  });

  it('checks if not sending an name returns status 400', async () => {
    const testNotName = await request(app).post('/register').send({ email: 'email', password: '123' });
    expect(testNotName.status).toBe(400);
    expect(testNotName.body).toEqual({ message: 'Name is required' });
  });
});
