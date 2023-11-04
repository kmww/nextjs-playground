import { Meta } from '@storybook/react';
import SigninForm from './';

const meta: Meta<typeof SigninForm> = {
  title: 'Organisms/SigninForm',
  argTypes: {
    onSingin: {
      description: '로그인 버튼 클릭시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
