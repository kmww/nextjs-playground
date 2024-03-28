import { useRouter } from 'next/router';
import ProductForm, {
  ProductFormData,
} from '@/components/organisms/ProductForm';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import { MeQueryResult, useRegistSaleMutation } from '@/generated/graphql';

interface ProductFormContainerProps {
  authUser: MeQueryResult['data'];
}

const ProductFormContainer = ({ authUser }: ProductFormContainerProps) => {
  const router = useRouter();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const [registSale] = useRegistSaleMutation();

  const handleSave = async (data: ProductFormData) => {
    const image = data.image[0]['file'];

    const product = {
      title: data.title,
      description: data.description,
      category: data.category,
      condition: data.condition,
      price: Number(data.price),
      imageUrl: image,
      blurDataUrl: '',
      owner: authUser?.me,
    };
    try {
      setGlobalSpinner(true);
      await registSale({
        variables: {
          ...product,
        },
      });
      window.alert('등록이 완료되었습니다.');
      router.push('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <ProductForm onProductSave={handleSave} />;
};

export default ProductFormContainer;
