import { Request, Response } from 'express';
import AbstractController from './abstractController';
import BlogPost from '../interfaces/blogPost';
import mapStatusHTTP from '../utils/mapStatusHTPP';
import BlogPostService from '../services/serviceBlogPost';

class ControllerBlogPost extends AbstractController<BlogPost> {

  constructor(private blogPostService: BlogPostService) {
    super(blogPostService);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { title, content, user } = req.body;
    const postInfo = { title, content, userId: user.id };
    const { status, data } = await this.blogPostService.create(postInfo);
    return res.status(mapStatusHTTP(status)).send(data);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, content, user } = req.body;
    const postInfo = { title, content, userId: user.id };
    const { status, data } = await this.blogPostService.update(Number(id), postInfo);
    return res.status(mapStatusHTTP(status)).send(data);
  }

}

export default ControllerBlogPost;