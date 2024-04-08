import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { LogoutIcon } from '@/components/atoms/IconButton';
import MenuButton from '@/components/atoms/MenuButton/indext';
import ShapeImage from '@/components/atoms/ShapeImage';
import Separator from '@/components/atoms/Sparator';
import Text from '@/components/atoms/Text';
import Flex from '@/components/layout/Flex';
import MenuItem from '@/components/molecules/MenuItem';
import MenuList from '@/components/molecules/MenuList.tsx';
import Menu from '@/components/organisms/Menu';
import {
  MeQuery,
  useLogoutMutation,
  useUploadProfileImageMutation,
} from '@/generated/graphql';

interface LoggedInMenuProps {
  meData: MeQuery | undefined;
}

const LoggedInMenu = ({ meData }: LoggedInMenuProps) => {
  const client = useApolloClient();
  const router = useRouter();
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const [upload] = useUploadProfileImageMutation();

  const profileImage = useMemo(() => {
    if (meData?.me?.profileImageUrl) {
      return `http://localhost:4000/${meData?.me?.profileImageUrl}`;
    }
    return 'http://localhost:4000/DefaultUser.png';
  }, [meData]);

  const onLogoutClick = async () => {
    try {
      if (!logoutLoading) {
        await logout();
        await client.resetStore();
        localStorage.removeItem('access_token');
        router.push('/').then(() => router.reload());
      }
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
      <Menu>
        <MenuButton paddingRight={0}>
          <ShapeImage
            shape="circle"
            width={30}
            height={30}
            src={profileImage}
            alt={profileImage}
          />
        </MenuButton>
        <MenuList isOpen={false}>
          <MenuItem>
            <Flex paddingTop={1} paddingBottom={1} alignItems="center">
              <label htmlFor="upload-profile-image">
                <input
                  id="upload-profile-image"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
                <ShapeImage
                  shape="circle"
                  width={60}
                  height={60}
                  src={profileImage}
                  alt={profileImage}
                  style={{ cursor: 'pointer' }}
                />
              </label>
              <Flex flexDirection="column" paddingLeft={1}>
                <Text
                  fontWeight="bold"
                  fontSize="mediumLarge"
                  marginBottom="5px"
                >
                  {meData?.me?.displayName}
                </Text>
                <Text fontSize="medium">{meData?.me?.email}</Text>
              </Flex>
            </Flex>
          </MenuItem>
          <Separator />
          <MenuItem>
            <Flex onClick={onLogoutClick} style={{ cursor: 'pointer' }}>
              <LogoutIcon color="danger" />
              <Text fontWeight="bold" color="danger" marginLeft="5px">
                로그아웃
              </Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default LoggedInMenu;
