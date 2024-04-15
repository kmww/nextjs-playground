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

const Progress = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5px;
  border-radius: 0 0 5px 0;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
`;

const ProgressValue = styled.div<{ duration: number }>`
  height: 5px;
  background: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 0 0 5px 0;
  box-shadow: 0 1px 1px -1px ${({ theme }) => theme.colors.secondaryDark};
  animation: load ${({ duration }) => `${duration}ms`} normal forwards;

  @keyframes load {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

interface ToastProps {
  content: string;
  duration: number;
}

const Toast = (props: ToastProps) => {
  const { content = '예시 입력', duration } = props;

  return (
    <>
      <StyledToast width={{ base: '300px', md: '400px' }}>
        <Text textAlign="center" padding={1} fontWeight="bold">
          {content}
        </Text>
        <Progress>
          <ProgressValue duration={duration} />
        </Progress>
      </StyledToast>
    </>
  );
};

export default Toast;
