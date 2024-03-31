import { useEffect } from 'react';
import Spinner from '../atoms/Spinner';
import CartProduct from '@/components/organisms/CartProduct';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import {
  GetCartItemsDocument,
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from '@/generated/graphql';

const CartContainer = () => {
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const { data, loading, error, refetch } = useGetCartItemsQuery();
  const [removeFromCart] = useRemoveFromCartMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleRemoveButtonClick = async (productId: number) => {
    try {
      setGlobalSpinner(true);
      await removeFromCart({
        variables: { productId },
        refetchQueries: [{ query: GetCartItemsDocument }],
      });
      window.alert('삭제 완료');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  const handleBuyButtonClick = async (productId: number) => {
    try {
      setGlobalSpinner(true);
      await removeFromCart({
        variables: { productId },
        refetchQueries: [{ query: GetCartItemsDocument }],
      });
      window.alert('구매 완료');
    } catch (error: unknown) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  if (error) {
    console.error(error);
    return;
  }

  return (
    <>
      {loading && <Spinner />}
      {!loading &&
        data?.getCartItems &&
        data.getCartItems.map(({ product }) => (
          <CartProduct
            key={product.id}
            id={product.id}
            imageUrl={
              product.imageUrl && `http://localhost:4000/${product.imageUrl}`
            }
            title={product.title}
            price={product.price}
            onRemoveButtonClick={handleRemoveButtonClick}
            onBuyButtonClick={handleBuyButtonClick}
          />
        ))}
    </>
  );
};

export default CartContainer;
