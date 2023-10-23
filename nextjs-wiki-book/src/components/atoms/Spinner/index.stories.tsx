import { Meta, StoryObj } from '@storybook/react';
import Spinner from './';
import styled from 'styled-components';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  argTypes: {
    size: {
      control: { type: 'number' },
      defaultValue: 50,
      description: '크기',
      table: {
        type: { summary: 'number' },
      },
    },
    isAutoCentering: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '센터링 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    strokeWidth: {
      control: { type: 'number' },
      defaultValue: 4,
      description: '선 폭',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1199;
`;

type Story = StoryObj<typeof Spinner>;

const Template: Story = {
  render: (args) => (
    <SpinnerWrapper>
      <Spinner {...args} />
    </SpinnerWrapper>
  ),
};

export const Normal = {
  ...Template,
};
