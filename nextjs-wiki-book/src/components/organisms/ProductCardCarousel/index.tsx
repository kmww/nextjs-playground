import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import ShapeImage from '@/components/atoms/ShapeImage';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import ProductCard from '@/components/organisms/ProductCard';
import { Product } from '@/generated/graphql';

interface ProductCardCarouselProps {
  products?: Product[];
}

const ProductCardCrousel = ({ products }: ProductCardCarouselProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  if (!products) {
    return null;
  }

  const settings: Settings = {
    dots: true,
    infinite: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 2,
    afterChange: () => setIsDragging(false),
    beforeChange: () => setIsDragging(true),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDragging = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const renderProductLessThree = (productList: Product[]) => {
    return (
      <>
        {productList.map((product) => (
          <Box key={product.id}>
            <Box key={product.id}>
              <Link
                href={`/products/${product.id}`}
                onClick={handleDragging}
                passHref
              >
                <ProductCard
                  variant="small"
                  title={product.title}
                  price={product.price}
                  imageUrl={
                    product.imageUrl &&
                    `http://localhost:4000/${product.imageUrl}`
                  }
                  blurDataUrl={product.blurDataUrl}
                />
              </Link>
            </Box>
          </Box>
        ))}
      </>
    );
  };

  return (
    <div
      className="slider-container"
      style={{ width: '100%', maxWidth: '100vw' }}
    >
      {products.length > 1 ? (
        <Slider {...settings}>
          {products.map((product: Product) => (
            <Box key={product.id} width={{ base: '250px', md: 'auto' }}>
              <Link
                href={`/products/${product.id}`}
                onClick={handleDragging}
                passHref
              >
                <ProductCard
                  variant="small"
                  title={product.title}
                  price={product.price}
                  imageUrl={
                    product.imageUrl &&
                    `http://localhost:4000/${product.imageUrl}`
                  }
                  blurDataUrl={product.blurDataUrl}
                />
              </Link>
            </Box>
          ))}
          {products.length === 6 ? (
            <Box>
              <Link href={`/search/${products[0].category}`}>
                <Flex flexDirection="column" alignItems="center" paddingTop={4}>
                  <ShapeImage
                    src="/moreProducts.png"
                    alt="더보기"
                    shape="circle"
                    width={200}
                    height={200}
                    style={{ cursor: 'pointer' }}
                  />
                  <Text
                    color="secondary"
                    fontSize="extraLarge"
                    fontWeight="bold"
                    paddingTop={2}
                  >
                    상품 더보기+
                  </Text>
                </Flex>
              </Link>
            </Box>
          ) : (
            <Box>
              <Flex flexDirection="column" alignItems="center" paddingTop={4}>
                <ShapeImage
                  src="/noProducts.png"
                  alt="상품 없음"
                  shape="circle"
                  width={200}
                  height={200}
                />
                <Text
                  color="secondary"
                  fontSize="extraLarge"
                  fontWeight="bold"
                  paddingTop={2}
                >
                  상품이 없습니다
                </Text>
              </Flex>
            </Box>
          )}
        </Slider>
      ) : (
        <Box>{renderProductLessThree(products)}</Box>
      )}
    </div>
  );
};

export default ProductCardCrousel;
