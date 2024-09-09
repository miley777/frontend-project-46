import _ from 'lodash';

const getDataType = (data1, data2) => {
  const sortedKeys = _.sortBy(Object.keys({ ...data1, ...data2 }));
  const typedKeys = sortedKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { type: 'nested', key, children: getDataType(data1[key], data2[key]) };
    }
    if ((data1[key] !== data2[key])) {
      return {
        type: 'changed', key, value1: data1[key], value2: data2[key],
      };
    }
    return { type: 'unchanged', key, value: data2[key] };
  });
  return typedKeys;
};

export default getDataType;
