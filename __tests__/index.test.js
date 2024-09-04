import { expect, test } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff, { extractFormat, buildFilePath } from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([{ file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json' },
  { file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json' },
  { file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json' },
  { file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json' },
  { file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml' },
  { file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml' },
  { file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml' },
  { file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml' },
  { file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml' },
  { file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml' },
  { file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml' },
  { file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml' },
])('testRightPaths stylish1', ({ file1, file2 }) => {
  expect(genDiff(file1, file2)).toEqual(readFile('confirmingFileStylish.txt'));
});

test.each([{ file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json', formatName: 'stylish' },
  { file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json', formatName: 'stylish' },
  { file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json', formatName: 'stylish' },
  { file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json', formatName: 'stylish' },
  { file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml', formatName: 'stylish' },
  { file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml', formatName: 'stylish' },
  { file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml', formatName: 'stylish' },
  { file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml', formatName: 'stylish' },
  { file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml', formatName: 'stylish' },
  { file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml', formatName: 'stylish' },
  { file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml', formatName: 'stylish' },
  { file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml', formatName: 'stylish' },
])('testRightPaths stylish2', ({ file1, file2, formatName }) => {
  expect(genDiff(file1, file2, formatName)).toEqual(readFile('confirmingFileStylish.txt'));
});

test.each([{ file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json', formatName: 'plain' },
  { file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json', formatName: 'plain' },
  { file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json', formatName: 'plain' },
  { file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json', formatName: 'plain' },
  { file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml', formatName: 'plain' },
  { file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml', formatName: 'plain' },
  { file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml', formatName: 'plain' },
  { file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml', formatName: 'plain' },
  { file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml', formatName: 'plain' },
  { file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml', formatName: 'plain' },
  { file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml', formatName: 'plain' },
  { file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml', formatName: 'plain' },
])('testRightPaths plain', ({ file1, file2, formatName }) => {
  expect(genDiff(file1, file2, formatName)).toEqual(readFile('confirmingFilePlain.txt'));
});

test.each([{ file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json', formatName: 'json' },
  { file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json', formatName: 'json' },
  { file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json', formatName: 'json' },
  { file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json', formatName: 'json' },
  { file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml', formatName: 'json' },
  { file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml', formatName: 'json' },
  { file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml', formatName: 'json' },
  { file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml', formatName: 'json' },
  { file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml', formatName: 'json' },
  { file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml', formatName: 'json' },
  { file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml', formatName: 'json' },
  { file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml', formatName: 'json' },
])('testRightPaths plain', ({ file1, file2, formatName }) => {
  expect(genDiff(file1, file2, formatName)).toEqual(readFile('confirmingFileJSON.txt'));
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

test.each([{ file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json' },
  { file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json' },
  { file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json' },
  { file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json' },
])('test buildFilePath for json files', ({ file1, file2 }) => {
  expect(buildFilePath(file1)).toEqual(getFixturePath('file1.json'));
  expect(buildFilePath(file2)).toEqual(getFixturePath('file2.json'));
});

test.each([{ file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml' },
  { file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml' },
  { file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml' },
  { file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml' },
])('test buildFilePath for yaml files', ({ file1, file2 }) => {
  expect(buildFilePath(file1)).toEqual(getFixturePath('file1.yaml'));
  expect(buildFilePath(file2)).toEqual(getFixturePath('file2.yaml'));
});

test.each([{ file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml' },
  { file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml' },
  { file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml' },
  { file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml' },
])('test buildFilePath for yml files', ({ file1, file2 }) => {
  expect(buildFilePath(file1)).toEqual(getFixturePath('file1.yml'));
  expect(buildFilePath(file2)).toEqual(getFixturePath('file2.yml'));
});

test.each([{ file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json' },
  { file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json' },
  { file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json' },
  { file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json' },
])( 'test extractFormat for json files', ({ file1, file2 }) => {
  expect(extractFormat(file1)).toEqual('json');
  expect(extractFormat(file2)).toEqual('json');
});

test.each([{ file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml' },
  { file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml' },
  { file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml' },
  { file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml' },
])( 'test extractFormat for yaml files', ({ file1, file2 }) => {
  expect(extractFormat(file1)).toEqual('yaml');
  expect(extractFormat(file2)).toEqual('yaml');
});

test.each([{ file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml' },
  { file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml' },
  { file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml' },
  { file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml' },
])( 'test extractFormat for yml files', ({ file1, file2 }) => {
  expect(extractFormat(file1)).toEqual('yml');
  expect(extractFormat(file2)).toEqual('yml');
});
// test.each(['json', 'yaml', 'yml'])('test format', (format) => {
//   expect(getFixturePath(`file1.${format}`));
//   expect(getFixturePath(`file2.${format}`));
// });
