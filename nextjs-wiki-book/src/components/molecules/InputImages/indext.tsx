import Flex from '@/components/layout/Flex';
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
