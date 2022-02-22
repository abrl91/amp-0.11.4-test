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
import { Tag } from "../../tag/base/Tag";
import { Comment } from "../../comment/base/Comment";
import { User } from "../../user/base/User";
@ObjectType()
class Post {
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
  title!: string | null;

  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: String,
  })
  description!: string | null;

  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: String,
  })
  body!: string | null;

  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: String,
  })
  slug!: string | null;

  @ValidateNested()
  @Type(() => Tag)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => [Tag],
  })
  tags?: Array<Tag>;

  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => [Comment],
  })
  comments?: Array<Comment>;

  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => User,
  })
  user?: User | null;
}
export { Post };
