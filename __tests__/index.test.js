import { buildFilePath } from '../src';
import { extractFormat } from '../src';
import fs from 'fs';
import getFixturePath from './helper';
import   genDiff  from '../src';
import { expect, test } from '@jest/globals';

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([ {file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json'},
  {file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json'},
  {file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json'},
  {file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json'},
  {file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml'},
  {file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml'},
  {file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml'},
  {file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml'},
  {file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml'},
  {file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml'},
  {file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml'},
  {file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml'},
]) ('testRightPaths', ({file1, file2}) => {
  expect(genDiff(file1, file2)).toEqual(readFile('confirmingFile1.txt'));

});

test.each([ {file1: null, file2: null},
  {file1: 'file1.json', file2: 'file2.json'},
  {file1: 'filepath1.json', file2: 'filepath2.json'},
  {file1: '', file2: 'file2.json'},{file1: 'file1.json', file2: ''},
  {file1: 'file1.yaml', file2: 'file2.yaml'},
  {file1: 'filepath1.yaml', file2: 'filepath2.yaml'},
  {file1: '', file2: 'file2.yaml'},{file1: 'file1.yaml', file2: ''},
  {file1: 'file1.yml', file2: 'file2.yml'},
  {file1: 'filepath1.yml', file2: 'filepath2.yml'},
  {file1: '', file2: 'file2.yml'},{file1: 'file1.yml', file2: ''},
  {file1: '', file2: ''}
]) ('testWrongPaths', ({file1, file2}) => {
  expect(() => {
    genDiff(file1, file2); 
  }).toThrow();
});

test.each([ {file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json'},
  {file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json'},
  {file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json'},
  {file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json'},
]) ('test buildFilePath' , ({file1, file2}) => {
  expect(buildFilePath(file1)).toEqual(getFixturePath('file1.json'));
  expect(buildFilePath(file2)).toEqual(getFixturePath('file2.json'));
});

test.each([ {file1: './__tests__/../__fixtures__/file1.yaml', file2: './__tests__/../__fixtures__/file2.yaml'},
  {file1: './__fixtures__/file1.yaml', file2: './__fixtures__/file2.yaml'},
  {file1: './bin/../__fixtures__/file1.yaml', file2: './bin/../__fixtures__/file2.yaml'},
  {file1: './src/../__fixtures__/file1.yaml', file2: './src/../__fixtures__/file2.yaml'},
]) ('test buildFilePath2' , ({file1, file2}) => {
  expect(buildFilePath(file1)).toEqual(getFixturePath('file1.yaml'));
  expect(buildFilePath(file2)).toEqual(getFixturePath('file2.yaml'));
});

test.each([   {file1: './__tests__/../__fixtures__/file1.yml', file2: './__tests__/../__fixtures__/file2.yml'},
  {file1: './__fixtures__/file1.yml', file2: './__fixtures__/file2.yml'},
  {file1: './bin/../__fixtures__/file1.yml', file2: './bin/../__fixtures__/file2.yml'},
  {file1: './src/../__fixtures__/file1.yml', file2: './src/../__fixtures__/file2.yml'},
]) ('test buildFilePath2' , ({file1, file2}) => {
  expect(buildFilePath(file1)).toEqual(getFixturePath('file1.yml'));
  expect(buildFilePath(file2)).toEqual(getFixturePath('file2.yml'));
});

test.each([ {file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json'},
  {file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json'},
  {file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json'},
  {file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json'},
]) ( 'test extractFormat', ({file1, file2}) => {
  expect(extractFormat(file1)).toEqual('json');
  expect(extractFormat(file2)).toEqual('json');
});


test.each(['json', 'yaml', 'yml']) ('test format' , (format) => {
  expect(getFixturePath(`file1.${format}`));
  expect(getFixturePath(`file2.${format}`))
});

//test( , () => {});