import ModelDatabase from './modelDatabase';

export type IUserModel = ModelDatabase<User>;

export interface Token { token: string }

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  image: string;
}

export default User;