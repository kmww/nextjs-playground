import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from '@/components/atoms/IconButton';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';

const ImagePreviewContainer = styled(Box)`
  position: relative;
`;

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`;

interface ImagePreviewProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  onRemove?: (src: string) => void;
}

const ImagePreview = ({
  src,
  alt,
  width,
  height,
  onRemove,
}: ImagePreviewProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && src && onRemove(src);

    return false;
  };

  return (
    <ImagePreviewContainer width={width} height={height}>
      <img src={src} alt={alt} width={width} height={height} />
      <CloseBox
        alignItems="center"
        justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
