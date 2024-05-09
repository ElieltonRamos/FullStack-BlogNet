import BlogPost from '../interfaces/blogPost';
import modelDatabase from '../interfaces/modelDatabase';
import ServiceResponse from '../interfaces/serviceResponse';
import AbstractService from './abstractService';

class BlogPostService extends AbstractService<BlogPost> {
  constructor(private blogPostModel: modelDatabase<BlogPost>) {
    super(blogPostModel);
  }

  async create(post: BlogPost): Promise<ServiceResponse<BlogPost>> {
    const { title, content, userId } = post;
    if (!title || !content || !userId) {
      return {
        status: 'unprocessableEntity',
        data: { message: 'necessary to inform content and title and userId' }
      };
    }

    const newPost = await this.blogPostModel.create(post);
    return { status: 'created', data: newPost };
  }

  async update(id: number, data: BlogPost): Promise<ServiceResponse<number>> {
    const post = await this.blogPostModel.findById(id);
    if (!post) return { status: 'notFound', data: { message: 'post not found' } };

    if (post.userId !== data.userId) {
      return {
        status: 'unauthorized',
        data: { message: 'user not authorized to update this post' } };
    }

    const updatedPost = await this.blogPostModel.update(id, data);
    return { status: 'ok', data: updatedPost };
  }

  async listAll(userId: number): Promise<ServiceResponse<BlogPost[]>> {
    const allPostsByUser = await this.blogPostModel.findAll(userId);
    return { status: 'ok', data: allPostsByUser };
  }

}

export default BlogPostService;