export type CleanBlogPost = Omit<BlogPost, 'created' | 'updated'>;

interface BlogPost {
    id?: number;
    userId: number;
    title: string;
    content: string;
    created: Date;
    updated: Date;
}

export default BlogPost;