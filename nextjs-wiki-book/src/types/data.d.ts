import { User } from './auth';

export type Category = 'emoji' | 'figures' | 'pad';
export type Condition = 'new' | 'used';

export interface Product {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDataUrl: string;
  price: number;
  condition: Condition;
  owner: User;
}
