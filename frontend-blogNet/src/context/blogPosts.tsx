import { createContext, useState } from "react";
import { BlogPost } from "../types/blogPost";

export type BlogPostContextType = {
  blogPosts: BlogPost[];
  setBlogPosts: (blogPosts: BlogPost[]) => void;
};

export type BlogsPostsProviderProps = {
  children: React.ReactNode;
};

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Primeiro post",
    content: "Conteúdo do primeiro post",
    user: {
      id: 1,
      name: "Elielton",
      email: "email@mail.com",
      password: "123456",
      image: "./abstract-user.svg"
    },
    created: "2021-09-01",
    updated: "2021-09-01"
  },
]


export const BlogPostsContext = createContext({} as BlogPostContextType);

export function BlogPostsProvider({ children }: BlogsPostsProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  return (
    <BlogPostsContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </BlogPostsContext.Provider>
  )
}