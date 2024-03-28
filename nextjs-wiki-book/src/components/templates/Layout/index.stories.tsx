/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockedProvider } from '@apollo/client/testing';
import { Meta, StoryObj } from '@storybook/react';
import Layout from './';
import ProductForm from '@/components/organisms/ProductForm';
import SignInForm from '@/components/organisms/SignInForm';

const meta: Meta<typeof Layout> = {
  title: 'Templates/Layout',
  argTypes: {
    children: {
      description: '메인 컨텐츠',
      table: {
        type: { summary: 'react node' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Layout>;

const Template: Story = {
  render: ({ children }) => (
    <MockedProvider>
      <Layout>{children}</Layout>
    </MockedProvider>
  ),
};

const handleSignIn = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: '로그인이 성공했습니다.' });
    }, 1000);
  });
};

export const SigninPage = {
  ...Template,
  args: {
    children: <SignInForm onSignIn={handleSignIn} isLoading={false} />,
  },
};

export const ProductRegistrationPage = {
  ...Template,
  args: {
    children: <ProductForm />,
  },
};
