import Link from 'next/link';
import { useMemo } from 'react';
import { Anchor, NavLink } from './';
import { LogoutIcon } from '@/components/atoms/IconButton';
import ShapeImage from '@/components/atoms/ShapeImage';
import { useMeQuery } from '@/generated/graphql';

interface LoggedInMenuProps {
  isAuth: boolean;
}

const LoggedInMenu = ({ isAuth }: LoggedInMenuProps) => {
  const { data } = useMeQuery({ skip: !isAuth });

  const profileImage = useMemo(() => {
    if (data?.me?.profileImageUrl) {
      return `${data?.me?.profileImageUrl}`;
    }
    return '';
  }, [data]);

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
