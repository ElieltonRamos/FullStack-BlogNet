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

export async function requestDeletePost(post: BlogPost): Promise<Response<MsgBackend>> {
  const response = await request('DELETE', `/posts/${post.id}`, post);
  return response;
}

// export const requestLogin = async (body: UserLogin): Promise<Response | string> => {
//   try {
//     const configFetch = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: new Headers({ 'Content-Type': 'application/json' })
//     };
//     const request = await fetch(`${BASE_URL}/login`, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     return 'error network';
//   }
// };

// export const requestRegister = async (body: User): Promise<Response | string> => {
//   try {
//     const configFetch = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: new Headers({ 'Content-Type': 'application/json' })
//     };
//     const request = await fetch(`${BASE_URL}/register`, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     return 'error network';
//   }
// }

// export const requestBlogPosts = async (token: string, sorted: boolean, user?: boolean) => {
//   try {
//     const configFetch = {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application',
//         'Authorization': `Bearer ${token}`
//       })
//     };
//     const orderPosts = sorted ? '?sorted=asc' : '?sorted=desc';
//     const userPosts = user ? `&user=${user}` : '';
//     const route = '/posts'
//     const path = BASE_URL + route + orderPosts + userPosts;
//     const request = await fetch(path, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     console.log(error);
//     return 'error network';
//   }
// };

// export const requestCreatePost = async (token: string, body: BlogPostCreate) => {
//   try {
//     const configFetch = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       })
//     };
//     const request = await fetch(`${BASE_URL}/posts`, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     console.log(error);
//     return 'error network';
//   }
// }

// export const requestUser = async (token: string) => {
//   try {
//     const configFetch = {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       })
//     };
//     const patch = `${BASE_URL}/register/user`;
//     const request = await fetch(patch, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     console.log(error);
//     return 'error network';
//   }
// }

// export const requestEditUser = async (token: string, body: UserNoPassword) => {
//   try {
//     const configFetch = {
//       method: 'PATCH',
//       body: JSON.stringify(body),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       })
//     };
//     const patch = `${BASE_URL}/register/user`;
//     const request = await fetch(patch, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     console.log(error);
//     return 'error network';
//   }
// }

// export const requestEditPost = async (token: string, body: BlogPostEdit) => {
//   try {
//     const configFetch = {
//       method: 'PATCH',
//       body: JSON.stringify(body),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       })
//     };
//     const patch = `${BASE_URL}/posts/${body.id}`;
//     const request = await fetch(patch, configFetch);
//     const response = await request.json();
//     return { status: request.status, data: response };
//   } catch (error) {
//     console.log(error);
//     return 'error network';
//   }
// }

// export const requestDeletePost = async (token: string, body: BlogPost) => {
//   try {
//     const configFetch = {
//       method: 'DELETE',
//       body: JSON.stringify(body),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       })
//     };
//     const patch = `${BASE_URL}/posts/${body.id}`;
//     const request = await fetch(patch, configFetch);
//     return { status: request.status };
//   } catch (error) {
//     console.log(error);
//     return 'error network';
//   }
// }


