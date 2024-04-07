import Grid from '@/components/layout/Grid';

interface ProductCardListProps {
  numberPerRow?: number;
  numberPerRowForMobile?: number;
}

const ProductCardList = ({
  numberPerRow = 4,
  numberPerRowForMobile = 1,
  children,
}: React.PropsWithChildren<ProductCardListProps>) => {
  return (
    <Grid
      gridGap={{ base: '4px', md: '8px' }}
      gridTemplateColumns={{
        base: `repeat(${numberPerRowForMobile}, 1fr)`,
        md: `repeat(2, 1fr)`,
        xl: `repeat(${numberPerRow}, 1fr)`,
        xxl: `repeat(6, 1fr)`,
      }}
    >
      {children}
    </Grid>
  );
};

export default ProductCardList;
