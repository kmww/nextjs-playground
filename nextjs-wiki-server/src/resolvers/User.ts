import { IsEmail, IsString } from 'class-validator';
import UserData from '../entities/UserData';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql';
import argon2 from 'argon2';

@InputType()
export class SignUpInput {
  @Field() @IsEmail() email: string;

  @Field() @IsString() username: string;

  @Field() @IsString() displayName: string;

  @Field() @IsString() password: string;
}

@InputType({ description: '로그인 인풋 데이터' })
export class LoginInput {
  @Field() @IsString() emailOrDisplayName: string;
  @Field() @IsString() password: string;
}

@ObjectType({ description: '필드 에러 타입' })
class FieldError {
  @Field() field: string;
  @Field() message: string;
}

@Resolver(UserData)
export class UserResolver {
  @Mutation(() => UserData)
  async signUp(
    @Arg('signUpInput') signUpInput: SignUpInput,
  ): Promise<UserData> {
    const { email, username, displayName, password } = signUpInput;

    const hasedPw = await argon2.hash(password);
    const newUser = UserData.create({
      email,
      username,
      displayName,
      password: hasedPw,
    });

    await UserData.insert(newUser);
    return newUser;
  }
}
