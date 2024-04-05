import { NextPage } from 'next';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import Text from '@/components/atoms/Text';
import SignUpFormContainer from '@/components/containers/SignUpFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Wrapper from '@/components/layout/Wrapper';
import Layout from '@/components/templates/Layout';

const SignUpPage: NextPage = () => {
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
          height="600px"
          backgroundColor="secondaryLightOp"
        >
          <BackgroundImage
            imageUrl="/bg/FooterBG.png"
            width="100%"
            height="30%"
            bottom="0"
            right="0"
          />
          <Box>
            <Text as="h1" variant="extraLarge" fontWeight="bold">
              계정 생성
            </Text>
          </Box>
          <Box>
            <Text
              as="h2"
              variant="medium"
              fontWeight="bold"
              marginTop={0}
              marginBottom={0}
            >
              환영합니다!
            </Text>
          </Box>
          <Box>
            <Text as="h2" variant="medium">
              LoaWiki에서 마음에 드는 아이템을 찾아보세요
            </Text>
          </Box>
          <Box width="100%">
            <SignUpFormContainer />
          </Box>
        </Wrapper>
      </Flex>
    </Layout>
  );
};

export default SignUpPage;
