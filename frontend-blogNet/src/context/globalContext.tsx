import { createContext, useState } from "react";
import { BlogPost } from "../types/blogPost";

export type ContextType = {
  blogPosts: BlogPost[];
  setBlogPosts: (blogPosts: BlogPost[]) => void;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};


export const GlobalContext = createContext({} as ContextType);

export function GlobalStateProvider({ children }: ContextProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const state = {
    blogPosts,
    setBlogPosts,
  }
  
  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}