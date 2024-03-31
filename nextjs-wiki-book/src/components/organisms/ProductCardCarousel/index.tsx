import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';

interface ProductCardCarouselProps {
  children?: React.ReactNode;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: 'absolute';
`;

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <ArrowContainer
      className={className}
      style={{ ...style, display: 'black' }}
      onClick={onClick}
    >
      <ArrowForwardIosOutlined
        fontSize="large"
        color="action"
        sx={{ position: 'relative', bottom: -2, left: -50 }}
      />
    </ArrowContainer>
  );
};

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <ArrowContainer
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <ArrowBackIosNewOutlined
        fontSize="large"
        color="action"
        sx={{ position: 'relative', top: 'calc(50% - 35px)', right: 10 }}
      />
    </ArrowContainer>
  );
};

const ProductCardCrousel = ({ children }: ProductCardCarouselProps) => {
  const ChildComponent = React.Children.toArray(children);
  const itemLength = ChildComponent.length;

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {itemLength > 3 ? (
        <Slider {...settings}>{children}</Slider>
      ) : (
        <>
          <Flex display={{ base: 'none', md: 'flex' }}>
            {ChildComponent.map((child, index) => (
              <Box key={index} minWidth="347px">
                {child}
              </Box>
            ))}
          </Flex>
          <Box display={{ base: 'block', md: 'none' }}>
            <Slider {...settings}>{children}</Slider>
          </Box>
        </>
      )}
    </div>
  );
};

export default ProductCardCrousel;
