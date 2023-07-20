import { NextApiRequest, NextApiResponse } from 'next';

const loginApi = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { email, password } = req.body;

  if (method !== 'POST') {
    return res.status(404).end();
  }

  if (!email || !password) {
    return res.status(400).json({
      error: 'Missing required params',
    });
  }
};

export default loginApi;
