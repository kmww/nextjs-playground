import { createWriteStream } from 'fs';
import jwt from 'jsonwebtoken';
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
import {
  REFRESH_JWT_SECRET_KEY,
  createAccessToken,
  createRefreshToken,
  setRefreshTokenHeader,
} from '../utils/jwt-auth';
import { MyContext } from '../apollo/createApolloServer';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

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

@ObjectType({ description: '액세스 토큰 새로고침 반환 데이터' })
class RefreshAccessTokenResponse {
  @Field() accessToken: string;
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
    @Ctx() { res, redis }: MyContext,
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

    await redis.set(String(user.id), refreshToken);

    setRefreshTokenHeader(res, refreshToken, false);

    return { user, accessToken };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuthenticated)
  async logout(
    @Ctx() { verifiedUser, res, redis }: MyContext,
  ): Promise<boolean> {
    if (verifiedUser) {
      setRefreshTokenHeader(res, '', false);
      await redis.del(String(verifiedUser.userId));
    }
    return true;
  }

  @Mutation(() => RefreshAccessTokenResponse, { nullable: true })
  async refreshAccessToken(
    @Ctx() { req, res, redis }: MyContext,
  ): Promise<RefreshAccessTokenResponse | null> {
    const refreshToken = req.cookies.refreshtoken;
    if (!refreshToken) {
      return null;
    }

    let tokenData: any = null;
    try {
      tokenData = jwt.verify(refreshToken, REFRESH_JWT_SECRET_KEY);
    } catch (error) {
      console.error(error);
      return null;
    }

    if (!tokenData) return null;

    // 레디스의 user.id 로 저장된 토큰 조회
    const storedRefreshToken = await redis.get(String(tokenData.userId));
    if (!storedRefreshToken) return null;
    if (storedRefreshToken !== refreshToken) return null;

    const user = await UserData.findOne({ where: { id: tokenData.userId } });
    if (!user) return null;

    const newAccessToken = createAccessToken(user);
    const newRefreshToken = createRefreshToken(user);

    await redis.set(String(user.id), newRefreshToken);

    setRefreshTokenHeader(res, newRefreshToken, true);

    return { accessToken: newAccessToken };
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Boolean)
  async uploadProfileImage(
    @Ctx() { verifiedUser }: MyContext,
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    const realFileName = verifiedUser.userId + filename;
    const filePath = `public/${realFileName}`;

    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', async () => {
          await UserData.update(
            { id: verifiedUser.userId },
            {
              profileImageUrl: realFileName,
            },
          );
          return resolve(true);
        })
        .on('error', () => reject(Error('file upload failed'))),
    );
  }
}
