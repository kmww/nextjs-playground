import useSearch from '@/services/products/use-search';
import { ApiContext, Category, Condition } from '@/types';
import ProductCardList from '@/components/organisms/ProductCardList';
import Box from '@/components/layout/Box';
import RectLoader from '@/components/atoms/RectLoader';
import Link from 'next/link';
import ProductCard from '@/components/organisms/ProductCard';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/porxy',
};

interface ProductCardListContainerProps {
  category?: Category;
  conditions?: Condition[];
}

const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  const { products, isLoading } = useSearch(context, {
    category,
    conditions,
  });

  return (
    <ProductCardList>
      {isLoading &&
        Array.from(Array(16), (_, index) => (
          <Box key={index}>
            <Box display={{ base: 'none', md: 'block' }}>
              <RectLoader width={240} height={240} />
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <RectLoader width={160} height={160} />
            </Box>
          </Box>
        ))}
      {!!isLoading &&
        products.map((product) => (
          <Box key={product.id}>
            <Link href={`/products/${product.id}`} passHref>
              <ProductCard
                variant="listing"
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                blurDataUrl={product.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  );
};

export default ProductCardListContainer;
