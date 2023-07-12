import { useEffect, useState } from 'react';
import Link from 'next/link';
import { User } from '@/types/user';
import { GetServerSideProps } from 'next';

interface UserDataProps {
  user: User;
}

interface UserPageProps {
  username: string;
}

const UserData = ({ user }: UserDataProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <img
        src={user.profile_picture}
        alt={user.username}
        width={150}
        height={150}
      />
      <div>
        <div>
          <b>Username:</b> {user.username}
        </div>
        <div>
          <b>Full name:</b> {user.first_name} {user.last_name}
        </div>
        <div>
          <b>Email:</b> {user.email}
        </div>
        <div>
          <b>Company:</b> {user.company}
        </div>
        <div>
          <b>Job title:</b> {user.job_title}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.query;

  return {
    props: {
      username,
    },
  };
};

const UserPage = ({ username }: UserPageProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(`/api/singleUser?username=${username}`);
      const data = await req.json();

      setLoading(false);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <hr />
      {loading && <div>Loading user data...</div>}
      {data && <UserData user={data} />}
    </div>
  );
};

export default UserPage;
