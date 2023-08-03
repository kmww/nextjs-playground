import { loadStripe } from '@stripe/stripe-js';
import { Stripe } from '@stripe/stripe-js/types/stripe-js';

const key = process.env.NEXT_PUBLIC_STRIPE_SHARABLE_KEY as string;

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(key);
  }

  return stripePromise;
};

export default getStripe;
