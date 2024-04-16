import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import colors from '@/styles/themes/colors';

const toastVariant: { [key: string]: string } = {
  primary: colors.primaryDark,
  danger: colors.dangerDark,
  info: colors.info,
};

const StyledToast = styled(Box)<{ variant: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-left: 20px solid ${({ variant }) => toastVariant[variant]};
  background-color: #2e2e2e;
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
  background: rgba(255, 255, 255, 0.684);
`;

const ProgressValue = styled.div<{ duration: number; variant: string }>`
  height: 5px;
  background: ${({ variant }) => toastVariant[variant]};
  border-radius: 0 0 5px 0;
  box-shadow: 0 1px 1px -1px ${({ variant }) => toastVariant[variant]};
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
  variant: string;
}

const Toast = (props: ToastProps) => {
  const { content = '예시 입력', duration, variant } = props;

  return (
    <>
      <StyledToast width={{ base: '300px', md: '400px' }} variant={variant}>
        <Text
          textAlign="center"
          paddingBottom={2}
          paddingTop={1}
          fontWeight="bold"
          color="white"
          whiteSpace="pre-line"
        >
          {content}
        </Text>
        <Progress>
          <ProgressValue duration={duration} variant={variant} />
        </Progress>
      </StyledToast>
    </>
  );
};

export default Toast;
