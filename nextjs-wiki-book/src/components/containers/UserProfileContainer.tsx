import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import TextArea from '@/components/atoms/TextArea';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Dialog from '@/components/organisms/Dialog';

export interface UserUploadDataProps {
  description: string;
}

interface UserProfileProps {
  open: boolean;
  onDialogStatus: (value: boolean) => void;
  onUserUpload?: (data: UserUploadDataProps) => void;
}

const UserProfileContainer = ({
  open,
  onDialogStatus,
  onUserUpload,
}: UserProfileProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserUploadDataProps>();

  const handelSubmit = (data: UserUploadDataProps) => {
    onUserUpload && onUserUpload(data);
  };

  return (
    <Dialog open={open} onClose={() => onDialogStatus(false)} title="프로필">
      <form onSubmit={handleSubmit(handelSubmit)}>
        <Box>
          <Box>
            <Text as="label" variant="medium">
              사용자 설명
            </Text>
            <Controller
              control={control}
              name="description"
              rules={{ maxLength: 30 }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextArea
                  placeholder="30자까지 입력가능하며, 줄바꿈은 적용되지 않습니다."
                  hasError={!!error}
                  onChange={onChange}
                >
                  {value}
                </TextArea>
              )}
            />
            {errors.description && (
              <Text color="danger" variant="small">
                사용자 설명은 30자까지 입력 가능합니다
              </Text>
            )}
          </Box>
          <Box>
            <Text as="p" variant="small" color="gray">
              프로필 사진을 클릭시 사진을 변경할 수 있습니다.
            </Text>
          </Box>
        </Box>
        <Flex justifyContent="flex-end" marginTop={1}>
          <Button onClick={() => onDialogStatus(false)} marginRight={1}>
            취소
          </Button>
          <Button type="submit">저장</Button>
        </Flex>
      </form>
    </Dialog>
  );
};

export default UserProfileContainer;
