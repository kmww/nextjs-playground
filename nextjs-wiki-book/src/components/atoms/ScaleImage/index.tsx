import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';
import { Responsive } from '@/types/styles';
import { toPropValue } from '@/utils/styles';

type ScaleImageProps = Omit<ImageProps, 'quality'> & {
  containerWidth?: Responsive<string>;
  containerHeight?: Responsive<string>;
};

const ScaleEffectImageContainer = styled.div<{
  width: Responsive<string>;
  height: Responsive<string>;
}>`
  position: relative;
  overflow: hidden;
  ${({ width, theme }) => toPropValue('width', width, theme)}
  ${({ height, theme }) => toPropValue('height', height, theme)}
`;

const ScaleImage = ({
  containerWidth,
  containerHeight,
  alt,
  ...props
}: ScaleImageProps) => {
  const sizes = `${containerWidth ?? props.width ?? 320}px`;

  return (
    <ScaleEffectImageContainer
      width={containerWidth ?? `${props.width}` ?? '320px'}
      height={containerHeight ?? `${props.height}` ?? '320px'}
    >
      <Image
        quality="85"
        alt={alt ?? 'Product Image'}
        src={props.src}
        sizes={sizes}
        fill
      />
    </ScaleEffectImageContainer>
  );
};

export default ScaleImage;
