import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  postComments?: PostWhereUniqueInput | null;
};
