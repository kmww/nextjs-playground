import useSearch from '@/services/products/use-search';
import { ApiContext, Product } from '@/types';
import ProductCardList from '@/components/organisms/ProductCardList';
import { Fragment } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/organisms/ProductCard';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
};

interface UserProductCardListContainerProps {
  userId: number;
  products?: Product[];
}

const UserProductCardListContainer = ({
  userId,
  products,
}: UserProductCardListContainerProps) => {
  const { products: userProducts } = useSearch(context, {
    userId,
    initial: products,
  });

  return (
    <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
      {userProducts.map((p) => (
        <Fragment key={p.id}>
          <Link href={`/products/${p.id}`} passHref>
            <ProductCard
              variant="small"
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          </Link>
        </Fragment>
      ))}
    </ProductCardList>
  );
};

export default UserProductCardListContainer;
