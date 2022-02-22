import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  title?: string | null;
  description?: string | null;
  body?: string | null;
  slug?: string | null;
  tags?: TagCreateNestedManyWithoutPostsInput;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
