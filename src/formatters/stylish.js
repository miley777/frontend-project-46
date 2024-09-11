import _ from 'lodash';

const getIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);
const bracketIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount);

const stringify = (keys, spaceCount = 4, depth = 1) => {
  if (!_.isObject(keys)) {
    return `${keys}`;
  }
  const objEntries = Object.entries(keys).map(
    ([key, value]) => `  ${getIndent(depth, spaceCount)}${key}: ${stringify(value, spaceCount, depth + 1)}`,
  );
  return ['{', ...objEntries, `${bracketIndent(depth - 1, spaceCount)}}`].join('\n');
};

const stylish = (typedKeys, spaceCount = 4, depth = 1) => {
  const sortedEntries = typedKeys.map((typedKey) => {
    const elem1 = `${getIndent(depth)}- ${typedKey.key}: ${stringify(typedKey.value1, spaceCount, depth + 1)}`;
    const elem2 = `${getIndent(depth)}+ ${typedKey.key}: ${stringify(typedKey.value2, spaceCount, depth + 1)}`;
    switch (typedKey.type) {
      case 'deleted':
        return `${getIndent(depth)}- ${typedKey.key}: ${stringify(typedKey.value, spaceCount, depth + 1)}`;
      case 'added':
        return `${getIndent(depth)}+ ${typedKey.key}: ${stringify(typedKey.value, spaceCount, depth + 1)}`;
      case 'unchanged':
        return `${getIndent(depth)}  ${typedKey.key}: ${typedKey.value}`;
      case 'changed':
        return [elem1, elem2].join('\n');
      case 'nested':
        return `${getIndent(depth)}  ${typedKey.key}: ${stylish(typedKey.children, spaceCount, depth + 1)}`;
      default:
        return new Error(`Type: ${typedKey.key} is underfined`);
    }
  });
  return ['{', ...sortedEntries, `${bracketIndent(depth - 1, spaceCount)}}`].join(
    '\n',
  );
};

export default stylish;
