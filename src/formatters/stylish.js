import _ from 'lodash';

// const shiftToTheLeft = (spaceCount) => spaceCount - 2;
const currentIndent = (depth, spaceCount, type = '') => type ? ' '.repeat(depth * spaceCount - 2) : ' '.repeat(depth * spaceCount);
const bracketIndent = (depth, spaceCount) => ' '.repeat(depth * spaceCount - spaceCount);

const stringify = (keys, spaceCount = 4, depth = 1) => {
  if (!_.isObject(keys)) {
    return `${keys}`;
  }
  const objEntries = Object.entries(keys).map(
    ([key, value]) => `${currentIndent(depth, spaceCount)}${key}: ${stringify(value, spaceCount, depth + 1)}`,
  );
  return ['{', ...objEntries, `${bracketIndent(depth, spaceCount)}}`].join('\n');
};

const stylish = (typedKeys, spaceCount = 4, depth = 1) => {
  const sortedEntries = typedKeys.map((typedKey) => {
    const elem1 = `${currentIndent(depth, spaceCount, typedKey.type)}- ${typedKey.key}: ${stringify(typedKey.value1, spaceCount, depth + 1)}`;
    const elem2 = `${currentIndent(depth, spaceCount, typedKey.type)}+ ${typedKey.key}: ${stringify(typedKey.value2, spaceCount, depth + 1)}`;
    switch (typedKey.type) {
      case 'deleted':
        return `${currentIndent(depth, spaceCount, typedKey.type)}- ${typedKey.key}: ${stringify(typedKey.value, spaceCount, depth + 1)}`;
      case 'added':
        return `${currentIndent(depth, spaceCount, typedKey.type)}+ ${typedKey.key}: ${stringify(typedKey.value, spaceCount, depth + 1)}`;
      case 'unchanged':
        return `${currentIndent(depth, spaceCount, typedKey.type)}  ${typedKey.key}: ${typedKey.value}`;
      case 'changed':
        return [elem1, elem2].join('\n');
      case 'nested':
        return `${currentIndent(depth, spaceCount, typedKey.type)}  ${typedKey.key}: ${stylish(typedKey.children, spaceCount, depth + 1)}`;
      default:
        return new Error(`Type: ${typedKey.key} is underfined`);
    }
  });
  return ['{', ...sortedEntries, `${bracketIndent(depth, spaceCount)}}`].join(
    '\n',
  );
};

export default stylish;
