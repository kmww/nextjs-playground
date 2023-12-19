import { IsEmail, IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class SignUpInput {
  @Field() @IsEmail() email: string;

  @Field() @IsString() username: string;

  @Field() @IsString() password: string;
}
