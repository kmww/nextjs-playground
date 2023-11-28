import { ApiContext, Product } from "@/types";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/proxy'
}

interface ProductFormContainerProps {
  onSave?: (error?: Error, product?: Product) => void;
}

