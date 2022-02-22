import { Post } from "../post/Post";

export type Tag = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  post?: Array<Post>;
};
