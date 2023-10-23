import { Meta, StoryObj } from '@storybook/react';
import Separator from './';

const meta: Meta<typeof Separator> = {
  title: 'Atoms/Separator',
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Standard: Story = {
  render: () => (
    <>
      <Separator>or</Separator>
      <Separator>and</Separator>
      <Separator />
    </>
  ),
};
