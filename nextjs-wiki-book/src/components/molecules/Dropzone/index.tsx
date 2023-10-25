import { useRef, useState } from 'react';
import styled from 'styled-components';

const isDragEvent = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer;
};

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null;
};

const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent): File[] => {
  if (isDragEvent(e)) {
    return Array.from(e.dataTransfer.files);
  } else if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files);
  }

  return [];
};

type FileTypes =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf';

interface DropzoneProps {
  value?: File[];
  name?: string;
  acceptedFileTypes?: FileTypes[];
  width?: number | string;
  height?: number | string;
  hasError?: boolean;
  onDrop?: (files: File[]) => void;
  onChange?: (files: File[]) => void;
}

interface DropzoneRootProps {
  isFocused?: boolean;
  hasError?: boolean;
  width?: number | string;
  height?: number | string;
}

const DropzoneRoot = styled.div<DropzoneRootProps>`
  border: 1px dashed
    ${({ theme, isFocused, hasError }) => {
      if (hasError) {
        return theme.colors.danger;
      } else if (isFocused) {
        return theme.colors.black;
      } else {
        return theme.colors.border;
      }
    }};
  border-radius: 8px;
  cursor: pointer;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
`;

const DropzoneContent = styled.div<{
  width: number | string;
  height: number | string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
`;

const DropzoneInputFile = styled.input`
  display: none;
`;

const Dropzone = (props: DropzoneProps) => {
  const {
    value = [],
    name,
    acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    width = '100%',
    height = '200px',
    onDrop,
    onChange,
    hasError,
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);

    const files = value.concat(
      getFilesFromEvent(e).filter((file) =>
        acceptedFileTypes.includes(file.type as FileTypes),
      ),
    );

    onDrop && onDrop(files);
    onChange && onChange(files);
  };
};
