import { createContext, useState } from "react";
import { BlogPost } from "../types/blogPost";

export type BlogPostContextType = {
  blogPosts: BlogPost[];
  setBlogPosts: (blogPosts: BlogPost[]) => void;
};

export type BlogsPostsProviderProps = {
  children: React.ReactNode;
};


export const BlogPostsContext = createContext({} as BlogPostContextType);

export function BlogPostsProvider({ children }: BlogsPostsProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  return (
    <BlogPostsContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </BlogPostsContext.Provider>
  )
}