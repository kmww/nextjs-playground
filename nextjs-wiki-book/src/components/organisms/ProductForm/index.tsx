import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import TextArea from '@/components/atoms/TextArea';
import Box from '@/components/layout/Box';
import Dropdown from '@/components/molecules/Dropdown';
import InputImages, { FileData } from '@/components/molecules/InputImages';
import { Category, Condition } from '@/types';

export interface ProductFormData {
  image: FileData[];
  title: string;
  description: string;
  category: Category;
  condition: Condition;
  price: string;
}

export interface ProductFormProps {
  onProductSave?: (data: ProductFormData) => void;
}

const ProductForm = ({ onProductSave }: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>();
  const onSubmit = (data: ProductFormData) => {
    onProductSave && onProductSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={3}>
        <Box marginBottom={2}>
          <Text as="label" variant="mediumLarge" fontWeight="bold">
            상품 사진
          </Text>
        </Box>
        <Controller
          control={control}
          name="image"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputImages
              images={value ?? []}
              onChange={onChange}
              maximumNumber={1}
              hasError={!!error}
            />
          )}
        />
        {errors.image && (
          <Text color="danger" variant="small" paddingLeft={1}>
            상품의 이미지가 필요합니다.
          </Text>
        )}
      </Box>
      <Box marginBottom={3}>
        <Box marginBottom={2}>
          <Text as="label" variant="mediumLarge" fontWeight="bold">
            상품 정보
          </Text>
        </Box>
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            제목
          </Text>

          <Input
            {...register('title', { required: true })}
            name="title"
            type="text"
            placeholder="상품 제목"
            hasError={!!errors.title}
          />
          {errors.title && (
            <Text color="danger" variant="small" paddingLeft={1}>
              제목을 입력해주세요
            </Text>
          )}
        </Box>

        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            설명
          </Text>
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextArea
                placeholder="상품에 대한 설명을 입력해주세요"
                hasError={!!error}
                onChange={onChange}
              >
                {value}
              </TextArea>
            )}
          />
          {errors.description && (
            <Text color="danger" variant="small" paddingLeft={1}>
              상품 설명을 입력해주세요
            </Text>
          )}
        </Box>
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            카테고리
          </Text>
          <Controller
            control={control}
            name="category"
            rules={{ required: true }}
            defaultValue="emoji"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: 'emoji', label: '이모티콘' },
                  { value: 'figures', label: '피규어' },
                  { value: 'pad', label: '마우스 패드' },
                ]}
                hasError={!!error}
                value={value}
                placeholder="카테고리를 선택해 주세요"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.category && (
            <Text color="danger" variant="small" paddingLeft={1}>
              카테고리를 선택해주세요
            </Text>
          )}
        </Box>
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            상품 상태
          </Text>
          <Controller
            control={control}
            name="condition"
            rules={{ required: true }}
            defaultValue="used"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: 'used', label: '중고' },
                  { value: 'new', label: '신품' },
                ]}
                hasError={!!error}
                value={value ?? 'used'}
                placeholder="상품의 상태를 선택해주세요 (미개봉: 신품, 개봉: 중고)"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.condition && (
            <Text color="danger" variant="medium" paddingLeft={1}>
              상품의 상태를 선택해주세요
            </Text>
          )}
        </Box>
        <Box>
          <Text as="label" variant="medium">
            가격(원)
          </Text>
          <Input
            {...register('price', { required: true })}
            name="price"
            type="number"
            placeholder="100"
            hasError={!!errors.price}
          />
          {errors.price && (
            <Text color="danger" variant="small" paddingLeft={1}>
              가격을 입력해주세요
            </Text>
          )}
        </Box>
      </Box>
      <Button width="100%" type="submit">
        등록
      </Button>
    </form>
  );
};

export default ProductForm;
