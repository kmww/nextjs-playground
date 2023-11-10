import { Meta } from '@storybook/react';
import Layout from './';
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
