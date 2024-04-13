import { Meta } from '@storybook/react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import GlobalSpinner from './';
import Button from '@/components/atoms/Button';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';

const meta: Meta<typeof GlobalSpinner> = {
  title: 'Organisms/GlobalSpinner',
};

export default meta;

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useSetRecoilState(globalSpinner);

    // 실제 api 호출시 로딩 상황 연출
    const handleClick = () => {
      setGlobalSpinner(true);
      setTimeout(() => {
        setGlobalSpinner(false);
      }, 5000);
    };
    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>로딩</Button>
      </>
    );
  };

  return (
    <RecoilRoot>
      <ChildComponent />
    </RecoilRoot>
  );
};
