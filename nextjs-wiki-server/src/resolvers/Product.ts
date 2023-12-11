import dummyProducts from 'src/data/productdata';
import { Product } from 'src/entities/Product';
import { Query, Resolver } from 'type-graphql';

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return dummyProducts.products;
  }
}
