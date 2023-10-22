import { Responsive } from '@/types/styles';
import { toPropValue } from '@/utils/styles';
import { ImageProps } from 'next/image';
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
