import _ from 'lodash';


const getComparedFiles = (filepath1, filepath2) => {
  const keys1 = _.keys(filepath1);
  const keys2 = _.keys(filepath2);
  const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
  const sortedKeys = _.sortBy(uniqKeys);

  const arr = {};
  for (const [, value1] of filepath1) {
    if (filepath1[sortedKey] === value1) {
      for (const [, value2] of filepath2) {
        if (filepath2[sortedKey] === value2) {
          arr['  ' + sortedKeys] = filepath1[sortedKeys];
        } else {
          arr['+ ' + sortedKeys] = filepath1.sortedKeys;
        }
      }
      arr['- ' + sortedKeys] = filepath1.sortedKeys;
    }
  }

  return arr;
};

export default getComparedFiles;