import _ from 'lodash';


const getComparedFiles = (filepath1, filepath2) => {
  //const keys1 = _.keys(filepath1);
  //const keys2 = _.keys(filepath2);
  //const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
  //const sortedKeys = _.sortBy(uniqKeys);
  
  
  //const mapKey = sortedKeys.map((key) => {
    //if (!Object.hasOwn(filepath1, key)) {
      //return `  + ${key}: ${filepath2[key]}`;
    //} else if (!Object.hasOwn(filepath2, key)) {
      //return `  - ${key}: ${filepath1[key]}`;
    //} else if (filepath1[key] !== filepath2[key]) {
      //return `  - ${key}: ${filepath1[key]}\n  + ${key}: ${filepath2[key]}`;
    //} else if (filepath1[key] === filepath2[key]) {
      //return `    ${key}: ${filepath2[key]}`;
    //}
  //});

  //return [ '{', mapKey.join('\n') , '}'].join('\n');

  const changes = labeledKeys(filepath1, filepath2);
  const entries1 = _.entries(filepath1);
  const entries2 = _.entries(filepath2);
  const allEntries = [ ...entries1, ...entries2 ];
  const iters = iter(allEntries);
  return iters;

};

const iter = (allEntries, spaceCount = 2, depth = 1, replacer = ' ') => {
  const indentSize = depth * spaceCount;
  const repeatedReplacer = replacer.repeat(indentSize);
  const sortedEntries = allEntries.map(([key, val]) => {
    if (!_.isObject(val)) {
      return `${repeatedReplacer}${key}: ${val}`;
    } else {
      //depth += 1;
      return `${repeatedReplacer}${key}: {/n${ iter(allEntries, spaceCount, depth + 1, replacer)}\n ${repeatedReplacer}}`
    }
  });
  return sortedEntries.join('\n');
}

const labeledKeys = (filepath1, filepath2) => {
  const keys1 = _.keys(filepath1);
  const keys2 = _.keys(filepath2);
  const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
  const sortedKeys = _.sortBy(uniqKeys);
  const result = {};
  for (const key of sortedKeys) {
    if (!Object.hasOwn(filepath1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(filepath2, key)) {
      result[key] = 'deleted';
    } else if (filepath1[key] !== filepath2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

return result;
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