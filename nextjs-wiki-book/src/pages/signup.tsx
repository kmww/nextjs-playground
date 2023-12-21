import { NextPage } from 'next';
import Text from '@/components/atoms/Text';
import SignUpFormContainer from '@/components/containers/SignUpFormContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
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
        <Flex
          width="450px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text
              as="h1"
              variant="extraLarge"
              fontWeight="bold"
              color="primary"
            >
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
              LOA C2C에서 마음에 드는 아이템을 찾보세요
            </Text>
          </Box>
          <Box width="100%">
            <SignUpFormContainer />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SignUpPage;
