import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Spinner from '../atoms/Spinner';
import CartProduct from '@/components/organisms/CartProduct';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';
import { globalToast } from '@/contexts/GlobalToast/globalToast';
import {
  GetCartItemsDocument,
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from '@/generated/graphql';

const CartContainer = () => {
  const setGlobalSpinner = useSetRecoilState(globalSpinner);
  const setToast = useSetRecoilState(globalToast);
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
      setToast([true, '삭제 완료', 'primary']);
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
      setToast([true, '구매 완료', 'primary']);
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
