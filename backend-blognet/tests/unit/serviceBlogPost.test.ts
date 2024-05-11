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

});