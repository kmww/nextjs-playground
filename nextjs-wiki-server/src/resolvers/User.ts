import { IsEmail, IsString } from 'class-validator';
import UserData from '../entities/UserData';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import argon2 from 'argon2';
import { createAccessToken, createRefreshToken } from '../utils/jwt-auth';
import { MyContext } from '../apollo/createApolloServer';
import { isAuthenticated } from '../middlewares/isAuthenticated';

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

@ObjectType({ description: '로그인 반환 데이터' })
class LoginResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => UserData, { nullable: true })
  user?: UserData;

  @Field({ nullable: true })
  accessToken?: string;
}

@Resolver(UserData)
export class UserResolver {
  @UseMiddleware(isAuthenticated)
  @Query(() => UserData, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<UserData | undefined> {
    if (!ctx.verifiedUser) return undefined;
    return UserData.findOne({ where: { id: ctx.verifiedUser.userId } });
  }

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

  @Mutation(() => LoginResponse)
  public async login(
    @Arg('loginInput') loginInput: LoginInput,
    @Ctx() { res }: MyContext,
  ): Promise<LoginResponse> {
    const { emailOrDisplayName, password } = loginInput;

    const user = await UserData.findOne({
      where: [
        { email: emailOrDisplayName },
        { displayName: emailOrDisplayName },
      ],
    });

    if (!user) {
      return {
        errors: [
          { field: 'emailOrDisplayName', message: '해당하는 유저가 없습니다' },
        ],
      };
    }

    const isValid = await argon2.verify(user.password, password);
    if (!isValid) {
      return {
        errors: [
          { field: 'password', message: '비밀번호를 올바르게 입력해주세요.' },
        ],
      };
    }

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    res.cookie('refreshtoken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return { user, accessToken };
  }
}
