import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users as UsersType } from '@/types/user';

const List = ({ users }: UsersType) => {
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
};

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await fetch('/api/04/users');
      const users = await req.json();

      setLoading(false);
      setData(users);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {data && <List users={data} />}
    </div>
  );
};

export default Users;
