import ModelDatabase from './modelDatabase';

export type IUserModel = ModelDatabase<User>;

export interface Token { token: string }

interface User {
  readonly id: number;
  email: string;
  password: string;
}

export default User;