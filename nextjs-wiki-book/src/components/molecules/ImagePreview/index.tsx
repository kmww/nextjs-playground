import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import styled from 'styled-components';

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
