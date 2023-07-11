import { User, Users } from '@/types/user';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface UserPageProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  ctx
) => {
  const { username } = ctx.query;
  const { data } = await axios.get<User>(
    `${process.env.API_ENDPOINT}/api/04/users/${username}`,
    {
      headers: {
        Authorization: process.env.API_TOKEN,
      },
    }
  );

  return {
    props: {
      user: data,
    },
  };
};

const UserPage = ({ user }: UserPageProps) => {
  return (
    <div>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <img
          src={user.profile_picture}
          alt={user.username}
          width={150}
          height={150}
        />
        <div>
          <div>
            <b>Username: </b> {user.username}
          </div>
          <div>
            <b>Full name: </b> {user.last_name}
          </div>
          <div>
            <b>Email: </b> {user.email}
          </div>
          <div>
            <b>Company: </b> {user.company}
          </div>
          <div>
            <b>Job title: </b> {user.job_title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
