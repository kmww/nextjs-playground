import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Toast from './';

const meta: Meta<typeof Toast> = {
  title: 'Atoms/Toast',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    duration: {
      control: { type: 'number' },
      description: '지속시간',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

const ToastWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 50px;
  top: 25px;
  right: 0;
  left: 0;
  bottom: 0;
`;

type Story = StoryObj<typeof Toast>;

const Template: Story = {
  render: (args) => (
    <ToastWrapper>
      <Toast {...args} />
    </ToastWrapper>
  ),
};

export const Basic = {
  ...Template,
  args: {
    duration: 1000,
  },
};
