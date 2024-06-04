import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import ProductCardCrousel from '@/components/organisms/ProductCardCarousel';
import Layout from '@/components/templates/Layout';
import { ProductsDocument } from '@/generated/graphql';
import { Product } from '@/types';

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({
  emojiProducts,
  figuresProducts,
  padProducts,
}: HomePageProps) => {
  return (
    <Layout>
      <Flex
        padding={2}
        justifyContent="center"
        backgroundColor="primary"
        width="100%"
        height={{ base: 'auto', md: '300px' }}
      >
        <Flex
          width={{ base: '100%', md: '1040px' }}
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width="100%">
            <Text as="h1" marginBottom={0} variant="extraLarge">
              LOA WIKI에서
            </Text>
            <Text as="h1" marginTop={0} variant="extraLarge">
              마음에 드는 아이템을 찾자
            </Text>
          </Box>
          <Box width="100%" display={{ base: 'none', md: 'block' }}>
            <Text as="p" variant="mediumLarge">
              LOA WIKI는 데모 애플리케이션 입니다. 목 서버를 사용하며 소스코드는
              <Text
                as="a"
                style={{ textDecoration: 'underline' }}
                target="_blank"
                href="https://github.com/kmww/nextjs-playground/tree/main/nextjs-wiki-book"
                variant="mediumLarge"
              >
                다음
              </Text>
              의 Github에서 확인 할 수 있습니다.
            </Text>
            <Text as="p" variant="mediumLarge">
              이 애플리케이션은 Next.js/TypeScript로 제작되었으며,
              <br />
              백엔드의 목 API는 Graphql이 사용되고 있습니다.
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
            <ProductCardCrousel products={emojiProducts} />
          </Box>
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              피규어
            </Text>
            <ProductCardCrousel products={figuresProducts} />
          </Box>
          <Box>
            <Text as="h2" variant="large">
              마우스 패드
            </Text>
            <ProductCardCrousel products={padProducts} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/graphql` as string,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ProductsDocument.loc?.source.body,
      }),
    },
  ).then((res) => res.json());

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
    revalidate: 5,
  };
};

export default Home;
