import _ from 'lodash';

export const getType = (filepath1, filepath2) => {
  const keys1 = _.keys(filepath1);
  const keys2 = _.keys(filepath2);
  const uniqKeys = _.uniq([...keys1, ...keys2]);
  const sortedKeys = _.sortBy(uniqKeys);
  const typedKeys = sortedKeys.map((key) => {
    if (!Object.hasOwn(filepath1, key)) {
      return { type: "added", key: key, value: filepath2[key] };
    } 
    if (!Object.hasOwn(filepath2, key)) {
      return { type: "deleted", key: key, value: filepath1[key] };
    }
    if (_.isObject(filepath1[key]) && _.isObject(filepath2[key])) {
      return { type: "nested", key: key, children: getType(filepath1[key], filepath2[key])};
    }
    if ((filepath1[key] !== filepath2[key])) {
      return { type: "changed", key: key, value1: filepath1[key] , value2: filepath2[key]};
    }
    if (filepath1[key] === filepath2[key]) {
      return { type: "unchanged", key: key, value: filepath2[key] };
    }
  });
  return typedKeys;
}; 
