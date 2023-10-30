import { Meta } from '@storybook/react';
import GlobalSpinner from './';
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from '@/contexts/GlobalSpinnerContext';
import Button from '@/components/atoms/Button';

const meta: Meta<typeof GlobalSpinner> = {
  title: 'Organisms/GlobalSpinner',
};

export default meta;

export const withContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext();

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
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  );
};
