import { getType } from '../typedKeys.js';
import _ from 'lodash';

const indentSize = (depth, spaceCount) => depth * spaceCount;
const shiftToTheLeft = (spaceCount) => spaceCount - 2;
//const shift = (spaceCount) => spaceCount + 2;
const currentIndentWithoutSpasialSymbols = (depth, spaceCount) =>
  " ".repeat(indentSize(depth, spaceCount));
const currentIndent = (depth, spaceCount) =>
  " ".repeat(indentSize(depth, spaceCount) - shiftToTheLeft(spaceCount));
const bracketIndent = (depth, spaceCount) =>
  " ".repeat(indentSize(depth, spaceCount) - spaceCount);
const bracketIndentDot = (depth, spaceCount) =>
  " ".repeat(indentSize(depth, spaceCount) - spaceCount);

const stringify = (keys, spaceCount = 4, depth = 1) => {
  if (!_.isObject(keys)) {
    return `${keys}`;
  }
  const objjj = Object.entries(keys).map(
    ([key, value]) =>
      `${currentIndentWithoutSpasialSymbols(depth, spaceCount)}${key}: ${stringify(value, spaceCount, depth + 1)}`,
  );

  return ["{", ...objjj, `${bracketIndentDot(depth, spaceCount)}}`].join("\n");
};

const stylish = (typedKeys, spaceCount = 4, depth = 1) => {
  const sortedEntries = typedKeys.map((typedKey) => {
    switch (typedKey.type) {
      case 'deleted':
        return `${currentIndent(depth, spaceCount)}- ${typedKey.key}: ${stringify(typedKey.value, spaceCount, depth + 1)}`;
      case 'added':
        return `${currentIndent(depth, spaceCount)}+ ${typedKey.key}: ${stringify(typedKey.value, spaceCount, depth + 1)}`;
      case 'unchanged':
        return `${currentIndent(depth, spaceCount)}  ${typedKey.key}: ${typedKey.value}`;
      case 'changed':
        return `${currentIndent(depth, spaceCount)}- ${typedKey.key}: ${stringify(typedKey.value1, spaceCount, depth + 1)}\n${currentIndent(depth, spaceCount)}+ ${typedKey.key}: ${stringify(typedKey.value2, spaceCount, depth + 1)}`;
      case 'nested':
        return `${currentIndent(depth, spaceCount)}  ${typedKey.key}: ${stylish(typedKey.children, spaceCount, depth + 1)}`;
      default:
        return new Error(`Type: ${typedKey.key} is underfined`);
    }
  });
  return ["{", ...sortedEntries, `${bracketIndent(depth, spaceCount)}}`].join(
    "\n",
  );
};

const getComparedLines = (filepath1, filepath2) => {
  const typedKeys = getType(filepath1, filepath2);
  const iterdiff = stylish(typedKeys);
  return iterdiff;
};


export default getComparedLines;





//const keys1 = _.keys(filepath1);
  //const keys2 = _.keys(filepath2);
  //const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
  //const sortedKeys = _.sortBy(uniqKeys);
  
  
  //const mapKey = sortedKeys.map((key) => {
    //if (!Object.hasOwn(filepath1, key)) {
      //return `  + ${key}: ${filepath2[key]}`;
    //} else if (!Object.hasOwn(filepath2, key)) {
      //return `  - ${key}: ${filepath1[key]}`;
    //} else if (filepath1[key] !== filepath2[key]) {
      //return `  - ${key}: ${filepath1[key]}\n  + ${key}: ${filepath2[key]}`;
    //} else if (filepath1[key] === filepath2[key]) {
      //return `    ${key}: ${filepath2[key]}`;
    //}
  //});

  //return [ '{', mapKey.join('\n') , '}'].join('\n');

  
  //const entries1 = _.entries(filepath1);
  //const entries2 = _.entries(filepath2);
  //const allEntr = [ ...entries1, ...entries2 ];
  //return ['{', iter(allEntries), '}'].join('\n');
  //return JSON.stringify(promdiff(filepath1, filepath2));
  //return promdiff(filepath1, filepath2);