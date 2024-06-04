import { BlogPost, BlogPostCreate, BlogPostEdit } from "../types/blogPost";
import { CreateUser, Token, User } from "../types/user";

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001';
const ERROR_NETWORK = 'Oops, looks like we had a little server problem. Please try again later!';
export type MsgBackend = { message: string };
type Response<t> =  t | MsgBackend;

const configFetch = (method: string, body?: CreateUser | BlogPostCreate) => {
  return {
    method,
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
};

export async function request(method: string, route: string, body?: CreateUser | BlogPostCreate) {
  try {
    const config = configFetch(method, body);
    const patch = BASE_URL + route;

    const response = await fetch(patch, config);
    const data = await response.json();
    console.log('data:', response);
    return data;
  } catch (error) {
    console.log('Error in request:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestLogin(user: CreateUser): Promise<Response<Token>> {
  const response = await request('POST', '/login', user);
  return response;
}

export async function requestRegister(user: CreateUser): Promise<Response<Token>> {
  const response = await request('POST', '/register', user);
  return response;
}

export async function requestBlogPosts(sorted: boolean, user?: boolean): Promise<Response<BlogPost[]>> {
  const orderPosts = sorted ? '?sorted=asc' : '?sorted=desc';
  const userPosts = user ? `&user=${user}` : '';
  const route = '/posts';
  const response = await request('GET', route + orderPosts + userPosts);
  return response;
}

export async function requestCreatePost(post: BlogPostCreate): Promise<Response<BlogPost>> {
  const response = await request('POST', '/posts', post);
  return response;
}

export async function requestUser(): Promise<Response<User>> {
  const response = await request('GET', '/register/user');
  return response;
}

export async function requestEditUser(user: CreateUser): Promise<Response<User>> {
  const response = await request('PATCH', '/register/user', user);
  return response;
}

export async function requestEditPost(post: BlogPostEdit): Promise<Response<BlogPost>> {
  const response = await request('PATCH', `/posts/${post.id}`, post);
  return response;
}

export async function requestDeletePost(postId: number): Promise<Response<MsgBackend>> {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, configFetch('DELETE'));
  const result = response.status === 204 ? { message: 'Post deleted' } : response.json();
  const data = await result;
  return data;
}