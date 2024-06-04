import { createContext, useEffect, useState } from "react";
import { BlogPost } from "../types/blogPost";
import { UserNoPassword } from "../types/user";
import { requestUser } from "../services/requests";
import { alertNoLogged } from "../services/alerts";

export type ContextType = {
  user: UserNoPassword;
  setUser: React.Dispatch<React.SetStateAction<UserNoPassword>>
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (user.name === '' && token) {
      requestUser().then((response) => {
        if ('message' in response) return alertNoLogged();
        setUser(response);
      });
    }
  }, []);

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