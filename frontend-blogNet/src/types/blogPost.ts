import { User } from "./user";

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  user: User;
  created: string;
  updated: string;
  image?: string;
}

export type BlogPostCreate = {
  title: string;
  content: string;
  image?: string;
}

export type BlogPostEdit = BlogPostCreate & { id: number; }