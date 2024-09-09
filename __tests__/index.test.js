import { expect, test } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const inputFormat = ['json', 'yaml', 'yml'];

test.each(inputFormat)('testing gendif', (format) => {
  const file1 = getFixturePath(`file1.${format}`);
  const file2 = getFixturePath(`file2.${format}`);
  expect(genDiff(file1, file2)).toEqual(readFile('confirmingFileStylish.txt'));
  expect(genDiff(file1, file2, 'stylish')).toEqual(readFile('confirmingFileStylish.txt'));
  expect(genDiff(file1, file2, 'plain')).toEqual(readFile('confirmingFilePlain.txt'));
  expect(genDiff(file1, file2, 'json')).toEqual(readFile('confirmingFileJSON.txt'));
});

