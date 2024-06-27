import process from 'process';
//import { fileURLToPath } from 'url';
import path from 'path';
//import { dirname } from 'path';
import fs from 'fs';
import getParsed from './parsing.js';
import getComparedFiles from './compare.js';

const buildFilePath = (filepath) => path.resolve(process.cwd(), filepath);

export const getData = (filepath) => fs.readFileSync(buildFilePath(filepath), 'utf-8');

//const __filename = (filepath) => fileURLToPath(filepath);

//const getFilePath = (filepath) => path.resolve(__dirname, filepath);

//const __filename = fileURLToPath(filepath);
//const __dirname = dirname(__filename);

//export const getData = (filepath) => fs.readFileSync(path.resolve(__dirname, filepath), 'utf-8');

const extractFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2) => {
  console.log(buildFilePath(filepath1));
  //const __filename1 = fileURLToPath(filepath1);
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const format1 = extractFormat(filepath1);
  const format2 = extractFormat(filepath2);
  const parsing1 = getParsed(data1, format1);
  const parsing2 = getParsed(data2, format2);
  const compare = getComparedFiles(parsing1, parsing2);
  console.log(compare);
  //console.log(typeof parsing1);
  //console.log(typeof parsing2);
};

export default genDiff; 