import { NextPage } from 'next';
import { useRouter } from 'next/router';
import AppLogo from '@/components/atoms/AppLogo';
import ProductFormContainer from '@/components/containers/ProductFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Layout from '@/components/templates/Layout';
import { UseAuth } from '@/utils/hooks/useAuth';

const SellPage: NextPage = () => {
  const { data, error } = UseAuth();
  const router = useRouter();

  if (error && typeof window !== 'undefined') {
    window.alert('로그인이 필요합니다.');
    router.push('/');
  }

  return (
    <Layout>
      <Flex
        paddingTop={{ base: 2, md: 4 }}
        paddingBottom={{ base: 2, md: 4 }}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="800px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display={{ base: 'none', md: 'block' }} marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width="100%">
            <ProductFormContainer authUser={data} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SellPage;
