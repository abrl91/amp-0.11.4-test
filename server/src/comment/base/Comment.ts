/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Post } from "../../post/base/Post";
@ObjectType()
class Comment {
  @IsString()
  @Field(() => String)
  @ApiProperty({
    required: true,
    type: String,
  })
  id!: string;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @ApiProperty({
    required: true,
  })
  createdAt!: Date;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @ApiProperty({
    required: true,
  })
  updatedAt!: Date;

  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: String,
  })
  content!: string | null;

  @ValidateNested()
  @Type(() => Post)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => Post,
  })
  postComments?: Post | null;
}
export { Comment };
