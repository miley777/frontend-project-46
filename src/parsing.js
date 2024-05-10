import { cwd } from 'node:process';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';


const getParsed = (file) => {
  const dir = cwd(file);
  const filepath = path.resolve(dir, '__fixtures__', file);
  const data = fs.readFileSync(filepath);
  if (String(file).endsWith('.json')) {
    console.log(JSON.stringify(JSON.parse(data)));
  } else if (String(file).endWith('.yaml')) {
    return yaml.load(data);
  }
};

export default getParsed;