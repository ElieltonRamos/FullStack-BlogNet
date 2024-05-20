import MemoryDatabase from '../../src/database/memoryDatabase';
import ControllerBlogPost from '../../src/controllers/controllerBlogPost';
import ServiceBlogPost from '../../src/services/serviceBlogPost';
import { Request, Response } from 'express';
import BlogPost from '../../src/interfaces/blogPost';
import { mockPosts } from '../mocks/mockBlogPosts';

describe('tests controller BlogPost', () => {

  let memoryModel: MemoryDatabase<BlogPost>
  let serviceBlogPost: ServiceBlogPost
  let controllerBlogPost: ControllerBlogPost
  jest.mock('../../src/services/serviceBlogPost')
  let req = {} as Request;
  let res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;


  beforeEach(() => {
    memoryModel = new MemoryDatabase();
    serviceBlogPost = new ServiceBlogPost(memoryModel);
    controllerBlogPost = new ControllerBlogPost(serviceBlogPost);
    req = {} as Request;
    res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;
  });

  it('should create a blog post', async () => {
    req.body = { title: 'Hello World', content: 'This is my first blog post!', user: { id: 1} };
    serviceBlogPost.create = jest.fn().mockReturnValue({ status: 'created', data: mockPosts[0]});
    await controllerBlogPost.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith(mockPosts[0]);
  });

  it('should return 500 when an error occurs', async () => {
    req.body = { title: 'Hello World', content: 'This is my first blog post!', user: { id: 1} };
    serviceBlogPost.create = jest.fn().mockImplementation(() => { throw new Error('Error') });
    await controllerBlogPost.create(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Server Error' });

    await controllerBlogPost.update(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Server Error' });

    await controllerBlogPost.listAll(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Server Error' });

    await controllerBlogPost.delete(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Server Error' });
  });

  it('check if it is possible to update a post', async () => {
    req.body = { title: 'Hello World', content: 'This is my first blog post!', user: { id: 1} };
    req.params = { id: '1' };
    serviceBlogPost.update = jest.fn().mockReturnValue({ status: 'ok', data: mockPosts[0]});
    await controllerBlogPost.update(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockPosts[0]);
  });

  it('check if it is possible to list all posts', async () => {
    req.body = { user : { id: 2 } };
    req.query = { sorted: 'desc' };
    serviceBlogPost.listAll = jest.fn().mockReturnValue({ status: 'ok', data: [mockPosts[2]]});
    await controllerBlogPost.listAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([mockPosts[2]]);
  });

  it('check if it is possible to delete a post', async () => {
    req.params = { id: '1' };
    req.body = { user: { id: 1} };
    serviceBlogPost.delete = jest.fn().mockReturnValue({ status: 'ok', data: 'no content'});
    await controllerBlogPost.delete(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('no content');
  });

  it('check if it is possible to get a post by id', async () => {
    req.params = { id: '1' };
    req.body = { user: { id: 1} };
    serviceBlogPost.find = jest.fn().mockReturnValue({ status: 'ok', data: mockPosts[0]});
    await controllerBlogPost.find(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockPosts[0]);
  });
});