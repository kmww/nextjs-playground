import Button from '@/components/atoms/Button';
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { Product } from '@/types';

interface AddToCartButtonContainerProps {
  product: Product;
  onAddToCartButtonClick?: (product: Product) => void;
}

const AddToCartButtonContainer = ({
  product,
  onAddToCartButtonClick,
}: AddToCartButtonContainerProps) => {
  const { cart, addProductToCart } = useShoppingCartContext();

  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id);
    const result = cart.findIndex((item) => item.id === productId);

    if (result === -1) {
      addProductToCart(product);
    }

    onAddToCartButtonClick && onAddToCartButtonClick(product);
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
