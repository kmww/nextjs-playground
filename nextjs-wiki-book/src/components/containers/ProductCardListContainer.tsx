import Link from 'next/link';
import uuid from 'react-uuid';
import RectLoader from '@/components/atoms/RectLoader';
import Box from '@/components/layout/Box';
import ProductCard from '@/components/organisms/ProductCard';
import ProductCardList from '@/components/organisms/ProductCardList';
import { useSearchProductsQuery } from '@/generated/graphql';
import { Category, Condition } from '@/types';

interface ProductCardListContainerProps {
  category?: Category;
  conditions?: Condition[];
}

const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  const { data, loading, error } = useSearchProductsQuery({
    variables: {
      category,
      conditions,
    },
  });

  if (error) {
    console.error(`${error}`);
    return;
  }

  return (
    <ProductCardList>
      {loading &&
        Array.from(Array(16), () => (
          <Box key={uuid()}>
            <Box display={{ base: 'none', md: 'block' }}>
              <RectLoader width={240} height={240} />
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <RectLoader width={160} height={160} />
            </Box>
          </Box>
        ))}
      {!loading &&
        data?.searchProducts.map((product) => (
          <Box key={`${uuid()}${product.id}`}>
            <Link href={`/products/${product.id}`} passHref>
              <ProductCard
                variant="listing"
                title={product.title}
                price={product.price}
                imageUrl={
                  product.imageUrl &&
                  `http://localhost:4000/${product.imageUrl.replace(
                    /^public\//,
                    '',
                  )}`
                }
                blurDataUrl={product.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  );
};

export default ProductCardListContainer;
