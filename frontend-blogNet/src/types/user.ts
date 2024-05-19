export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  image?: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserNoPassword = Omit<User, 'password'>;