import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import { useMemo } from 'react';
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';
import Separator from '@/components/atoms/Sparator';
import Text from '@/components/atoms/Text';
import AddToCartButtonContainer from '@/components/containers/AddToCartButtonContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import ProductCard from '@/components/organisms/ProductCard';
import UserProfile from '@/components/organisms/UserProfile';
import Layout from '@/components/templates/Layout';
import { ProductsDocument, useProductQuery } from '@/generated/graphql';
import { Category, Product } from '@/types';

const categoryNameDict: Record<Category, string> = {
  emoji: '이모티콘',
  figures: '피규어',
  pad: '마우스 패드',
};

type ProductPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProductPage: NextPage<ProductPageProps> = ({
  id,
  product: initial,
}: ProductPageProps) => {
  const { data, error, loading } = useProductQuery({
    variables: { productId: id },
  });

  const product = (data?.product as Product) ?? initial;

  const profileImage = useMemo(() => {
    if (data?.product.owner.profileImageUrl) {
      return `http://localhost:4000/${data?.product.owner.profileImageUrl}`;
    }
    return 'http://localhost:4000/DefaultUser.png';
  }, [data]);

  if (error) {
    throw new Error(JSON.stringify(error));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">홈</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">검색</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={`/search/${product.category}`}>
                {categoryNameDict[product.category as Category]}
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex paddingTop={2} paddingBottom={1} justifyContent="center">
            <ProductCard
              variant="detail"
              title={product.title}
              price={product.price}
              imageUrl={
                product.imageUrl && `http://localhost:4000/${product.imageUrl}`
              }
            />
          </Flex>
          <Separator />
          <Box paddingTop={1}>
            <Text as="h2" variant="large" marginTop={0}>
              게시자
            </Text>
            <Link href={`users/${product.owner.id}`}>
              <UserProfile
                variant="small"
                username={product.owner.username}
                profileImageUrl={profileImage}
                numberOfProducts={100}
              />
            </Link>
          </Box>
        </Box>
        <Box padding={2} width={{ base: '100%', md: '700px' }}>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            height={{ base: '', md: '100%' }}
          >
            <Box>
              {product.description
                .split('\n')
                .map((text: string, index: number) => (
                  <Text key={index} as="p">
                    {text}
                  </Text>
                ))}
            </Box>
            <AddToCartButtonContainer product={product} />
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data } = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ProductsDocument.loc?.source.body,
    }),
  }).then((res) => res.json());

  const paths = data.products.map(
    (product: Product) => `/products/${product.id}`,
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { data } = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ProductsDocument.loc?.source.body,
    }),
  }).then((res) => res.json());

  if (!params) {
    throw new Error('products params is undefined');
  }

  const productId = Number(params.id);
  const product = data.products.filter(
    (product: Product) => product.id === productId,
  );

  return {
    props: {
      id: productId,
      product,
    },
    revalidate: 60,
  };
};

export default ProductPage;
