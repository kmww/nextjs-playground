import Stripe from 'stripe';

export type ShippingAddressCollection =
  Stripe.Checkout.SessionCreateParams.ShippingAddressCollection;

export type ShippingOptions =
  Array<Stripe.Checkout.SessionCreateParams.ShippingOption>;
