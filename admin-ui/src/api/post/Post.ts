import { Tag } from "../tag/Tag";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  body: string | null;
  slug: string | null;
  tags?: Array<Tag>;
  comments?: Array<Comment>;
  user?: User | null;
};
