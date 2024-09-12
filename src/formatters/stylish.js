import _ from 'lodash';

const getIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

const stringify = (keys, depth = 1) => {
  if (!_.isObject(keys)) {
    return `${keys}`;
  }
  const objEntries = Object.entries(keys).map(
    ([key, value]) => `  ${getIndent(depth + 1)}${key}: ${stringify(value, depth + 1)}`,
  );
  return ['{', ...objEntries, `  ${getIndent(depth)}}`].join('\n');
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const sortedEntries = node.map((typedKey) => {
      switch (typedKey.type) {
        case 'deleted':
          return `${getIndent(depth + 1)}- ${typedKey.key}: ${stringify(typedKey.value, depth + 1)}`;
        case 'added':
          return `${getIndent(depth + 1)}+ ${typedKey.key}: ${stringify(typedKey.value, depth + 1)}`;
        case 'unchanged':
          return `${getIndent(depth + 1)}  ${typedKey.key}: ${typedKey.value}`;
        case 'changed': {
          const elem1 = `${getIndent(depth + 1)}- ${typedKey.key}: ${stringify(typedKey.value1, depth + 1)}`;
          const elem2 = `${getIndent(depth + 1)}+ ${typedKey.key}: ${stringify(typedKey.value2, depth + 1)}`;
          return [elem1, elem2].join('\n');
        }
        case 'nested':
          return `${getIndent(depth + 1)}  ${typedKey.key}: {\n${iter(typedKey.children, depth + 1).join('\n')}\n  ${getIndent(depth + 1)}}`;
        default:
          return new Error(`Type: ${typedKey.key} is underfined`);
      }
    });

    return sortedEntries;
  };
  return [`{`, ...iter(tree, 0), `}`].join('\n');
};

export default stylish;
