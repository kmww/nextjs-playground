import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import getAllProducts from '@/services/products/get-all-products';
import { ApiContext, Product } from '@/types';
import ProductCardCrousel from '@/components/organisms/ProductCardCarousel';
import Box from '@/components/layout/Box';
import Link from 'next/link';
import ProductCard from '@/components/organisms/ProductCard';

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({
  emojiProducts,
  figuresProducts,
  padProducts,
}: HomePageProps) => {
  const renderProductCardCarousel = (products: Product[]) => {
    return (
      <ProductCardCrousel>
        {products.map((product: Product, i: number) => (
          <Box paddingLeft={i === 0 ? 0 : 2} key={product.id}>
            <Link href={`/products/${product.id}`} passHref>
              <ProductCard
                variant="small"
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                blurDataUrl={product.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
      </ProductCardCrousel>
    );
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  };

  const [emojiProducts, figuresProducts, padProducts] = await Promise.all([
    getAllProducts(context, { category: 'emoji', limit: 6, page: 1 }),
    getAllProducts(context, { category: 'figures', limit: 6, page: 1 }),
    getAllProducts(context, { category: 'pad', limit: 6, page: 1 }),
  ]);

  return {
    props: {
      emojiProducts,
      figuresProducts,
      padProducts,
    },
    revalidatee: 60,
  };
};

export default Home;
