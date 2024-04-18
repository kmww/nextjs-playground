import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import ProductForm, {
  ProductFormData,
} from '@/components/organisms/ProductForm';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';
import { globalToast } from '@/contexts/GlobalToast/globalToast';
import { MeQueryResult, useRegistSaleMutation } from '@/generated/graphql';

interface ProductFormContainerProps {
  authUser: MeQueryResult['data'];
}

const ProductFormContainer = ({ authUser }: ProductFormContainerProps) => {
  const router = useRouter();
  const setGlobalSpinner = useSetRecoilState(globalSpinner);
  const setToast = useSetRecoilState(globalToast);
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
      setToast([true, '등록이 완료되었습니다.', 'primary']);
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
