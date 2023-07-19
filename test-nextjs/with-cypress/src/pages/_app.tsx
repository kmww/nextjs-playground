import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <Component {...pageProps} />;
    </div>
  );
};

export default App;
