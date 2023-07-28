export interface ProductType {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: {
    id: string;
    url: string;
  };
}
