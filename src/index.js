import { cwd } from 'node:process';
import path from 'path';
import fs from 'fs';

//const dir = cwd(file);
const getFilePath = (file) => path.resolve(process.cwd(), file);

const getData = (file) => {
  const filepath = getFilePath(file);
  const data = fs.readFileSync(filepath, 'utf8');
  return data;
};

export default getData; 