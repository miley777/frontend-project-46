import _ from 'lodash';

const getIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);
const closingBracketIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount);

const stringify = (keys, depth = 1) => {
  if (!_.isObject(keys)) {
    return `${keys}`;
  }
  const objEntries = Object.entries(keys).map(
    ([key, value]) => `  ${getIndent(depth)}${key}: ${stringify(value, depth + 1)}`,
  );
  return ['{', ...objEntries, `${closingBracketIndent(depth - 1)}}`].join('\n');
};

const stylish = (typedKeys, depth = 1) => {
  const sortedEntries = typedKeys.map((typedKey) => {
    const elem1 = `${getIndent(depth)}- ${typedKey.key}: ${stringify(typedKey.value1, depth + 1)}`;
    const elem2 = `${getIndent(depth)}+ ${typedKey.key}: ${stringify(typedKey.value2, depth + 1)}`;
    switch (typedKey.type) {
      case 'deleted':
        return `${getIndent(depth)}- ${typedKey.key}: ${stringify(typedKey.value, depth + 1)}`;
      case 'added':
        return `${getIndent(depth)}+ ${typedKey.key}: ${stringify(typedKey.value, depth + 1)}`;
      case 'unchanged':
        return `${getIndent(depth)}  ${typedKey.key}: ${typedKey.value}`;
      case 'changed':
        return [elem1, elem2].join('\n');
      case 'nested':
        return `${getIndent(depth)}  ${typedKey.key}: ${stylish(typedKey.children, depth + 1)}`;
      default:
        return new Error(`Type: ${typedKey.key} is underfined`);
    }
  });
  return ['{', ...sortedEntries, `${closingBracketIndent(depth - 1)}}`].join(
    '\n',
  );
};

export default stylish;
