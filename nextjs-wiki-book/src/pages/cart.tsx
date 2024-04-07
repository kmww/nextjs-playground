import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';
import Text from '@/components/atoms/Text';
import CartContainer from '@/components/containers/CartContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import Layout from '@/components/templates/Layout';
import { UseAuth } from '@/utils/hooks/useAuth';

const CartPage: NextPage = () => {
  const { error } = UseAuth();
  const router = useRouter();

  if (error && typeof window !== 'undefined') {
    window.alert('로그인이 필요합니다.');
    router.push('/');
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width={{ base: '100%', md: '1240px' }}>
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
