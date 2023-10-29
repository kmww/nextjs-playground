import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const RemoveText = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface CartProductProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  onBuyButtonClick?: (id: number) => void;
  onRemoveButtonClick?: (id: number) => void;
}
