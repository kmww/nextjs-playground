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
};

export default checkout;
