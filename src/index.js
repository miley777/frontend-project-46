import process from 'process';
import path from 'path';
import fs from 'fs';
import getParsed from './parsers.js';
import chooseFormater from './formatters/index.js';
import getDataType from './getDataType.js';

export const buildFilePath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filepath) => fs.readFileSync(buildFilePath(filepath), 'utf-8');

export const extractFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const format1 = extractFormat(filepath1);
  const format2 = extractFormat(filepath2);
  const parsing1 = getParsed(data1, format1);
  const parsing2 = getParsed(data2, format2);
  const data = getDataType(parsing1, parsing2);
  return chooseFormater(formatName, data);
};

export default genDiff;
