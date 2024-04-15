import { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import GlobalToast from './';
import Button from '@/components/atoms/Button';
import { globalToast } from '@/contexts/GlobalToast/globalToast';

const meta: Meta<typeof GlobalToast> = {
  title: 'Organisms/GlobalToast',
  argTypes: {
    duration: {
      type: 'number',
      description: '지속시간',
      table: { type: { summary: 'number' } },
      defaultValue: 1000,
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalToast>;

const Template: Story = {
  render: (args) => {
    const ChildComponent = () => {
      const setToast = useSetRecoilState(globalToast);
      const handleClick = () => {
        setToast([true, '로그인이 완료되었습니다']);
      };

      return (
        <>
          <Button onClick={handleClick}>토스트 fire</Button>
          <GlobalToast duration={args.duration} />
        </>
      );
    };

    return (
      <RecoilRoot>
        <ChildComponent />
      </RecoilRoot>
    );
  },
};

export const Toast = {
  ...Template,
  args: {
    duration: 1000,
  },
};
