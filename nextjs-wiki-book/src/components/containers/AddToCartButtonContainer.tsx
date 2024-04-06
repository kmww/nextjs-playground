import Button from '@/components/atoms/Button';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import { Product, useAddTocartMutation } from '@/generated/graphql';

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
      const res = await addToCart({
        variables: {
          cartItemInput: { productId: productId, quantity: 1 },
        },
      });

      if (res.data?.addToCart.message === 'Product already exists in cart') {
        window.alert('이미 장바구니에 추가한 상품입니다.');
      } else {
        window.alert('장바구니에 상품이 담겼습니다!');
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'unAuthenticated') {
          window.alert('로그인이 필요합니다.');
        } else {
          console.error(error.message);
        }
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
