import MemoryDatabase from "../../src/database/memoryDatabase";
import BlogPost from "../../src/interfaces/blogPost";
import ServiceBlogPost from '../../src/services/serviceBlogPost';

describe('tests service blogPost', () => {
  let memoryModel: MemoryDatabase<BlogPost>
  let serviceBlogPost: ServiceBlogPost

  beforeEach(() => {
    memoryModel = new MemoryDatabase();
    serviceBlogPost = new ServiceBlogPost(memoryModel);
  });

  it('should must be possible to register a blog post successfully', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    const { status, data } = await serviceBlogPost.create(blogPost);
    expect(status).toBe('created');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('created');
    expect(data).toHaveProperty('updated');
  })

  it('should not be possible to register a blog post without title', async () => {
    const blogPost = { title: null as unknown as string, content: 'Content', userId: 1 };
    const { status, data } = await serviceBlogPost.create(blogPost);
    expect(status).toBe('unprocessableEntity');
    expect(memoryModel.memory).toHaveLength(0);
    expect(data).toEqual({ message: 'necessary to inform content and title'});
  });

  it('should be possible to update a blog post', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    await serviceBlogPost.create(blogPost);
    const updatedPost = { title: 'New Title', content: 'New Content', userId: 1 };
    const { status, data } = await serviceBlogPost.update(1, updatedPost);
    expect(status).toBe('ok');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('created');
    expect(data).toHaveProperty('updated');
    if ('id' in data) {
      expect(data.title).toBe('New Title');
      expect(data.content).toBe('New Content');
    }
  });

  it('should not be possible to update a blog post that does not exist', async () => {
    const updatedPost = { title: 'New Title', content: 'New Content', userId: 1 };
    const { status, data } = await serviceBlogPost.update(1, updatedPost);
    expect(status).toBe('notFound');
    expect(data).toEqual({ message: 'post not found' });
  });

  it('should not be possible to update a blog post that the user is not the owner', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    await serviceBlogPost.create(blogPost);
    const updatedPost = { title: 'New Title', content: 'New Content', userId: 2 };
    const { status, data } = await serviceBlogPost.update(1, updatedPost);
    expect(status).toBe('unauthorized');
    expect(data).toEqual({ message: 'user not authorized to update this post' });
  });

  it('should be list all blog posts the user in asc order', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    await serviceBlogPost.create(blogPost);
    const blogPost2 = { title: 'Title 2', content: 'Content 2', userId: 1 };
    await serviceBlogPost.create(blogPost2);
    const blogPost3 = { title: 'Title 3', content: 'Content 3', userId: 2 };
    await serviceBlogPost.create(blogPost3);
    const posts = await serviceBlogPost.listAll(1, 'asc');
    expect(posts.data).toHaveLength(2);
    expect(posts.status).toBe('ok');
  });

  it('should be list all blog posts the user in descending order', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    await serviceBlogPost.create(blogPost);
    const blogPost2 = { title: 'Title 2', content: 'Content 2', userId: 1 };
    await serviceBlogPost.create(blogPost2);
    const blogPost3 = { title: 'Title 3', content: 'Content 3', userId: 2 };
    await serviceBlogPost.create(blogPost3);
    const posts = await serviceBlogPost.listAll(1, 'desc');
    const { data } = await serviceBlogPost.listAll(1, 'asc');
    expect(posts.data).toHaveLength(2);
    if (!('message' in data)) expect(posts.data).toEqual(data.reverse());
    expect(posts.status).toBe('ok');
  });

  it('should be list all blog posts the user', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    await serviceBlogPost.create(blogPost);
    const blogPost2 = { title: 'Title 2', content: 'Content 2', userId: 1 };
    await serviceBlogPost.create(blogPost2);
    const blogPost3 = { title: 'Title 3', content: 'Content 3', userId: 2 };
    await serviceBlogPost.create(blogPost3);
    const sorted = undefined as unknown as string;
    const posts = await serviceBlogPost.listAll(1, sorted);
    expect(posts.data).toHaveLength(2);
    expect(posts.status).toBe('ok');
  });


  it('should be find a blog post by id', async () => {
    const userId = 1;
    const id = 1;
    const created = new Date();
    const updated = new Date();
    const blogPost = { id, title: 'Title', content: 'Content', userId, created, updated};
    memoryModel.memory.push(blogPost);
    const { status, data } = await serviceBlogPost.find(1, 1);
    expect(status).toBe('ok');
    expect(data).toEqual(blogPost);
  });

  it('should delete a blog post', async () => {
    const blogPost = { title: 'Title', content: 'Content', userId: 1 };
    await serviceBlogPost.create(blogPost);
    const { status, data } = await serviceBlogPost.delete(1, 1);
    expect(status).toBe('noContent');
    expect(data).toEqual({ message: 'post deleted' });
  });

});