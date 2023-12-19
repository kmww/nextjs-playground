import { Meta } from '@storybook/react';

const meta: Meta<typeof SignUpForm> = {
  title: 'Organisms/SignUpForm',
  argTypes: {
    onSignUp: {
      description: '회원가입 버튼 클릭시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
