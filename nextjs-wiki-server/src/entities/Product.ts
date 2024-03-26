import { Field, Int, ObjectType } from 'type-graphql';
import { User } from './User';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserData from './UserData';

@ObjectType()
@Entity()
export default class Product extends BaseEntity {
  @Field(() => Int, { description: '제품 아이디' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '카테고리' })
  @Field({ description: '카테고리' })
  category: string;

  @Column({ comment: '제품 이름' })
  @Field({ description: '제품 이름' })
  title: string;

  @Column({ comment: '제품 설명' })
  @Field({ description: '제품 설명' })
  description: string;

  @Column({ comment: '제품 이미지' })
  @Field({ description: '제품 이미지' })
  imageUrl: string;

  @Column({ nullable: true, comment: 'blurDataUrl' })
  @Field({ nullable: true, description: 'blurDataUrl' })
  blurDataUrl?: string;

  @Column({ comment: '가격' })
  @Field({ description: '제품 가격, 원' })
  price: number;

  @Column({ comment: '제품 상태' })
  @Field({ description: '제품 상태' })
  condition: string;

  @ManyToOne(() => UserData, (user) => user.products)
  @Field(() => User, { description: '소유자' })
  owner: User;
}
