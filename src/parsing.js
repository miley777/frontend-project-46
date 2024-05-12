//import { cwd } from 'node:process';
//import path from 'path';
//import fs from 'fs';
import yaml from 'js-yaml';
import getData from './index.js';


const getParsed = (file) => {
  const data = getData(file);
  if (String(file).endsWith('.json')) {
    console.log(JSON.stringify(JSON.parse(data)));
  } else if (String(file).endWith('.yaml')) {
    return yaml.load(data);
  }
};

export default getParsed;