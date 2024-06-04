export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  image?: string;
};

export type Token = {
  token: string;
}

export type CreateUser = {
  name?: string;
  email: string;
  password?: string;
}

export type UserLogin = {
  email: string;
  password: string;
};

export type UserNoPassword = Omit<User, 'password'>;