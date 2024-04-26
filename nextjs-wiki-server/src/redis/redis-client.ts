import { Redis } from 'ioredis';

const redis = new Redis({
  connectTimeout: 10000,
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PROT) || 6379,
  username: process.env.REDIS_NAME || 'default',
  password: process.env.REDIS_PASSWORD || 'qwer1234',
});

export default redis;
