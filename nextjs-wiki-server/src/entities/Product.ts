import { Owner } from 'src/data/productdata';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: '제품 아이디' })
  id: number;

  @Field({ description: '카테고리' })
  category: string;

  @Field({ description: '제품 이름' })
  title: string;

  @Field({ description: '제품 설명' })
  description: string;

  @Field({ description: '제품 이미지' })
  imageUrl: string;

  @Field({ nullable: true, description: 'blurDataUrl' })
  blurDataUrl?: string;

  @Field({ description: '제품 가격, 원' })
  price: number;

  @Field({ description: '제품 상태' })
  condition: string;

  @Field({ description: '소유자' })
  owner: Owner;
}
