import { TagUpdateManyWithoutPostsInput } from "./TagUpdateManyWithoutPostsInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  title?: string | null;
  description?: string | null;
  body?: string | null;
  slug?: string | null;
  tags?: TagUpdateManyWithoutPostsInput;
  comments?: CommentUpdateManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
