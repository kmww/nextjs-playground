import { Product } from '@/types';

interface AddToCartButtonContainerProps {
  product: Product;
  onAddToCartButtonClick?: (product: Product) => void;
}
