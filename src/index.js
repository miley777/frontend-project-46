import { cwd } from 'node:process';
import path from 'path';
import fs from 'fs';

//const dir = cwd(file);

const getData = (file) => {
  const dir = path.dirname(file);
  const filepath = path.resolve(dir, file);
  const data = fs.readFileSync(filepath);
  return data;
};

export default getData; 