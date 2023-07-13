import CartContext from '@/context/cartContext';
import { getFullItem } from '@/utils/getFullItem';
import { useContext } from 'react';

const Cart = () => {
  const { items } = useContext(CartContext);
  const total = Object.keys(items)
    .map((id) => getFullItem(id).price * items[id])
    .reduce((x, y) => x + y, 0);

  const amounts = Object.keys(items).map((id) => {
    const item = getFullItem(id);
    return { item, amount: items[id] };
  });

  return (
    <div>
      <h1 className='text-xl font-bold'> Total: ${total} </h1>
      <div>
        {amounts.map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
