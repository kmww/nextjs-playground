import Navbar from '@/components/Navbar';
import { useStore } from '@/redux/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className='w-9/12 m-auto pt-10'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
};

export default App;
