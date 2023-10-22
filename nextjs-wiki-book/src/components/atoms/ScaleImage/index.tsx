import { Responsive } from '@/types/styles';
import { ImageProps } from 'next/image';

type ScaleImageProps = Omit<ImageProps, 'quality'> & {
  containerWidth?: Responsive<string>;
  containerHeight?: Responsive<string>;
};
