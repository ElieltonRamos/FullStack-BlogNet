import { BlogPostCreate } from "../types/blogPost";
import { UserLogin } from "../types/user";

const BASE_URL: string = 'http://localhost:3001';

type Response = {
  status: number;
  data: { message: string } | { token: string };
};

export const requestLogin = async (body: UserLogin): Promise<Response | string> => {
  try {
    const configFetch = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    const request = await fetch(`${BASE_URL}/login`, configFetch);
    const response = await request.json();
    await new Promise(resolve => setTimeout(resolve, 500)); // remover essa linha apos desenvolvimento
    return { status: request.status, data: response };
  } catch (error) {
    return 'error network';
  }
};

export const requestRegister = async (body: UserLogin): Promise<Response | string> => {
  try {
    const configFetch = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    const request = await fetch(`${BASE_URL}/register`, configFetch);
    const response = await request.json();
    await new Promise(resolve => setTimeout(resolve, 500)); // remover essa linha apos desenvolvimento
    return { status: request.status, data: response };
  } catch (error) {
    return 'error network';
  }
}

export const requestBlogPosts = async (token: string, sorted: boolean, user?: boolean) => {
  try {
    const configFetch = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application',
        'Authorization': `Bearer ${token}`
      })
    };
    const orderPosts = sorted ? '?sorted=asc' : '?sorted=desc';
    const userPosts = user ? `&user=${user}` : '';
    const route = '/posts'
    const path = BASE_URL + route + orderPosts + userPosts;
    const request = await fetch(path, configFetch);
    const response = await request.json();
    await new Promise(resolve => setTimeout(resolve, 500)); // remover essa linha apos desenvolvimento
    return { status: request.status, data: response };
  } catch (error) {
    console.log(error);
    return 'error network';
  }
};

export const requestCreatePost = async (token: string, body: BlogPostCreate) => {
  try {
    const configFetch = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };
    const request = await fetch(`${BASE_URL}/posts`, configFetch);
    const response = await request.json();
    await new Promise(resolve => setTimeout(resolve, 500)); // remover essa linha apos desenvolvimento
    return { status: request.status, data: response };
  } catch (error) {
    console.log(error);
    return 'error network';
  }
}
