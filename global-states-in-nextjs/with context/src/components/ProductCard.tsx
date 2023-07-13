import { ReactElement, useContext } from 'react';
import cartContext from '@/context/cartContext';
import { Action } from '@/types/actionType';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  picture: string;
}

const ProductCard = ({
  id,
  name,
  picture,
  price,
}: ProductCardProps): ReactElement => {
  const { items, setItems } = useContext(cartContext);
  const productAmount = items?.[id] ?? 0;

  const handleAmount = (action: Action) => {
    if (action.type === 'increment') {
      const newItemAmount = id in items ? items[id] + 1 : 1;
      setItems({ ...items, [id]: newItemAmount });
    }

    if (action.type === 'decrement') {
      if (items?.[id] > 0) {
        setItems({ ...items, [id]: items[id] - 1 });
      }
    }
  };

  return (
    <div className='bg-gray-200 p-6 rounded-md'>
      <div className='relative 100% h-40 m-auto'>
        <img src={picture} alt={name} className='object-cover' />
      </div>
      <div className='flex justify-between mt-4'>
        <div className='font-bold text-l'> {name} </div>
        <div className='font-bold text-l text-gray-500'> ${price} per kg </div>
      </div>
      <div className='flex justify-between mt-4 w-2/4 m-auto'>
        <button
          className='pl-2 pr-2 bg-red-400 text-white rounded-md'
          disabled={productAmount === 0}
          onClick={() => handleAmount({ type: 'decrement' })}>
          -
        </button>
        <div>{productAmount}</div>
        <button
          className='pl-2 pr-2 bg-green-400 text-white rounded-md'
          onClick={() => handleAmount({ type: 'increment' })}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
