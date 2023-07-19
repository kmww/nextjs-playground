import data from '@/data/articles';
import { NextApiRequest as Request, NextApiResponse as Response } from 'next';

export default (req: Request, res: Response) => {
  const id = req.query.id;
  const requestedArticle = data.find((article) => article.id === id);

  requestedArticle
    ? res.status(200).json(requestedArticle)
    : res.status(404).json({ error: 'Not found' });
};
