import { createWriteStream } from 'fs';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import Product from '../entities/Product';
import {
  Arg,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { MyContext } from '../apollo/createApolloServer';
import UserData from '../entities/UserData';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import CartItem from '../entities/CartItem';

type Category = 'emoji' | 'figures' | 'pad';
type Condition = 'new' | 'used';
@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await Product.find({ relations: ['owner'] });
  }

  @Query(() => Product)
  async product(
    @Arg('productId', () => Int) productId: number,
  ): Promise<Product | undefined> {
    return await Product.findOne({
      where: { id: productId },
      relations: ['owner'],
    });
  }

  @Query(() => [Product])
  async searchProducts(
    @Arg('category', { nullable: true })
    category?: Category,
    @Arg('conditions', () => [String], { nullable: true })
    conditions?: Condition[],
  ): Promise<Product[] | []> {
    let products = await Product.find({ relations: ['owner'] });

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    if (conditions && conditions.length > 0) {
      products = products.filter((product) =>
        conditions.includes(product.condition as Condition),
      );
    }

    return products;
  }

  @Mutation(() => Product)
  @UseMiddleware(isAuthenticated)
  async registSale(
    @Arg('title') title: string,
    @Arg('category') category: Category,
    @Arg('description') description: string,
    @Arg('imageUrl', () => GraphQLUpload) imageUrl: FileUpload,
    @Arg('blurDataUrl') blurDataUrl: string,
    @Arg('price') price: number,
    @Arg('condition') condition: Condition,
    @Ctx() { verifiedUser }: MyContext,
  ): Promise<Product> {
    const user = await UserData.findOne({ where: { id: verifiedUser.userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const { createReadStream, filename } = imageUrl;
    const realFileName = `${verifiedUser.userId}-${Date.now()}-${filename}`;
    const filePath = `public/${realFileName}`;

    await new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', resolve)
        .on('error', () => reject(Error('file upload failed'))),
    );

    const product = Product.create({
      title,
      category,
      description,
      imageUrl: realFileName,
      blurDataUrl,
      price,
      condition,
      owner: user,
    });

    await Product.save(product);

    return product;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuthenticated)
  async removeProduct(
    @Arg('productId', () => Int) productId: number,
    @Ctx() { verifiedUser }: MyContext,
  ): Promise<boolean> {
    try {
      const product = await Product.findOne(productId, {
        relations: ['owner'],
      });
      if (!product) {
        throw new Error('Product not found');
      }

      if (product.owner.id !== verifiedUser.userId) {
        throw new Error('You are not authorized to delete');
      }

      await CartItem.delete({ productId });
      await Product.delete(productId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
