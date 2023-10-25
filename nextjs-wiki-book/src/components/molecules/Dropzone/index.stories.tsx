import { Meta } from '@storybook/react';
import Dropzone from './';

const meta: Meta<typeof Dropzone> = {
  title: 'Molecules/Dropzone',
  argTypes: {
    width: {
      control: { type: 'number' },
      description: '너비',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '높이',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: '에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      options: {
        control: { type: 'array' },
        description: '받은 파일 타입',
        table: {
          type: { summary: 'array' },
        },
      },
    },
    onDrop: {
      description: '파일 드롭시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: '파일 입력시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
