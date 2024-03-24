import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import ProductCard from '@/components/organisms/ProductCard';
import ProductCardCrousel from '@/components/organisms/ProductCardCarousel';
import Layout from '@/components/templates/Layout';
import { ProductsDocument } from '@/generated/graphql';
import { Product } from '@/types';
import { fetcher } from '@/utils';

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

  return (
    <Layout>
      <Flex padding={2} justifyContent="center" backgroundColor="primary">
        <Flex
          width={{ base: '100%', md: '1040px' }}
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width="100%">
            <Text as="h1" marginBottom={0} color="white" variant="extraLarge">
              LOA WIKI에서
            </Text>
            <Text as="h1" marginTop={0} color="white" variant="extraLarge">
              마음에 드는 아이템을 찾자
            </Text>
          </Box>
          <Box width="100%">
            <Text as="p" color="white" variant="mediumLarge">
              LOA WIKI는 데모 애플리케이션 입니다. 목 서버를 사용하며 소스코드는
              <Text
                as="a"
                style={{ textDecoration: 'underline' }}
                target="_blank"
                href="https://github.com/kmww/nextjs-playground/tree/main/nextjs-wiki-book"
                variant="mediumLarge"
                color="white"
              >
                다음
              </Text>
              의 Github에서 확인 할 수 있습니다.
            </Text>
            <Text as="p" color="white" variant="mediumLarge">
              이 애플리케이션은 Next.js/TypeScript로 제작되었으며, 백엔드의 목
              API는 Graphql이 사용되고 있습니다.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex paddingBottom={2} justifyContent="center">
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: '100%', md: '1040px' }}
        >
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              이모티콘
            </Text>
            {renderProductCardCarousel(emojiProducts)}
          </Box>
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              피규어
            </Text>
            {renderProductCardCarousel(figuresProducts)}
          </Box>

          <Box>
            <Text as="h2" variant="large">
              마우스 패드
            </Text>
            {renderProductCardCarousel(padProducts)}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetcher(ProductsDocument);

  const emojiProducts = data.products
    .filter((product: Product) => product.category === 'emoji')
    .slice(0, 6);
  const figuresProducts = data.products
    .filter((product: Product) => product.category === 'figures')
    .slice(0, 6);
  const padProducts = data.products
    .filter((product: Product) => product.category === 'pad')
    .slice(0, 6);

  return {
    props: {
      emojiProducts,
      figuresProducts,
      padProducts,
    },
    revalidate: 60,
  };
};

export default Home;
