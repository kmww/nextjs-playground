import path from 'path';
import { promises as fs } from 'fs';

export default async (_: any, res: any) => {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  res.status(200).json(JSON.parse(fileContents));
};
