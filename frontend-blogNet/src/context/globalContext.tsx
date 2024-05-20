import { createContext, useState } from "react";
import { BlogPost } from "../types/blogPost";
import { UserNoPassword } from "../types/user";

export type ContextType = {
  user: UserNoPassword;
  setUser: (user: UserNoPassword) => void;
  blogPosts: BlogPost[];
  viewPosts: BlogPost[];
  setViewPosts: (blogPosts: BlogPost[]) => void;
  setBlogPosts: (blogPosts: BlogPost[]) => void;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};


export const GlobalContext = createContext({} as ContextType);

export function GlobalStateProvider({ children }: ContextProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [viewPosts, setViewPosts] = useState<BlogPost[]>([]);

  const [user, setUser] = useState<UserNoPassword>({
    id: 0,
    name: '',
    email: '',
    image: '',
  });

  const state = {
    blogPosts,
    setBlogPosts,
    viewPosts,
    setViewPosts,
    user,
    setUser,
  }
  
  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}