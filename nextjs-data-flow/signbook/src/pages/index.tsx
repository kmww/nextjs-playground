import Loading from '@/components/Loading';
import Sign from '@/components/Sign';
import GET_LATEST_SIGNS from '@/lib/apollo/queries/getLatestSigns';
import { SignQueryDataType } from '@/types/SignDataType';
import { QueryResult, useQuery } from '@apollo/client';
import Link from 'next/link';

const HomePage = () => {
  const { loading, data }: QueryResult<SignQueryDataType> =
    useQuery<SignQueryDataType>(GET_LATEST_SIGNS, {
      fetchPolicy: 'no-cache',
    });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex justify-center items-center flex-col mt-20'>
      <h1 className='text-3xl mb-5'>Next.js signbook</h1>
      <Link href='/new-sign'>
        <button className='mb-8 border-2 border-purple-800 text-purple-900 p-2 rounded-lg text-gray-50 m-auto mt-4'>
          Add New Sign
        </button>
      </Link>
      <div>
        {data?.sign.map((sign) => (
          <Sign key={sign.uuid} {...sign} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
