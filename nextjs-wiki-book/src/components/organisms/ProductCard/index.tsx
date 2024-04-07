import styled from 'styled-components';
import ScaleImage from '@/components/atoms/ScaleImage';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  blurDataUrl?: string | null;
  variant?: 'listing' | 'small' | 'detail';
}

const StyledProductCard = styled(Flex)`
  transition: transform 0.5s linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

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
        return { size: { base: '250px', md: '300px' }, imgSize: 540 };
      case 'listing':
        return { size: { base: '160px', md: '240px' }, imgSize: 240 };
      default:
        return { size: { base: '250px', md: '300px' }, imgSize: 300 };
    }
  })();

  return (
    <StyledProductCard
      flexDirection="column"
      backgroundColor="secondaryLight"
      width={size}
      padding={2}
      margin={1}
      style={{ borderRadius: '10px', boxSizing: 'content-box' }}
    >
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
        <Box marginTop={1} width="250px">
          <Text
            as="h2"
            variant="mediumLarge"
            height="26px"
            margin={0}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {title}
          </Text>
          <Text
            as="span"
            variant="medium"
            display="block"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {price}원
          </Text>
        </Box>
      )}
    </StyledProductCard>
  );
};

export default ProductCard;
