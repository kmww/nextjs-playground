interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  blurDataUrl?: string;
  variant?: 'listing' | 'small' | 'detail';
}
