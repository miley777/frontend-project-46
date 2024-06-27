/* eslint-disable no-undef */
//import { getData } from '../src';
import fs from 'fs';
import getFixturePath from './helper';
//import   genDiff  from '../src';
import { expect, test} from '@jest/globals';

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([ {file1: './__tests__/../__fixtures__/file1.json', file2: './__tests__/../__fixtures__/file2.json'},
  {file1: './__fixtures__/file1.json', file2: './__fixtures__/file2.json'},
  {file1: './bin/../__fixtures__/file1.json', file2: './bin/../__fixtures__/file2.json'},
  {file1: './src/../__fixtures__/file1.json', file2: './src/../__fixtures__/file2.json'},
]), ('gendiff', () => {
  expect(genDiff(file1, file2)).toEqual(readFile(__fixtures__/confirmingFile1.txt));
});

//test('test4', () => {});

//test('test5', () => {});