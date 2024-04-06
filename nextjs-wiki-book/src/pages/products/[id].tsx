import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import styled from 'styled-components';
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';
import Button from '@/components/atoms/Button';
import Separator from '@/components/atoms/Sparator';
import Text from '@/components/atoms/Text';
import AddToCartButtonContainer from '@/components/containers/AddToCartButtonContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import ProductCard from '@/components/organisms/ProductCard';
import UserProfile from '@/components/organisms/UserProfile';
import Layout from '@/components/templates/Layout';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import {
  ProductDocument,
  ProductQuery,
  ProductQueryResult,
  ProductsDocument,
  ProductsQueryResult,
  useRemoveProductMutation,
} from '@/generated/graphql';
import { Category } from '@/types';
import { UseAuth } from '@/utils/hooks/useAuth';

const categoryNameDict: Record<Category, string> = {
  emoji: '이모티콘',
  figures: '피규어',
  pad: '마우스 패드',
};

const StyledDescription = styled(Box)`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-radius: 20px;
  height: 100%;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

type ProductPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProductPage: NextPage<ProductPageProps> = ({
  data,
}: ProductPageProps) => {
  const { data: meData } = UseAuth();
  const [removeProduct] = useRemoveProductMutation();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const router = useRouter();

  const product = data?.product;

  const profileImage = useMemo(() => {
    if (product?.owner?.profileImageUrl) {
      return `http://localhost:4000/${product.owner.profileImageUrl}`;
    }
    return 'http://localhost:4000/DefaultUser.png';
  }, [product?.owner]);

  const isMine = useMemo(() => {
    return product?.owner.id === meData?.me?.id ? true : false;
  }, [meData, product]);

  if (router.isFallback) {
    return <Text>데이터를 다시 불러오는 중입니다.</Text>;
  }

  const handleRemove = async () => {
    try {
      setGlobalSpinner(true);
      await removeProduct({
        variables: { productId: product.id },
      });
      window.alert('삭제 완료');
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

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
              <Link href={`/search/${product?.category}`}>
                {categoryNameDict[product?.category as Category]}
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex
            paddingTop={2}
            paddingBottom={1}
            paddingLeft={1}
            flexDirection="column"
          >
            <ProductCard
              variant="detail"
              title={product?.title}
              price={product?.price}
              imageUrl={
                product?.imageUrl &&
                `http://localhost:4000/${product?.imageUrl}`
              }
            />
            <Separator />
            <Box paddingTop={1}>
              <Text as="h2" variant="large" marginTop={0}>
                게시자
              </Text>
              <Link href={`users/${product?.owner.id}`}>
                <UserProfile
                  variant="small"
                  username={product?.owner.username}
                  profileImageUrl={profileImage}
                  numberOfProducts={100}
                />
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box padding={2} width={{ base: '100%', md: '700px' }}>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            height={{ base: '', md: '100%' }}
          >
            <StyledDescription>
              <Flex flexDirection="column">
                <Text as="h2" variant="extraLarge">
                  {product?.title}
                </Text>
                <Text as="h2" variant="large" margin={0}>
                  {product?.price}원
                </Text>
              </Flex>
              {product?.description
                .split('\n')
                .map((text: string, index: number) => (
                  <Text
                    key={index}
                    as="p"
                    fontSize="mediumLarge"
                    wordBreak="break-all"
                  >
                    {text}
                  </Text>
                ))}
            </StyledDescription>

            {isMine ? (
              <Button
                width={{ base: '100%', md: '400px' }}
                height="66px"
                onClick={handleRemove}
              >
                제품 삭제
              </Button>
            ) : (
              <AddToCartButtonContainer product={product} />
            )}
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data }: ProductsQueryResult = await fetch(
    'http://localhost:4000/graphql',
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

  if (!data) {
    throw new Error('product data is undefined');
  }

  const paths = data.products.map((product) => `/products/${product.id}`);

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<{
  data: ProductQuery;
}> = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('products params is undefined');
  }

  const productId = Number(params.id);

  const { data }: ProductQueryResult = await fetch(
    'http://localhost:4000/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ProductDocument.loc?.source.body,
        variables: {
          productId,
        },
      }),
    },
  ).then((res) => res.json());

  if (!data) {
    throw new Error('product data is undefined');
  }

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};

export default ProductPage;
