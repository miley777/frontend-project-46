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
  expect(genDiff(file1, file2, 'stylish')).toEqual(readFile('confirmingFileStylish.txt'));
  expect(genDiff(file1, file2, 'plain')).toEqual(readFile('confirmingFilePlain.txt'));
  expect(genDiff(file1, file2, 'json')).toEqual(readFile('confirmingFileJSON.txt'));
});

test.each([{ file1: null, file2: null },
  { file1: 'file1.json', file2: 'file2.json' },
  { file1: 'filepath1.json', file2: 'filepath2.json' },
  { file1: '', file2: 'file2.json' }, { file1: 'file1.json', file2: '' },
  { file1: 'file1.yaml', file2: 'file2.yaml' },
  { file1: 'filepath1.yaml', file2: 'filepath2.yaml' },
  { file1: '', file2: 'file2.yaml' }, { file1: 'file1.yaml', file2: '' },
  { file1: 'file1.yml', file2: 'file2.yml' },
  { file1: 'filepath1.yml', file2: 'filepath2.yml' },
  { file1: '', file2: 'file2.yml' }, { file1: 'file1.yml', file2: '' },
  { file1: '', file2: '' },
])('testWrongPaths', ({ file1, file2 }) => {
  expect(() => {
    genDiff(file1, file2);
  }).toThrow();
});
