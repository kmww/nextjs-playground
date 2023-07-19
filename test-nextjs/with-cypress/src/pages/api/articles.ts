import data from '@/data/articles';
import { NextApiRequest as Request, NextApiResponse as Response } from 'next';

export default (req: Request, res: Response) => {
  res.status(200).json(data);
};
