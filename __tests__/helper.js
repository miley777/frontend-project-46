import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { expect, test } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
export default getFixturePath;

test ('getFixturePath', () => {
    expect(getFixturePath('file1.json')).toEqual('/home/studenthexlet/Documents/frontend-project-46/__fixtures__/file1.json');
    expect(getFixturePath('file2.json')).toEqual('/home/studenthexlet/Documents/frontend-project-46/__fixtures__/file2.json');
    expect(getFixturePath('file1.yaml')).toEqual('/home/studenthexlet/Documents/frontend-project-46/__fixtures__/file1.yaml');
    expect(getFixturePath('file2.yaml')).toEqual('/home/studenthexlet/Documents/frontend-project-46/__fixtures__/file2.yaml');
    expect(getFixturePath('file1.yml')).toEqual('/home/studenthexlet/Documents/frontend-project-46/__fixtures__/file1.yml');
    expect(getFixturePath('file2.yml')).toEqual('/home/studenthexlet/Documents/frontend-project-46/__fixtures__/file2.yml');
  });