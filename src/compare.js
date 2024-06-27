import _ from 'lodash';


const getComparedFiles = (filepath1, filepath2) => {
  const keys1 = _.keys(filepath1);
  const keys2 = _.keys(filepath2);
  const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
  const sortedKeys = _.sortBy(uniqKeys);
  //const result = {};
  
  const mapKey = sortedKeys.map((key) => {
    if (!Object.hasOwn(filepath1, key)) {
      return `  + ${key}: ${filepath2[key]}`;
    } else if (!Object.hasOwn(filepath2, key)) {
      return `  - ${key}: ${filepath1[key]}`;
    } else if (filepath1[key] !== filepath2[key]) {
      return `  - ${key}: ${filepath1[key]}\n  + ${key}: ${filepath2[key]}`;
    } else if (filepath1[key] === filepath2[key]) {
      return `    ${key}: ${filepath2[key]}`;
    }
  });

  return [ '{', mapKey.join('\n') , '}'].join('\n');
};



//const stringify = (value, replacer, spaceCount = 2, space = ' ') => {

  //const iter = (value, depth) => {
    //const indentSize = depth * spaceCount;
    //const tab = space.repeat(indentSize);
    //const values = Object.entries(value).map(([key, val]) => `${tab}${replacer} ${key}: ${iter(val, depth + 1)}`);

    //return [ '{', ...values, `${tab}`, '}'].join('\n');
  //}

  //return iter(value, 1);
//}

//const repl = (value) => {

//}

export default getComparedFiles;