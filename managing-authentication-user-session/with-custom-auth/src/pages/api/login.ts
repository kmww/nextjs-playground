//just simple example login process

import { NextApiRequest, NextApiResponse } from 'next';

interface LoginResponseType {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const loginApi = (
  req: NextApiRequest,
  res: NextApiResponse<LoginResponseType | { error: string }>
) => {
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

  const user = authenticateUser(email, password);

  if (user) {
    return res.json({ user });
  } else {
    return res.status(401).json({
      error: 'Wrong email or password',
    });
  }
};

const authenticateUser = (email: string, password: string) => {
  const validEmail = 'cojet123@ca.com';
  const validPassword = 'simplepassword';

  if (email === validEmail && password === validPassword) {
    return {
      id: 'f678f078-fcfe-43ca-9d20-eBc9a95209b6',
      name: 'Cojet',
      email: 'cojet123@ca.com',
    };
  }

  return null;
};

export default loginApi;
