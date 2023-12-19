import { ApolloProvider } from '@apollo/client';
import { Meta, StoryObj } from '@storybook/react';
import SignUpForm from './';
import { apolloClient } from '@/pages/_app';

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

type Story = StoryObj<typeof SignUpForm>;

const Template: Story = {
  render: (args) => (
    <ApolloProvider client={apolloClient}>
      <SignUpForm {...args} />
    </ApolloProvider>
  ),
};

export const Form = {
  ...Template,
};
