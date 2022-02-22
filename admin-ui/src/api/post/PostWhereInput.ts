import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  body?: StringNullableFilter;
  slug?: StringNullableFilter;
  tags?: TagListRelationFilter;
  comments?: CommentListRelationFilter;
  user?: UserWhereUniqueInput;
};
