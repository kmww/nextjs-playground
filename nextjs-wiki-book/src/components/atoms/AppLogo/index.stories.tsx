import { Meta } from '@storybook/react';
import AppLogo from './';

const meta: Meta<typeof AppLogo> = {
  title: 'Atoms/AppLogo',
};

export default meta;

export const Logo = {
  render: () => <AppLogo />,
};
