import { Connection, createConnection } from 'typeorm';
import User from '../entities/UserData';
import CartItem from '../entities/CartItem';
import Product from '../entities/Product';

export const createDB = async (): Promise<Connection> =>
  createConnection({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_DATABASE || 'loa_wiki_book',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'qwer1234',
    logging: !(process.env.NODE_ENV === 'production'),
    synchronize: true,
    entities: [User, Product, CartItem],
  });
