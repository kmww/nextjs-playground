import { parse } from 'url';
import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const main = async () => {
  await app.prepare();

  const handle = app.getRequestHandler();
  const server = express();

  server
    .get('/', (_: any, res: Response) => {
      res.send('Hello World!');
    })
    .get('/about', (req: Request, res: Response) => {
      const { query } = parse(req.url, true);
      app.render(req, res, '/about', query);
    })
    .get('/api/greet', (req: Request, res: Response) => {
      res.json({ name: req.query?.name ?? 'unknown' });
    })
    .get(/_next\/.+/, (req: Request, res: Response) => {
      const parseUrl = parse(req.url, true);
      handle(req, res, parseUrl);
    })
    .listen(3000, () => console.log(`server ready`));
};

main().catch((error) => console.error(error));
