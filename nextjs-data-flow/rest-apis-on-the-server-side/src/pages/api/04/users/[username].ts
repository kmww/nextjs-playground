import path from 'path';
import { promises as fs } from 'fs';
import { User } from '@/types/user';

export default async (req: any, res: any): Promise<void> => {
  const apikey: string | undefined = req.headers['authorization'];
  if (apikey === undefined || apikey !== 'realworldnextjs') {
    res.status(403).json();
    return;
  }
  const {
    query: { username },
  } = req;
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  const users = JSON.parse(fileContents);
  let targetUser = null;
  users.forEach((user: User) => {
    if (user.username === username) {
      targetUser = user;
    }
  });
  if (targetUser) {
    res.status(200).json(targetUser);
  } else {
    res.status(404);
  }
};
