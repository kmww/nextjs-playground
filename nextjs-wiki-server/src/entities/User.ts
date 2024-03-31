import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: '유저 아이디' })
  id: number;

  @Field({ description: '유저 이름' })
  username: string;

  @Field({ description: '유저 닉네임' })
  displayName: string;

  @Field({ description: '이메일' })
  email: string;

  @Field({ nullable: true, description: '프로필 사진' })
  profileImageUrl?: string;

  @Field({ description: '유저 소개', nullable: true })
  description: string;
}
