import { FileData } from '@/components/molecules/InputImages';
import { Category, Condition } from '@/types';
import { useForm } from 'react-hook-form';

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
};

export default ProductForm;
