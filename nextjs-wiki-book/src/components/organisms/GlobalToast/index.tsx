import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Toast from '@/components/atoms/Toast';
import { globalToast } from '@/contexts/GlobalToast/globalToast';

const ToastWrapper = styled.div<{
  top: number;
  duration: number;
}>`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 50px;
  top: ${({ top }) => top}px;
  right: 0;
  left: 0;
  bottom: 0;
  animation: fadeInOut ${({ duration }) => duration + 100}ms ease;
  backface-visibility: hidden;
  z-index: 2;

  @keyframes fadeInOut {
    0% {
      opacity: 0.3;
    }
    30% {
      opacity: 1;
    }
    90% {
      opacity: 0.9;
      transform: rotateX(20deg);
    }
    100% {
      opacity: 0;
      transform: rotateX(90deg);
    }
  }
`;

interface GlobalToast {
  top?: number;
  duration?: number;
}

const GlobalToast = (props: GlobalToast) => {
  const { top = 25, duration = 1200 } = props;
  const [[isToastOn, content, variant], setToast] = useRecoilState(globalToast);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isToastOn) {
      timer = setTimeout(() => {
        setToast([false, '', '']);
      }, duration);
    }
    return () => clearTimeout(timer);
  });

  return (
    <>
      {isToastOn && (
        <ToastWrapper top={top} duration={duration}>
          <Toast content={content} duration={duration} variant={variant} />
        </ToastWrapper>
      )}
    </>
  );
};

export default GlobalToast;
