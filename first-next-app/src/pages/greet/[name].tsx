import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface GreetProps {
  name: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) return { props: {} };
  const { name } = params;
  return {
    props: {
      name,
    },
  };
};

const Greet: NextPage<GreetProps> = (props) => {
  const { query } = useRouter();

  return (
    <>
      <h1> Hello, {props.name}! (use params)</h1>
      <h1> Hello, {query.name}! (use router)</h1>
    </>
  );
};

export default Greet;
