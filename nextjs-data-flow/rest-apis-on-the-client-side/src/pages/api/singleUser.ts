import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  error: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (!req.query.username) {
    res.status(403).json({
      error: 'Missing "username" query parameter',
    });
    return;
  }

  const username = req.query.username;
  const API_ENDPOINT = process.env.API_ENDPOINT;
  const API_TOKEN = process.env.API_TOKEN;

  const userReq = await axios.get(`${API_ENDPOINT}/api/04/users/${username}`, {
    headers: { authorization: API_TOKEN },
  });

  res.status(200).json(userReq.data);
};

export default handler;
