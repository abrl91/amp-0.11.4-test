import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  postComments?: PostWhereUniqueInput | null;
};
