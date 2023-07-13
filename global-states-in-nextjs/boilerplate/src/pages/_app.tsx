import Navbar from '@/components/Navbar';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <div className='w-9/12 m-auto pt-10'>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
