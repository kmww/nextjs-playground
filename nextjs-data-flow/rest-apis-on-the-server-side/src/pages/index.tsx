import Link from 'next/link';
import axios from 'axios';
import { Users } from '@/types/user';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<Users>(
    `${process.env.API_ENDPOINT}/api/04/users`
  );

  return {
    props: {
      users: data,
    },
  };
};

function HomePage({ users }: Users) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
