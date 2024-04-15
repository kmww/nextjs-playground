import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';

const StyledToast = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-left: 10px solid ${({ theme }) => theme.colors.secondaryDark};
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 10px;
`;

interface ToastProps {
  content: string;
}

const Toast = (props: ToastProps) => {
  const { content = '예시 입력' } = props;

  return (
    <>
      <StyledToast width={{ base: '300px', md: '400px' }}>
        <Text textAlign="center" padding={1} fontWeight="bold">
          {content}
        </Text>
      </StyledToast>
    </>
  );
};

export default Toast;
