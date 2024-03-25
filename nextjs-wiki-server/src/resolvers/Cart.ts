import CartItem from '../entities/CartItem';
import {
  Field,
  InputType,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
  Ctx,
  Mutation,
  Arg,
  Int,
} from 'type-graphql';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { MyContext } from '../apollo/createApolloServer';
import UserData from '../entities/UserData';

@InputType()
class CartItemInput {
  @Field() productId: number;

  @Field() quantity: number;
}

@ObjectType()
class CartItemResponse {
  @Field(() => String)
  message: string;

  @Field(() => [CartItem], { nullable: true })
  cartItems?: CartItem[];
}

@Resolver()
export class ShoppingCartResolver {
  @Query(() => [CartItem], { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getCartItems(
    @Ctx() { verifiedUser }: MyContext,
  ): Promise<CartItem[] | null> {
    const user = await UserData.findOne({ where: { id: verifiedUser.userId } });
    if (!user) return null;
    return CartItem.find({ where: { user }, relations: ['product'] });
  }
}
