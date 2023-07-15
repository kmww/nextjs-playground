import { GetServerSideProps } from 'next';

interface GreetUserProps {
  user: string;
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  if (!req) {
    return { props: {} };
  }

  return {
    props: {
      user: req.params?.user,
    },
  };
};

const GreetUser = ({ user }: GreetUserProps) => {
  return (
    <div>
      <h1>Hello {user}!</h1>
    </div>
  );
};

export default GreetUser;
