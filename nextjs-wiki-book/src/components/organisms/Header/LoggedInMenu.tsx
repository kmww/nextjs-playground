import { useApolloClient } from '@apollo/client';
import { useMemo } from 'react';
import { Anchor, NavLink } from './';
import { LogoutIcon } from '@/components/atoms/IconButton';
import ShapeImage from '@/components/atoms/ShapeImage';
import Spinner from '@/components/atoms/Spinner';
import Box from '@/components/layout/Box';
import {
  useLogoutMutation,
  useMeQuery,
  useUploadProfileImageMutation,
} from '@/generated/graphql';

interface LoggedInMenuProps {
  isAuth: boolean;
}

const LoggedInMenu = ({ isAuth }: LoggedInMenuProps) => {
  const client = useApolloClient();
  const { data } = useMeQuery({ skip: !isAuth });
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const [upload] = useUploadProfileImageMutation();

  const profileImage = useMemo(() => {
    if (data?.me?.profileImageUrl) {
      return `http://localhost:4000/${data?.me?.profileImageUrl}`;
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      await upload({
        variables: { file },
        update: (cache) => {
          cache.evict({ fieldName: 'me' });
        },
      });
    }
  };

  return (
    <>
      <NavLink>
        <Box>
          <input
            id="upload-profile-image"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
          <ShapeImage
            shape="circle"
            src={profileImage}
            width={24}
            height={24}
            data-testid="profile-shape-image"
            alt={profileImage}
          />
        </Box>
      </NavLink>
      <NavLink>
        <Anchor>
          {!logoutLoading ? (
            <LogoutIcon onClick={onLogoutClick} />
          ) : (
            <Spinner size={24} />
          )}
        </Anchor>
      </NavLink>
    </>
  );
};

export default LoggedInMenu;
