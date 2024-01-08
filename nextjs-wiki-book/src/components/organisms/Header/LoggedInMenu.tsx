import { useApolloClient } from '@apollo/client';
import Link from 'next/link';
import { useMemo } from 'react';
import { Anchor, NavLink } from './';
import { LogoutIcon } from '@/components/atoms/IconButton';
import ShapeImage from '@/components/atoms/ShapeImage';
import { useLogoutMutation, useMeQuery } from '@/generated/graphql';

interface LoggedInMenuProps {
  isAuth: boolean;
}

const LoggedInMenu = ({ isAuth }: LoggedInMenuProps) => {
  const client = useApolloClient();
  const { data } = useMeQuery({ skip: !isAuth });
  const [logout, { loading: logoutLoading }] = useLogoutMutation();

  const profileImage = useMemo(() => {
    if (data?.me?.profileImageUrl) {
      return `${data?.me?.profileImageUrl}`;
    }
    return '';
  }, [data]);

  const onLogoutClick = async () => {
    try {
      await logout();
      localStorage.removeItem('access_token');
      await client.resetStore();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavLink>
        <Link href={`/users/${data?.me?.id}`} passHref>
          <Anchor>
            <ShapeImage
              shape="circle"
              src={profileImage}
              width={24}
              height={24}
              data-testid="profile-shape-image"
              alt={profileImage}
            />
          </Anchor>
        </Link>
      </NavLink>
      <NavLink>
        <Anchor>
          <LogoutIcon />
        </Anchor>
      </NavLink>
    </>
  );
};

export default LoggedInMenu;
