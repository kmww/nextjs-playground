import Navbar from '@/components/Navbar';
import type { AppProps } from 'next/app';
import ShoppingCartContext from '@/components/context/cartContext';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [items, setItems] = useState({});

  return (
    <>
      <Navbar />
      <ShoppingCartContext.Provider value={{ items, setItems }}>
        <div className='w-9/12 m-auto pt-10'>
          <Component {...pageProps} />
        </div>
      </ShoppingCartContext.Provider>
    </>
  );
};

export default App;
