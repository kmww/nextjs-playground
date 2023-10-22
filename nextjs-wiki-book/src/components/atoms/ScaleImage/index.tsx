import { Responsive } from '@/types/styles';
import { toPropValue } from '@/utils/styles';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

type ScaleImageProps = Omit<ImageProps, 'quality'> & {
  containerWidth?: Responsive<string>;
  containerHeight?: Responsive<string>;
};

const ScaleEffectImageContainer = styled.div<{
  width: Responsive<string>;
  height: Responsive<string>;
}>`
  overflow: hidden;
  ${({ width, theme }) => toPropValue('width', width, theme)}
  ${({ height, theme }) => toPropValue('height', height, theme)}
`;

const ScaleEffectImage = styled(Image)`
  transition: transform 0.5s linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;
