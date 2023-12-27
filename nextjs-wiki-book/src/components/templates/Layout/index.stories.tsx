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
  render: ({ children }) => <Layout>{children}</Layout>,
};

export const SigninPage = {
  ...Template,
  args: {
    children: <SignInForm />,
  },
};

export const ProductRegistrationPage = {
  ...Template,
  args: {
    children: <ProductForm />,
  },
};
