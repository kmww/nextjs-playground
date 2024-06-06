import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LogoutIcon, SettingIcon } from '@/components/atoms/IconButton';
import MenuButton from '@/components/atoms/MenuButton/indext';
import ShapeImage from '@/components/atoms/ShapeImage';
import Separator from '@/components/atoms/Sparator';
import Text from '@/components/atoms/Text';
import UserProfileContainer, {
  UserUploadDataProps,
} from '@/components/containers/UserProfileContainer';
import Flex from '@/components/layout/Flex';
import MenuItem from '@/components/molecules/MenuItem';
import MenuList from '@/components/molecules/MenuList.tsx';
import Menu from '@/components/organisms/Menu';
import {
  isLoggedInState,
  profileImageUrlState,
  userData,
} from '@/contexts/Auth/auth';
import { globalToast } from '@/contexts/GlobalToast/globalToast';
import {
  MeQuery,
  useLogoutMutation,
  useUpdateUserDataMutation,
  useUploadProfileImageMutation,
} from '@/generated/graphql';

interface LoggedInMenuProps {
  meData: MeQuery | undefined;
}

const LoggedInMenu = ({ meData }: LoggedInMenuProps) => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const setToast = useSetRecoilState(globalToast);
  const client = useApolloClient();
  const router = useRouter();
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const [upload] = useUploadProfileImageMutation();
  const [updateUser, { loading: updateUserLoading }] =
    useUpdateUserDataMutation();
  const [profileImageUrl, setProfileImageUrl] =
    useRecoilState(profileImageUrlState);
  const setMeData = useSetRecoilState(userData);

  const profileImage = useMemo(() => {
    if (profileImageUrl) {
      return `${process.env.NEXT_PUBLIC_BASE_URL}/${profileImageUrl}`;
    }
    return '/DefaultUser.png';
  }, [profileImageUrl]);

  const onLogoutClick = async () => {
    try {
      if (!logoutLoading) {
        await logout();
        await client.resetStore();
        setIsLoggedIn(false);
        setMeData(undefined);
        localStorage.removeItem('profileImage');
        localStorage.removeItem('access_token');
        setToast([true, '로그아웃이 완료되었습니다.', 'primary']);
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const res = await upload({
        variables: { file },
        update: (cache) => {
          cache.evict({ fieldName: 'me' });
        },
      });
      setProfileImageUrl(res.data?.uploadProfileImage);
    }
  };

  const handleUserUpload = async (data: UserUploadDataProps) => {
    if (!updateUserLoading) {
      await updateUser({
        variables: { description: data.description },
        update: (cache) => {
          cache.evict({ fieldName: 'me' });
        },
      });
      setToast([true, '설정이 완료되었습니다.', 'primary']);
      setIsDialogOpen(false);
    }
  };

  const handleDialogStatus = (value: boolean) => {
    setIsDialogOpen(value);
  };

  return (
    <>
      <UserProfileContainer
        open={isDialogOpen}
        onDialogStatus={handleDialogStatus}
        onUserUpload={handleUserUpload}
      />
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
                <Text fontSize="small" wordBreak="break-word" textWrap="wrap">
                  {meData?.me?.description}
                </Text>
              </Flex>
            </Flex>
          </MenuItem>
          <Separator />
          <MenuItem>
            <Flex
              onClick={() => handleDialogStatus(true)}
              marginBottom={2}
              style={{ cursor: 'pointer' }}
            >
              <SettingIcon color="text" />
              <Text fontWeight="bold" marginLeft="5px">
                유저소개
              </Text>
            </Flex>
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
