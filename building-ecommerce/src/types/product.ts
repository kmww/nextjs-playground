export interface ProductType {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: [
    {
      id: string;
      url: string;
    }
  ];
  description?: string;
}

export interface ProductsType {
  products: ProductType[];
}
