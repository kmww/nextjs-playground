import { GetServerSideProps, NextPage } from 'next';

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
      <div>{props.date}</div>
    </>
  );
};

export default DetailPost;
