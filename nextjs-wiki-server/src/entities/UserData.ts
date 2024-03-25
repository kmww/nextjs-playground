import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CartItem from './CartItem';

@ObjectType()
@Entity()
export default class UserData extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ description: '유저 이름' })
  @Column({ unique: false, comment: '유저 이름' })
  username: string;

  @Field({ description: '유저 닉네임' })
  @Column({ unique: true, comment: '유저 닉네임' })
  displayName: string;

  @Field({ description: '이메일' })
  @Column({ unique: true, comment: '이메일' })
  email: string;

  @Column({ comment: '비밀번호' })
  password: string;

  @Column({ comment: '프로필 사진 경로', nullable: true })
  @Field({ description: '프로필 사진 경로', nullable: true })
  profileImageUrl: string;

  @Column({ comment: '유저 소개', nullable: true })
  @Field({ description: '유저 소개', nullable: true })
  description: string;

  @Field(() => String, { description: '생성 일자' })
  @CreateDateColumn({ comment: '생성 일자' })
  createdAt: Date;

  @Field(() => String, { description: '업데이트 일자' })
  @CreateDateColumn({ comment: '업데이트 일자' })
  updatedAt: Date;

  @OneToMany(() => CartItem, (cartItem) => cartItem.user)
  @Field(() => [CartItem])
  cartItems: CartItem[];
}
