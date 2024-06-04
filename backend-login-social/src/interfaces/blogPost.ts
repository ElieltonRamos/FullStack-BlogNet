import User from './user';

export type CleanBlogPost = Omit<BlogPost, 'created' | 'updated'>;

interface BlogPost {
    id?: number;
    userId: number;
    title: string;
    content: string;
    created: string;
    updated?: string;
    image?: string;
    user?: User;
}

export default BlogPost;