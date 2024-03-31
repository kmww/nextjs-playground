import Button from '@/components/atoms/Button';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import { useAddTocartMutation } from '@/generated/graphql';
import { Product } from '@/types';

interface AddToCartButtonContainerProps {
  product: Product;
}

const AddToCartButtonContainer = ({
  product,
}: AddToCartButtonContainerProps) => {
  const [addToCart] = useAddTocartMutation();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();

  const handleAddToCartButtonClick = async () => {
    try {
      setGlobalSpinner(true);
      const productId = Number(product.id);
      await addToCart({
        variables: {
          cartItemInput: { productId: productId, quantity: 1 },
        },
      });
      window.alert('장바구니에 상품이 담겼습니다!');
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return (
    <Button
      width={{ base: '100%', md: '400px' }}
      height="66px"
      onClick={handleAddToCartButtonClick}
    >
      카트에 추가
    </Button>
  );
};

export default AddToCartButtonContainer;
