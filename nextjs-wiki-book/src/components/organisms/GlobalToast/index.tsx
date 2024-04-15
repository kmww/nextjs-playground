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
`;

interface GlobalToast {
  top?: number;
  duration?: number;
}

const GlobalToast = (props: GlobalToast) => {
  const { top = 25, duration = 2000 } = props;
  const [[isToastOn, content], setToast] = useRecoilState(globalToast);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isToastOn) {
      timer = setTimeout(() => {
        setToast([false, '']);
      }, duration);
    }
    return () => clearTimeout(timer);
  });

  return (
    <>
      {isToastOn && (
        <ToastWrapper top={top} duration={duration}>
          <Toast content={content} duration={duration} />
        </ToastWrapper>
      )}
    </>
  );
};

export default GlobalToast;
