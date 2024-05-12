#!/usr/bin/env node

import { Command } from 'commander';


const program = new Command();
import genDiff from '../src/index.js'
program
  .version('12.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, format) => {
    genDiff(filepath1, filepath2);
  });

program.parse();



