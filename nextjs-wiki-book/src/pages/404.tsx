import { useRouter } from 'next/router';
import styled from 'styled-components';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import Flex from '@/components/layout/Flex';
import Layout from '@/components/templates/Layout';

const BackgroundWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-top: 40px;
`;

const BackButton = styled(Button)`
  background-color: transparent;
  text-decoration: underline;
  font-size: large;
  border: 1px solid;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;

const NotFoundPage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <Layout>
      <Flex justifyContent="center">
        <Flex flexDirection="column" alignItems="center">
          <BackgroundWrapper>
            <BackgroundImage
              imageUrl="/bg/404.png"
              width="100%"
              height="100%"
              style={{ zIndex: 1 }}
            />
          </BackgroundWrapper>
          <Text
            as="h1"
            variant="extraLarge"
            fontWeight="bold"
            textAlign="center"
            wordBreak="keep-all"
            textWrap="wrap"
          >
            페이지를 찾을 수 없습니다.
          </Text>
          <Text
            as="p"
            variant="medium"
            fontWeight="bold"
            textAlign="center"
            wordBreak="keep-all"
            textWrap="wrap"
            marginTop={0}
          >
            존재하지 않는 주소를 입력하셨거나, <br />
            요청하신 페이지의 주소가 변경/삭제 되어 찾을 수 없습니다.
          </Text>
          <BackButton onClick={handleRedirect}>메인으로</BackButton>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default NotFoundPage;
