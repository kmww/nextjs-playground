import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserData from './UserData';
import { Product } from './Product';

@ObjectType()
@Entity()
export default class CartItem extends BaseEntity {
  @Field(() => Int, { description: '카트 아이디' })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int, { description: '상품 개수' })
  @Column({ type: 'int' })
  quantity: number;

  @Field(() => Int, { description: '카트 상품 아이디' })
  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => UserData, (user) => user.cartItems)
  @JoinColumn({ name: 'user' })
  user: UserData;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  @Field(() => Product)
  product: Product;
}
