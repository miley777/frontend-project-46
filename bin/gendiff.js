#!/usr/bin/env node

import { Command } from 'commander';
//import { cwd } from 'node:process';
//import path from 'path';
//import fs from 'fs';
import getParsed from '../src/parsing.js'

const program = new Command();

program
  .version('12.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, format) => {
    getParsed(filepath1);
    getParsed(filepath2);
  });

program.parse();



