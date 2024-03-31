import Spinner from '../atoms/Spinner';
import CartProduct from '@/components/organisms/CartProduct';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import {
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from '@/generated/graphql';
// import purchase from '@/services/purchases/purchase';

const CartContainer = () => {
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const { data, loading, error } = useGetCartItemsQuery();
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleRemoveButtonClick = async (productId: number) => {
    try {
      setGlobalSpinner(true);
      await removeFromCart({
        variables: { productId },
      });
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
      // await purchase(context, { productId });
      window.alert('구매 완료');
      removeFromCart({
        variables: { productId },
      });
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
