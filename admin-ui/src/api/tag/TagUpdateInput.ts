import { PostUpdateManyWithoutTagsInput } from "./PostUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  name?: string | null;
  post?: PostUpdateManyWithoutTagsInput;
};
