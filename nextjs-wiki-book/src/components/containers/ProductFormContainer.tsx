import ProductForm, {
  ProductFormData,
} from '@/components/organisms/ProductForm';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import { MeQueryResult, useRegistSaleMutation } from '@/generated/graphql';

interface ProductFormContainerProps {
  authUser: MeQueryResult['data'];
}

const ProductFormContainer = ({ authUser }: ProductFormContainerProps) => {
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const [registSale] = useRegistSaleMutation();

  const handleSave = async (data: ProductFormData) => {
    const product = {
      title: data.title,
      description: data.description,
      category: data.category,
      condition: data.condition,
      price: Number(data.price),
      imageUrl: '/products/emoji/emoji-cant-stand.jpeg', //더미
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
