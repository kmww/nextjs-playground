import styled from 'styled-components';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  blurDataUrl?: string;
  variant?: 'listing' | 'small' | 'detail';
}

const ProductCardContainer = styled.div`
  position: relative;
`;

const ProductCardImageContainer = styled.div`
  z-index: 99;
`;

const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`;
