import dummyProducts from '../data/productdata';
import { Product } from '../entities/Product';
import { Query, Resolver } from 'type-graphql';

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return dummyProducts.products;
  }
}
