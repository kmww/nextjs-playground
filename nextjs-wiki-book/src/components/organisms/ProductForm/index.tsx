import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import InputImages, { FileData } from '@/components/molecules/InputImages';
import { Category, Condition } from '@/types';
import { Controller, useForm } from 'react-hook-form';

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
    </form>
  );
};

export default ProductForm;
