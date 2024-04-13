import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Spinner from '@/components/atoms/Spinner';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';

const GlobalSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

const GlobalSpinner = () => {
  const isGlobalSpinnerOn = useRecoilValue(globalSpinner);
  return (
    <>
      {isGlobalSpinnerOn && (
        <GlobalSpinnerWrapper>
          <Spinner isAutoCentering={true} />
        </GlobalSpinnerWrapper>
      )}
    </>
  );
};

export default GlobalSpinner;
