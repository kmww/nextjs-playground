export const exchangeForDollars = (price: number) => {
  return ((price / 100) * 1.1).toFixed(2);
};
