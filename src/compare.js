import _ from 'lodash';


const getComparedFiles = (filepath1, filepath2) => {
  const keys1 = _.keys(filepath1);
  const keys2 = _.keys(filepath2);
  const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
  const sortedKeys = _.sortBy(uniqKeys);
  const result = {};
  
  const mapKey = sortedKeys.map((key) => {
    if (!Object.hasOwn(filepath1, key)) {
      return `+  ${key}: ${filepath2[key]}`;
    } else if (!Object.hasOwn(filepath2, key)) {
      return `-  ${key}: ${filepath1[key]}`;
    } else if (filepath1[key] !== filepath2[key]) {
      return `-  ${key}: ${filepath1[key]}\n  + ${key}: ${filepath2[key]}`;
    } else if (filepath1[key] === filepath2[key]) {
      return `   ${key}: ${filepath2[key]}`;
    }
  });

  //for (const key of sortedKeys) {
    //if (!Object.hasOwn(filepath1, key)) {
      //result[key] = 'added';
    //} else if (!Object.hasOwn(filepath2, key)) {
      //result[key] = 'deleted';
    //} else if (filepath1[key] !== filepath2[key]) {
      //result[key] = 'changed';
    //} else if (filepath1[key] === filepath2[key]) {
      //result[key] = 'unchanged';
    //}
  //};

  return mapKey;
};

export default getComparedFiles;