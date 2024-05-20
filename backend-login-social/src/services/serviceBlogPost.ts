import BlogPost, { CleanBlogPost } from '../interfaces/blogPost';
import modelDatabase from '../interfaces/modelDatabase';
import ServiceResponse from '../interfaces/serviceResponse';
import AbstractService from './abstractService';

class BlogPostService extends AbstractService<BlogPost> {
  constructor(private blogPostModel: modelDatabase<BlogPost>) {
    super(blogPostModel);
  }

  async validateOwner(postId: number, userId: number)
  : Promise<ServiceResponse<BlogPost> | BlogPost> {
    const post = await this.blogPostModel.findById(postId);
    if (!post) return { status: 'notFound', data: { message: 'post not found' } };

    if (post.userId !== userId) {
      return {
        status: 'unauthorized',
        data: { message: 'user not authorized to update this post' }
      };
    }
    return post;
  }

  async create(post: CleanBlogPost): Promise<ServiceResponse<BlogPost>> {
    const { title, content, userId } = post;
    if (!title || !content || !userId) {
      return {
        status: 'unprocessableEntity',
        data: { message: 'necessary to inform content and title' }
      };
    }

    const dateCreated = new Date();
    const newPost = await this.blogPostModel
      .create({ ...post, created: dateCreated, updated: dateCreated });
    return { status: 'created', data: newPost };
  }

  async update(id: number, data: CleanBlogPost): Promise<ServiceResponse<BlogPost>> {
    const post = await this.validateOwner(id, data.userId);

    if ('status' in post) return post;
    const newContent = data.content || post.content;
    const newTitle = data.title || post.title;

    const updatedPost = {
      id: post.id,
      title: newTitle,
      content: newContent,
      userId: post.userId,
      image: data.image || post.image,
      created: post.created,
      updated: new Date()
    };

    const affectedRows = await this.blogPostModel.update(id, updatedPost);
    if (affectedRows === 0) return { status: 'serverError', data: { message: 'internal error' } };

    return { status: 'ok', data: updatedPost };
  }

  async listAll(sorted: string, userId: number): Promise<ServiceResponse<BlogPost[]>> {
    const allPosts = await this.blogPostModel.findAll();
    const sortedPosts = [...allPosts].sort((a, b) => b.created.getTime() - a.created.getTime());
    if (sorted === 'desc' && !userId) return { status: 'ok', data: sortedPosts };
    if (userId && sorted === 'desc') {
      const userPosts = sortedPosts.filter((post) => post.userId === userId);
      return { status: 'ok', data: userPosts };
    }
    if (userId && sorted === 'asc') {
      const userPosts = allPosts.filter((post) => post.userId === userId);
      return { status: 'ok', data: userPosts };
    }
    return { status: 'ok', data: allPosts };
  }

  async find(postId: number, userId: number): Promise<ServiceResponse<BlogPost>> {
    const post = await this.validateOwner(postId, userId);
    if ('status' in post) return post;
    return { status: 'ok', data: post };
  }

  async delete(postId: number, userId: number): Promise<ServiceResponse<BlogPost | string>> {
    const post = await this.validateOwner(postId, userId);
    if ('status' in post) return post;

    const affectedRows = await this.blogPostModel.delete(postId);
    if (affectedRows === 0) return { status: 'serverError', data: { message: 'internal error' } };
    return { status: 'noContent', data: { message: 'post deleted'} };
  }

}

export default BlogPostService;