import _ from 'lodash';
import { getType } from '../typedKeys.js';

const indentSize = (depth, spaceCount) => depth * spaceCount;
const shiftToTheLeft = (spaceCount) => spaceCount - 2;
const currentIndentWithoutSpasialSymbols = (depth, spaceCount) =>
  ' '.repeat(indentSize(depth, spaceCount));
const currentIndent = (depth, spaceCount) =>
  ' '.repeat(indentSize(depth, spaceCount) - shiftToTheLeft(spaceCount));
const bracketIndent = (depth, spaceCount) =>
  ' '.repeat(indentSize(depth, spaceCount) - spaceCount);
const bracketIndentDot = (depth, spaceCount) =>
  ' '.repeat(indentSize(depth, spaceCount) - spaceCount);

const stringify = (keys, spaceCount = 4, depth = 1) => {
  if (!_.isObject(keys)) {
    return `${keys}`;
  }
  const objEntries = Object.entries(keys).map(
    ([key, value]) =>
      `${currentIndentWithoutSpasialSymbols(depth, spaceCount)}${key}: ${stringify(value, spaceCount, depth + 1)}`,
  );

  return ['{', ...objEntries, `${bracketIndentDot(depth, spaceCount)}}`].join('\n');
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
  return ['{', ...sortedEntries, `${bracketIndent(depth, spaceCount)}}`].join(
    '\n',
  );
};

const getComparedLines = (filepath1, filepath2) => {
  const typedKeys = getType(filepath1, filepath2);
  const iterdiff = stylish(typedKeys);
  return iterdiff;
};

export default getComparedLines;
