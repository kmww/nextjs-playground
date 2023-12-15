import dummyProducts from '../data/productdata';
import { Product } from '../entities/Product';
import { Arg, Field, Int, ObjectType, Query, Resolver } from 'type-graphql';

type Category = 'emoji' | 'figures' | 'pad';
type Condition = 'new' | 'used';
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

  @Query(() => [Product])
  searchProducts(
    @Arg('category', { nullable: true })
    category: Category,
    @Arg('conditions', { nullable: true })
    conditions: Condition,
  ): Product[] | [] {
    if (category) {
      let products = dummyProducts.products.filter(
        (product) => product.category === category,
      );
      if (conditions) {
        products = products.filter(
          (product) => product.condition === conditions,
        );
        return products;
      } else {
        return products;
      }
    }
    return [];
  }
}
