import request from 'supertest';
import app from '../../src/app';
import BlogPostModel from '../../src/models/modelBlogPost';
import { mockPostDateString, mockPosts } from '../mocks/mockBlogPosts';
import JsonWebToken from '../../src/utils/jsonWebToken';

jest.mock('../../src/models/modelBlogPost');

describe('blogPosts router tests', () => {
  let mockModelBlogPost: jest.MockedClass<typeof BlogPostModel>;

  beforeEach(() => {
    mockModelBlogPost = BlogPostModel as jest.MockedClass<typeof BlogPostModel>;
    JsonWebToken.verifyToken = jest.fn().mockReturnValue({ id: 1 });
    mockModelBlogPost.mockClear();
  });

  it('It should be possible to create a blog post', async () => {
    const newBlogPost = mockPosts[0];
    mockModelBlogPost.prototype.create.mockResolvedValue(newBlogPost);

    const { status, body } = await request(app).post('/posts').send(newBlogPost).set({ Authorization: 'Bearer token' });

    expect(status).toBe(201);
    expect(body).toEqual(mockPostDateString[0]);
  });

  it('should return 401 when token invalid', async () => {
    JsonWebToken.verifyToken = jest.fn().mockReturnValue('token-invalid');

    const { status, body } = await request(app).post('/posts').send(mockPosts[0]).set({ authorization: 'Bearer invalidtoken' });

    expect(status).toBe(401);
    expect(body).toEqual({ message: 'Token must be a valid token' });

    const response = await request(app).get('/posts');
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Token not found' });
  });

  it('It should be possible to get all blog posts by user', async () => {
    const postByUser1 = mockPosts.filter((post) => post.userId === 1);
    mockModelBlogPost.prototype.findAll.mockResolvedValue(postByUser1);

    const { status, body } = await request(app).get('/posts').set({ Authorization: 'Bearer token' });
    const postByUser = mockPostDateString.filter((post) => post.userId === 1);

    expect(status).toBe(200);
    expect(body).toEqual(postByUser);
  });

  it('It should be possible to get a blog post by id', async () => {
    const post = mockPosts[0];
    mockModelBlogPost.prototype.findById.mockResolvedValue(post);

    const { status, body } = await request(app).get(`/posts/${post.id}`).set({ Authorization: 'Bearer token' });

    expect(status).toBe(200);
    expect(body).toEqual(mockPostDateString[0]);
  });

  it('It should be possible to update a blog post', async () => {
    const post = mockPosts[0];
    const updatedPost = { ...post, title: 'Updated title' };
    mockModelBlogPost.prototype.findById.mockResolvedValue(post);
    mockModelBlogPost.prototype.update.mockResolvedValue(1);

    const { status, body } = await request(app).patch(`/posts/${post.id}`).send(updatedPost).set({ Authorization: 'Bearer token' });
    expect(status).toBe(200);
    expect(body).toEqual({ ...mockPostDateString[0], title: 'Updated title', updated: expect.any(String) });
  });

  it('It should be possible to delete a blog post', async () => {
    const post = mockPosts[0];
    mockModelBlogPost.prototype.findById.mockResolvedValue(post);
    mockModelBlogPost.prototype.delete.mockResolvedValue(1);

    const { status, body } = await request(app).delete(`/posts/${post.id}`).set({ Authorization: 'Bearer token' });

    expect(status).toBe(204);
    expect(body).toEqual({});
  });
});