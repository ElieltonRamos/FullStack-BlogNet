import { User } from "./user";

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  user: User;
  created: string;
  updated: string;
}