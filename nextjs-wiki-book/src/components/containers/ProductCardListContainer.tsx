import { ApiContext, Category, Condition } from '@/types';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/porxy',
};

interface ProductCardListContainerProps {
  category?: Category;
  conditons?: Condition[];
}
