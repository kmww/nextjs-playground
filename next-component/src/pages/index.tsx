import Button from '@/components/Button';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next-component</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>
          <Button
            disabled={false}
            label='Presentational Component'
            onClick={() => console.log('clicked')}
            text='console'
          />
        </div>
      </main>
    </>
  );
};

export default Home;
