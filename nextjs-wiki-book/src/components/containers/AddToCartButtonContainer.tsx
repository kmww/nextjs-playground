import Button from '@/components/atoms/Button';
import { useAddTocartMutation } from '@/generated/graphql';
import { Product } from '@/types';

interface AddToCartButtonContainerProps {
  product: Product;
}

const AddToCartButtonContainer = ({
  product,
}: AddToCartButtonContainerProps) => {
  const [addToCart] = useAddTocartMutation();

  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id);
    addToCart({
      variables: {
        cartItemInput: { productId: productId, quantity: 1 },
      },
    });
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
