import Flex from '@/components/layout/Flex';
import { useCallback, useMemo } from 'react';
import styled from 'styled-components';

const InputImagesContainer = styled(Flex)`
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`;

export type FileData = {
  id?: string;
  src?: string;
  file?: File;
  selected?: boolean;
  chosen?: boolean;
};

interface InputImagesProps {
  name?: string;
  images: FileData[];
  maximumNumber?: number;
  hasError?: boolean;
  width?: string;
  height?: string;
  onChange: (imges: FileData[]) => void;
}

const InputImages = (props: InputImagesProps) => {
  const {
    images,
    maximumNumber,
    name,
    hasError,
    width = '100%',
    height = '260px',
    onChange,
  } = props;
  const files = useMemo(() => {
    images.filter((img: FileData) => img.file).map((img: FileData) => img.file);
  }, [images]);

  const isDropzoneDisplay =
    !maximumNumber || images.length < maximumNumber ? 'block' : 'none';

  const onRemove = useCallback(
    (src: string) => {
      const image = images.find((img: FileData) => img.src === src);
      const newImages = images.filter((imgs: FileData) => imgs.src !== src);

      if (image) {
        if (image.file && image.src) {
          URL.revokeObjectURL(image.src);
          delete image.src;
        }
        onChange && onChange(newImages);
      }
    },
    [images, onChange],
  );

  const onDrop = useCallback(
    (files: File[]) => {
      const newImages = [];

      for (const file of files) {
        const img = images.find((img: FileData) => img.file === file);

        if (
          !img &&
          (!maximumNumber || images.length + newImages.length < maximumNumber)
        ) {
          newImages.push({ file, src: URL.createObjectURL(file) });
        }
      }
      onChange && onChange(newImages);
    },
    [images, maximumNumber, onChange],
  );
};
