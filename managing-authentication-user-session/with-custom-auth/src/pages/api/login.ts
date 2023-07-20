//just simple example login process

import { encode } from '@/lib/jwt';
import { UserType } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

const authenticateUser = (email: string, password: string) => {
  const validEmail = 'cojet123@ca.com';
  const validPassword = 'simplepassword';

  if (email === validEmail && password === validPassword) {
    return encode({
      id: 'f678f078-fcfe-43ca-9d20-eBc9a95209b6',
      name: 'Cojet',
      email: 'cojet123@ca.com',
    });
  }

  return null;
};

const loginApi = (
  req: NextApiRequest,
  res: NextApiResponse<UserType | { error: string } | { success: boolean }>
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
    res.setHeader(
      'Set-Cookie',
      serialize('my-auth', user, { path: '/', httpOnly: true })
    );
    return res.json({ success: true });
  } else {
    return res.status(401).json({
      success: false,
      error: 'Wrong email or password',
    });
  }
};

export default loginApi;
