import { Request, Response, Router } from 'express';
import AuthenticateToken from '../middlewares/authenticateToken';
import ControllerBlogPost from '../controllers/controllerBlogPost';
import BlogPostService from '../services/serviceBlogPost';
import BlogPostModel from '../models/modelBlogPost';
import { validateImage } from '../middlewares/validateImage';

// const memoryModelDatabase = new MemoryDatabase<BlogPost>();
const modelBlogPosts = new BlogPostModel();
const serviceBlogPosts = new BlogPostService(modelBlogPosts);
const controlllerBlogPosts = new ControllerBlogPost(serviceBlogPosts);

const blogPostsRoutes = Router();

blogPostsRoutes.get(
  '/',
  AuthenticateToken.verifyToken,
  (req: Request, res: Response) => controlllerBlogPosts.listAll(req, res));

blogPostsRoutes.post(
  '/',
  AuthenticateToken.verifyToken,
  validateImage,
  (req: Request, res: Response) => controlllerBlogPosts.create(req, res));

blogPostsRoutes.patch(
  '/:id',
  AuthenticateToken.verifyToken,
  validateImage,
  (req: Request, res: Response) => controlllerBlogPosts.update(req, res));

blogPostsRoutes.get(
  '/:id',
  AuthenticateToken.verifyToken,
  (req: Request, res: Response) => controlllerBlogPosts.find(req, res)
);

blogPostsRoutes.delete(
  '/:id',
  AuthenticateToken.verifyToken,
  (req: Request, res: Response) => controlllerBlogPosts.delete(req, res)
);

export default blogPostsRoutes;