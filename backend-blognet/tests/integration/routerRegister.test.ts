import request from 'supertest';
import app from '../../src/app';
import RegisterModel from '../../src/models/modelRegister';

jest.mock('../../src/models/modelRegister');

describe('Register router tests', () => {
  let mockRegisterModel: jest.MockedClass<typeof RegisterModel>;

  beforeEach(() => {
    mockRegisterModel = RegisterModel as jest.MockedClass<typeof RegisterModel>;
    mockRegisterModel.mockClear();
  });
  
  it('should create a user', async () => {
    const newUser = { email: 'newUser@email.com', password: '123456' };
    mockRegisterModel.prototype.create.mockResolvedValue({ ...newUser, id: 1 });

    const response = await request(app).post('/register').send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ token: expect.any(String) });
  });

  it('should return 409 if email is already registered', async () => {
    const newUser = { email: 'newUser@email.com', password: '123456' };
    mockRegisterModel.prototype.findOne.mockResolvedValue({ ...newUser, id: 1 });

    const { status, body } = await request(app).post('/register').send(newUser);

    expect(status).toBe(409);
    expect(body).toEqual({ message: 'Email already registered' });
  });

  it('checks if not sending an email and password returns status 400', async () => {
    const testNotEmail = await request(app).post('/register').send({ password: ''});
    expect(testNotEmail.status).toBe(400);
    expect(testNotEmail.body).toEqual({ message: 'all fields are required' });

    const testNotPassword = await request(app).post('/register').send({ email: 'email' });
    expect(testNotPassword.status).toBe(400);
    expect(testNotPassword.body).toEqual({ message: 'all fields are required' });
  });
});
