import { ProductsType } from '@/types/product';

export const getTotalCharge = (
  items: Record<string, any>,
  products: ProductsType['products']
) => {
  if (!products.length) return 0;

  return Object.keys(items)
    .map(
      (id) =>
        (products.find((product) => product.id === id)?.price as number) *
        ((items[id] / 100) * 1.1)
    )
    .reduce((acc, cur) => acc + cur)
    .toFixed(2);
};
