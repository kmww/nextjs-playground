import dummyProducts from '../data/productdata';
import { Product } from '../entities/Product';
import { Arg, Int, Query, Resolver } from 'type-graphql';

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return dummyProducts.products;
  }

  @Query(() => Product, { nullable: true })
  product(@Arg('productId', () => Int) productId: number): Product | undefined {
    return dummyProducts.products.find((product) => product.id === productId);
  }
}
