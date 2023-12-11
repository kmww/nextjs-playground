/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropzone from '../Dropzone';
import ImagePreview from './';

const meta: Meta<typeof ImagePreview> = {
  title: 'Molecules/ImagePreview',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '대체 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'string' },
      description: '너비',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'string' },
      description: '높이',
      table: {
        type: { summary: 'string' },
      },
    },
    onRemove: {
      description: '삭제 버튼시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

const Container = styled.div`
  width: 280px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

interface Image {
  file?: File;
  src?: string;
}

type Story = StoryObj<typeof ImagePreview>;

const Template: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
      const newImages = [...images];

      for (const file of files) {
        const index = newImages.findIndex((img: Image) => img.file === file);
        if (index === -1) {
          newImages.push({
            file,
            src: URL.createObjectURL(file),
          });
        }
      }
      setImages(newImages);
    }, [files]);

    const handleRemove = (src: string) => {
      const image = images.find((img: Image) => img.src === src);

      if (image !== undefined) {
        setImages((images) => images.filter((img) => img.src !== image.src));
        setFiles((files) => files.filter((file: File) => file !== image.file));
      }

      args && args.onRemove && args.onRemove(src);
    };

    return (
      <Container>
        <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
        {images.map((image, index) => (
          <ImagePreview
            key={index}
            src={image.src}
            width="100px"
            {...args}
            onRemove={handleRemove}
          />
        ))}
      </Container>
    );
  },
};

export const WithDropzone = {
  ...Template,
};
