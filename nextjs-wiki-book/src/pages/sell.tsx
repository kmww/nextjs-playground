import { NextPage } from 'next';
import { useRouter } from 'next/router';
import AppLogo from '@/components/atoms/AppLogo';
import ProductFormContainer from '@/components/containers/ProductFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Layout from '@/components/templates/Layout';
import { useMeQuery } from '@/generated/graphql';

const SellPage: NextPage = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  if (!data) {
    window.alert('로그인이 필요합니다.');
    router.push('/');
    return null;
  }

  if (loading) {
    <div>loading...</div>;
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
