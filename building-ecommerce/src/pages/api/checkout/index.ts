import graphql from '@/graphql';
import getProductDetailsById from '@/graphql/queries/getProductDetailsById';
import { ShippingAddressCollection, ShippingOptions } from '@/types/checkout';
import { ProductsType } from '@/types/product';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export const shipping_address_collection: ShippingAddressCollection = {
  allowed_countries: ['KR', 'US'],
};

export const shipping_options: ShippingOptions = [
  {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 0,
        currency: 'USD',
      },
      display_name: 'Free Shipping',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 3,
        },
        maximum: {
          unit: 'business_day',
          value: 5,
        },
      },
    },
  },
  {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 499,
        currency: 'USD',
      },
      display_name: 'Next day air',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 1,
        },
        maximum: {
          unit: 'business_day',
          value: 1,
        },
      },
    },
  },
];

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
      minimum: 1,
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

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    payment_method_types: ['card'],
    shipping_address_collection,
    shipping_options,
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
  });

  res.status(201).json({ session });
};

export default checkout;
