import ModelDatabase from './modelDatabase';

export type IUserModel = ModelDatabase<User>;

interface User {
  readonly id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export default User;