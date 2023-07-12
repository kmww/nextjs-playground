import { ReactElement } from 'react';

interface SignProps {
  content: string;
  nickname: string;
  country: string;
}

const Sign = ({ content, country, nickname }: SignProps): ReactElement => {
  return (
    <div className='max-w-7xl rounded-md border-2 border-purple-800 shadow-xl bg-purple-50 p-7 mb-10'>
      <p className='text-gray-700'> {content}</p>
      <hr className='mt-3 mb-3 bordeer-5-0 border-b-2 border-purple-800' />
      <div>
        <div className='text-purple-900'>
          Written by <b>{nickname}</b>
          {country && <span> from {country}</span>}
        </div>
      </div>
    </div>
  );
};

export default Sign;
