import { getType } from '../typedKeys.js';
import _ from "lodash";


const stringify = (typedKeys) => {
  if (!_.isObject(typedKeys)) {
    if (_.isString(typedKeys)) {
      return `'${typedKeys}'`;
    }
    return `${typedKeys}`;
  } else {
    return "[comlex value]";
  }
};

const plain = (typedKeys, arr = []) => {
  const sortedEntries = typedKeys.filter((typedKey) => typedKey.type !== 'unchanged').map((typedKey) => {
    const makeALine = arr.length === 0 ? typedKey.key : `${arr.join('.')}.${typedKey.key}`;
    switch (typedKey.type) {
      case 'deleted':
        return `Property '${makeALine}' was removed`;
      case 'added':
        return `Property '${makeALine}' was added with value: ${stringify(typedKey.value)}`;
      case 'changed':
        return `Property '${makeALine}' was updated. From ${stringify(typedKey.value1)} to ${stringify(typedKey.value2)}`;
      case 'nested':
        // eslint-disable-next-line no-case-declarations
        const copyArr = [...arr, typedKey.key];
        return plain(typedKey.children, copyArr);
      default:
        return new Error(`Type: ${typedKey.key} is underfined`);
    } 
  }); 
  return [...sortedEntries].join("\n");
};


const getLines = (filepath1, filepath2) => {
  const typedKeys = getType(filepath1, filepath2);
  const iterdiff = plain(typedKeys);
  return iterdiff;
};

export default getLines;