import Error from 'next/error';

const { parse } = require('url');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const main = async () => {
  await app.prepare();

  const handle = app.getRequestHandler();
  const server = express();

  server
    .get('*', (req: Request, res: Response) => {
      const url = parse(req.url, true);
      handle(req, res, url);
    })
    .listen(3000, () => console.log(`server ready`));
};

main().catch((error) => console.error(error));
