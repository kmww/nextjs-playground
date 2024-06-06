import ShapeImage from '@/components/atoms/ShapeImage';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';

interface UserProfileProps {
  variant?: 'normal' | 'small';
  username: string;
  profileImageUrl: string;
  description?: string | null;
}

const UserProfile = ({
  variant = 'normal',
  username,
  profileImageUrl,
  description,
}: UserProfileProps) => {
  const profileImageSize = variant === 'small' ? 100 : 120;

  return (
    <Flex>
      <Box minWidth={`${profileImageSize}px`}>
        <ShapeImage
          shape="circle"
          quality="85"
          src={profileImageUrl !== null ? profileImageUrl : '/DefaultUser.png'}
          alt={username}
          height={profileImageSize}
          width={profileImageSize}
        />
      </Box>
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
            <Text
              as="p"
              width="200px"
              marginTop={0}
              marginBottom={1}
              wordBreak="keep-all"
            >
              {description && description}
            </Text>
            {variant === 'normal' && (
              <Text as="p" margin={0} data-testid="user-description">
                {description && description}
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserProfile;
