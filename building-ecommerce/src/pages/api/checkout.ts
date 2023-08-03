import graphql from '@/graphql';
import getProductDetailsById from '@/graphql/queries/getProductDetailsById';
import { ProductType, ProductsType } from '@/types/product';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  const { items } = req.body;
  const { products } = await graphql.request<ProductsType>(
    getProductDetailsById,
    {
      ids: Object.keys(items),
    }
  );

  const line_items = products.map((product) => ({
    adjustable_quantity: {
      enabled: true,
      minimun: 1,
    },
    price_data: {
      currency: 'USD',
      product_data: {
        name: product.name,
        images: product.images.map((image) => image.url),
      },
      unit_amount: product.price,
    },
    quantity: items[product.id],
  }));
};

export default checkout;
