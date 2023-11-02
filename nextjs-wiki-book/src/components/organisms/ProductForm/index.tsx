import { FileData } from '@/components/molecules/InputImages';
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
