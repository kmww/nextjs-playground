import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

interface DetailPostProps {
  date: string;
  title: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) return { props: {} };
  const { date, title } = params;

  return {
    props: {
      date,
      title,
    },
  };
};

const DetailPost: NextPage<DetailPostProps> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <Image
        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
        width={500}
        height={200}
        alt='setter'
      />
      <div>{props.date}</div>
    </>
  );
};

export default DetailPost;
