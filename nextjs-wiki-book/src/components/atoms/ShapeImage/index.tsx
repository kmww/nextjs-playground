import { ImageProps } from 'next/image';

type ImageShape = 'circle' | 'square';
type ShapeImageProps = ImageProps & { shape?: ImageShape };
