/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Dropzone from './';
import Button from '@/components/atoms/Button';
import Box from '@/components/layout/Box';

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

type Story = StoryObj<typeof Dropzone>;

const Template: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = (files: File[]) => {
      setFiles(files);
      args && args.onDrop && args.onDrop(files);
    };

    const fetchData = async () => {
      const res = await fetch('/images/sample/1.jpg');
      const blob = await res.blob();
      const file = new File([blob], `1.png`, blob);

      setFiles([...files, file]);
    };

    const clearImage = () => {
      setFiles([]);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <>
        <Box marginBottom={1}>
          <Dropzone {...args} value={files} onDrop={handleDrop} />
        </Box>
        <Box marginBottom={1}>
          <Button onClick={fetchData}>이미지 추가</Button>
        </Box>
        <Box marginBottom={2}>
          <Button onClick={clearImage}>이미지 제거</Button>
        </Box>
        <Box>
          {files.map((file, index) => (
            <img
              src={URL.createObjectURL(file)}
              width="100px"
              key={index}
              alt="smaple"
            />
          ))}
        </Box>
      </>
    );
  },
};

export const WithControl = {
  ...Template,
  args: {
    height: 200,
    width: '100%',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    hasError: false,
  },
};
