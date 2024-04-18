import { useSetRecoilState } from 'recoil';
import Button from '@/components/atoms/Button';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';
import { globalToast } from '@/contexts/GlobalToast/globalToast';
import { Product, useAddTocartMutation } from '@/generated/graphql';

interface AddToCartButtonContainerProps {
  product: Product;
}

const AddToCartButtonContainer = ({
  product,
}: AddToCartButtonContainerProps) => {
  const [addToCart] = useAddTocartMutation();
  const setGlobalSpinner = useSetRecoilState(globalSpinner);
  const setToast = useSetRecoilState(globalToast);

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
        setToast([true, '이미 장바구니에 추가한 상품입니다.', 'info']);
      } else {
        setToast([true, '장바구니에 상품이 담겼습니다.', 'primary']);
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
