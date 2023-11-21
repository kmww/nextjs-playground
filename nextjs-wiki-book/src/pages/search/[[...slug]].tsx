import Text from '@/components/atoms/Text';
import { Category } from '@/types';
import styled from 'styled-components';

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const categoryNameDict: Record<Category, string> = {
  emoji: '이모티콘',
  figures: '피규어',
  pad: '마우스 패드',
};
