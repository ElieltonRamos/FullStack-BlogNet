import BlogPost, { CleanBlogPost } from '../interfaces/blogPost';
import modelDatabase from '../interfaces/modelDatabase';
import ServiceResponse from '../interfaces/serviceResponse';
import AbstractService from './abstractService';

class BlogPostService extends AbstractService<BlogPost> {
  constructor(private blogPostModel: modelDatabase<BlogPost>) {
    super(blogPostModel);
  }

  async create(post: CleanBlogPost): Promise<ServiceResponse<BlogPost>> {
    const { title, content, userId } = post;
    if (!title || !content || !userId) {
      return {
        status: 'unprocessableEntity',
        data: { message: 'necessary to inform content and title and userId' }
      };
    }

    const dateCreated = new Date();
    const newPost = await this.blogPostModel
      .create({ ...post, created: dateCreated, updated: dateCreated });
    return { status: 'created', data: newPost };
  }

  async update(id: number, data: CleanBlogPost): Promise<ServiceResponse<BlogPost>> {
    const post = await this.blogPostModel.findById(id);
    if (!post) return { status: 'notFound', data: { message: 'post not found' } };

    if (post.userId !== data.userId) {
      return {
        status: 'unauthorized',
        data: { message: 'user not authorized to update this post' }};
    }

    const updatedPost = {
      id: post.id,
      title: data.title,
      content: data.content,
      userId: post.userId,
      created: post.created,
      updated: new Date()
    };

    const affectedRows = await this.blogPostModel.update(id, updatedPost);
    if (affectedRows === 0) return { status: 'serverError', data: { message: 'internal error' } };
    
    return { status: 'ok', data: updatedPost };
  }

  async listAll(userId: number, sorted: string): Promise<ServiceResponse<BlogPost[]>> {
    const allPostsByUser = await this.blogPostModel.findAll(userId);
    const sortedPosts = allPostsByUser.sort((a, b) => a.created.getTime() - b.created.getTime());
    if (sorted === 'asc') return { status: 'ok', data: sortedPosts };
    if (sorted === 'desc') return { status: 'ok', data: sortedPosts.reverse() };
    return { status: 'ok', data: allPostsByUser };
  }

}

export default BlogPostService;