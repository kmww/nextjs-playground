import { Meta, StoryObj } from '@storybook/react';
import Footer from './';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Standard: Story = {
  render: () => <Footer />,
};
