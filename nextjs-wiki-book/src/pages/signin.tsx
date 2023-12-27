import { NextPage } from 'next';
import AppLogo from '@/components/atoms/AppLogo';
import SignInFormContainer from '@/components/containers/SignInFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Layout from '@/components/templates/Layout';

const SigninPage: NextPage = () => {
  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingRight={{ base: 2, md: 0 }}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width="100%">
            <SignInFormContainer />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SigninPage;
