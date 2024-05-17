import { createContext, useEffect, useState } from "react";
import { BlogPost } from "../types/blogPost";

export type BlogPostContextType = {
  token: string;
  setToken: (token: string) => void;
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
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage) setToken(tokenStorage);
  }, []);

  const state = {
    blogPosts,
    setBlogPosts,
    token,
    setToken
  }
  
  return (
    <BlogPostsContext.Provider value={state}>
      {children}
    </BlogPostsContext.Provider>
  )
}