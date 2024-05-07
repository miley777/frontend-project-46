#!/usr/bin/env node

import { Command } from 'commander';
import { cwd } from 'node:process';
import { path } from 'node:path';

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
    console.log(dir2);
    console.log(dir1);
    console.log(path.resolve(dir1, filepath1));
    //path.resolve('/dir2','/filepath2');
  });

program.parse();

