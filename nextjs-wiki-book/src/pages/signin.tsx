import { NextPage } from 'next';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import Text from '@/components/atoms/Text';
import SignInFormContainer from '@/components/containers/SignInFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Wrapper from '@/components/layout/Wrapper';
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
        <Wrapper
          width="500px"
          height="500px"
          backgroundColor="secondaryLightOp"
        >
          <BackgroundImage
            imageUrl="/bg/FooterBG.png"
            width="100%"
            height="38%"
            bottom="0"
            right="0"
          />
          <Box width="100%">
            <Box marginBottom={1}>
              <Text
                fontSize="40px"
                style={{ fontFamily: 'fantasy, sans-serif' }}
              >
                LOA WIKI
              </Text>
            </Box>
            <SignInFormContainer />
          </Box>
        </Wrapper>
      </Flex>
    </Layout>
  );
};

export default SigninPage;
