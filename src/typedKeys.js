import _ from 'lodash';

const getType = (filepath1, filepath2) => {
  //const keys1 = _.keys();
  //const keys2 = _.keys();
  //const uniqKeys = _.uniq([...keys1, ...keys2]);
  const sortedKeys = _.sortBy(Object.keys({...filepath1, ...filepath2}));
  const typedKeys = sortedKeys.map((key) => {
    const val1 = filepath1[key];
    const val2 = filepath2[key];
    if (!Object.hasOwn(filepath1, key)) {
      return { type: 'added', key: key, value: val2 };
    }
    if (!Object.hasOwn(filepath2, key)) {
      return { type: 'deleted', key: key, value: val1 };
    }
    if (_.isObject(filepath1[key]) && _.isObject(filepath2[key])) {
      return { type: 'nested', key: key, children: getType(val1, val2) };
    }
    if ((filepath1[key] !== filepath2[key])) {
      return { type: 'changed', key: key, value1: val1, value2: val2 };
    }
    if (filepath1[key] === filepath2[key]) {
      return { type: 'unchanged', key: key, value: val2 };
    }
  });
  return typedKeys;
};

export default getType;