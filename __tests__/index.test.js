import { expect, test, describe } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff, { extractFormat, buildFilePath } from '../src';

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


const filesJson = [ './__tests__/../__fixtures__/file1.json', './__tests__/../__fixtures__/file2.json',
  './__fixtures__/file1.json', './__fixtures__/file2.json',
  './bin/../__fixtures__/file1.json', './bin/../__fixtures__/file2.json',
  './src/../__fixtures__/file1.json', './src/../__fixtures__/file2.json' ];
const filesYaml = [ './__tests__/../__fixtures__/file1.yaml', './__tests__/../__fixtures__/file2.yaml',
  './__fixtures__/file1.yaml', './__fixtures__/file2.yaml',
  './bin/../__fixtures__/file1.yaml', './bin/../__fixtures__/file2.yaml',
  './src/../__fixtures__/file1.yaml', './src/../__fixtures__/file2.yaml' ];
const filesYml = [ './__tests__/../__fixtures__/file1.yml', './__tests__/../__fixtures__/file2.yml', 
  './__fixtures__/file1.yml', './__fixtures__/file2.yml', './bin/../__fixtures__/file1.yml', 
  './bin/../__fixtures__/file2.yml', './src/../__fixtures__/file1.yml', './src/../__fixtures__/file2.yml' ];

describe('testing extractFormat', () => {
  test.each(filesJson)( 'test extractFormat for json files', (file) => {
    expect(extractFormat(file)).toEqual('json');
  });
  test.each(filesYaml)( 'test extractFormat for yaml files', (file) => {
    expect(extractFormat(file)).toEqual('yaml');
  });
  test.each(filesYml)( 'test extractFormat for yml files', (file) => {
    expect(extractFormat(file)).toEqual('yml');
  });
});

