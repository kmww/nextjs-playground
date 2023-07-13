import data from '@/data/items';

export const getFullItem = (id: string) => {
  const idx = data.findIndex((item) => item.id === id);
  return data[idx];
};
