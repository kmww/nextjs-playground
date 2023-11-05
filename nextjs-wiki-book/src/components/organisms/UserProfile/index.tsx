import ShapeImage from '@/components/atoms/ShapeImage';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';

interface UserProfileProps {
  variant?: 'normal' | 'small';
  username: string;
  profileImageUrl: string;
  numberOfProducts: number;
  description?: string;
}

const UserProfile = ({
  variant = 'normal',
  username,
  profileImageUrl,
  numberOfProducts,
  description,
}: UserProfileProps) => {
  const profileImageSize = variant === 'small' ? 100 : 120;

  return (
    <Box minWidth={`${profileImageSize}px`}>
      <ShapeImage
        shape="circle"
        quality="85"
        src={profileImageUrl}
        alt={username}
        height={profileImageSize}
        width={profileImageSize}
      />
      <Box padding={1}>
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text
              as="p"
              fontWeight="bold"
              variant="mediumLarge"
              marginTop={0}
              marginBottom={1}
            >
              {username}
            </Text>
            <Text as="p" marginTop={0} marginLeft={1}>
              {numberOfProducts}개의 제품 게시 완료
            </Text>
            {variant === 'normal' && (
              <Text as="p" margin={0}>
                {description}
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default UserProfile;
