import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';
import Text from '@/components/atoms/Text';
import CartContainer from '@/components/containers/CartContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import Layout from '@/components/templates/Layout';
import { useMeQuery } from '@/generated/graphql';

const CartPage: NextPage = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const { data } = useMeQuery({ skip: !accessToken });

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      const token = localStorage.getItem('access_token');
      setAccessToken(token !== null ? token : undefined);
    }
  }, [data]);

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1240px">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">홈</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>카트</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text display="block" variant="large" as="h1">
              카트
            </Text>
            <CartContainer />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CartPage;
