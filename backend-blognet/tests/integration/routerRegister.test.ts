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
});
