import { cwd } from 'node:process';
import path from 'path';
import fs from 'fs';
import getParsed from './parsing.js'

const getFilePath = (file) => path.resolve(cwd(), file);

const getData = (file) => fs.readFileSync(getFilePath(file), 'utf-8');

const genDiff = (file1, file2) => {
  const data1 = getData(file);
  const data2 = getData(file2);
  const parsing1 = getParsed(file1, data1);
  const parsing2 = getParsed(file2, data2);
  console.log(parsing1);
  console.log(parsing2);
};

export default genDiff; 