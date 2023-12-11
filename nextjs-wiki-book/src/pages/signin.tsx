import { NextPage } from 'next';
import { useRouter } from 'next/router';
import AppLogo from '@/components/atoms/AppLogo';
import SigninFormContainer from '@/components/containers/SigninFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Layout from '@/components/templates/Layout';

const SigninPage: NextPage = () => {
  const router = useRouter();

  const handleSignin = async (err?: Error) => {
    if (!err) {
      const redirectTo = (router.query['redirect_to'] as string) ?? '/';

      console.log('Redirection', redirectTo);
      await router.push(redirectTo);
    }
  };

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
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SigninPage;
