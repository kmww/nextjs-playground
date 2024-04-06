import ScaleImage from '@/components/atoms/ScaleImage';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  blurDataUrl?: string | null;
  variant?: 'listing' | 'small' | 'detail';
}

const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = 'listing',
}: ProductCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case 'detail':
        return { size: { base: '320px', md: '540px' }, imgSize: 540 };
      case 'listing':
        return { size: { base: '160px', md: '240px' }, imgSize: 240 };
      default:
        return { size: { base: '300px' }, imgSize: 300 };
    }
  })();

  return (
    <>
      {blurDataUrl && (
        <ScaleImage
          src={imageUrl}
          width={imgSize ?? 240}
          height={imgSize ?? 240}
          containerWidth={size}
          containerHeight={size}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          alt={imageUrl}
        />
      )}
      {!blurDataUrl && (
        <ScaleImage
          src={imageUrl}
          width={imgSize ?? 240}
          height={imgSize ?? 240}
          containerWidth={size}
          containerHeight={size}
          alt={imageUrl}
        />
      )}
      {variant === 'small' && (
        <Box marginTop={1}>
          <Text as="h2" variant="medium" margin={0} padding={0}>
            {title}
          </Text>
          <Text as="span" variant="medium">
            {price}원
          </Text>
        </Box>
      )}
    </>
  );
};

export default ProductCard;
