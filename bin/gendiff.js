#!/usr/bin/env node

import { Command } from 'commander';
import { cwd } from 'node:process';
import path from 'path';
import fs from 'fs';

const program = new Command();

program
  .version('12.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, format) => {
    // console.log(genDiff(filepath1, filepath2, format));
    const dir1 = cwd(filepath1);
    const dir2 = cwd(filepath2);
    // console.log(path.resolve(dir1, filepath1));
    // console.log(path.resolve(dir2,filepath2));
    const file1 = path.resolve(dir1, filepath1);
    const file2 = path.resolve(dir2,filepath2);
    // return [file1, file2];
  });

program
  .action(() => {
    const read1 = fs.readFileSync(file1);
    const read2 = fs.readFileSync(file2);
    const json1 = JSON.parse(read1);
    const json2 = JSON.parse(read2);
    console.log(json1);
    console.log(json2);
  });

