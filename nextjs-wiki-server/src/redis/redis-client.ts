import { Redis } from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redis = new Redis({
  connectTimeout: 60000,
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  username: process.env.REDIS_NAME || 'default',
  password: process.env.REDIS_PASSWORD || 'qwer1234',
});

export default redis;
