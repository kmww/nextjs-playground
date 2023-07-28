import { ProductType } from '@/types/product';
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactElement } from 'react';

const ProductCard = (props: ProductType): ReactElement => {
  const price = ((props.price / 100) * 1.1).toFixed(2);

  return (
    <Link href={`/product/${props.slug}`} passHref>
      <Box
        border='1px'
        borderColor='gray.200'
        px='10'
        py='5'
        rounded='lg'
        boxShadow='lg'
        bgColor='white'
        transition='ease 0.2s'
        _hover={{
          boxShadow: 'xl',
          transform: 'scale(1.02)',
        }}>
        <Image src={props.images[0]?.url} alt={props.name} />
        <Divider my='3' />
        <Box>
          <Text fontWeight='bold' textColor='purple' fontSize='lg'>
            {props.name}
          </Text>
          <Text textColor='gray.700'>${price}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
