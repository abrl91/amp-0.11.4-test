import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name?: string | null;
  post?: PostCreateNestedManyWithoutTagsInput;
};
