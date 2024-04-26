import { Redis } from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PROT) || 6379,
  username: process.env.REDIS_NAME || 'default',
  password: process.env.REDIS_PASSWORD || 'qwer1234',
});

export default redis;
