import { GetServerSideProps, NextPage } from 'next';

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
  return <h1> Hello, {props.name}! </h1>;
};

export default Greet;
