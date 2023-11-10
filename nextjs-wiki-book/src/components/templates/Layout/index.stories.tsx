import { Meta, StoryObj } from '@storybook/react';
import Layout from './';
import SigninForm from '@/components/organisms/SigninForm';
import ProductForm from '@/components/organisms/ProductForm';

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
    children: <SigninForm />,
  },
};

export const ProductRegistrationPage = {
  ...Template,
  args: {
    children: <ProductForm />,
  },
};
