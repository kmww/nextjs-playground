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
          <Box key={product.id} minWidth="347px">
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
    <div className="slider-container">
      {products.length > 3 ? (
        <Slider {...settings}>
          {products.map((product: Product) => (
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
          ))}
          {products.length === 6 && (
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
                  더보기+
                </Text>
              </Flex>
            </Link>
          )}
        </Slider>
      ) : (
        <>
          <Flex display={{ base: 'none', md: 'flex' }}>
            {renderProductLessThree(products)}
          </Flex>
          <Box display={{ base: 'block', md: 'none' }}>
            <Slider {...settings}>{renderProductLessThree(products)}</Slider>
          </Box>
        </>
      )}
    </div>
  );
};

export default ProductCardCrousel;
