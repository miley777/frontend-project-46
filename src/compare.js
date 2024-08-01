import { getType } from './diff.js';
import _ from 'lodash';


const iter = (typedKeys, spaceCount = 4, depth = 1, replacer = ' ') => {
  const indentSize = depth * spaceCount;
  const shiftToTheLeft = spaceCount - 2;
  const currentIndentWithoutSpasialSymbols = replacer.repeat(indentSize);
  const currentIndent = replacer.repeat(indentSize - shiftToTheLeft);
  const bracketIndent = replacer.repeat(indentSize - spaceCount);
  const sortedEntries = typedKeys.map((typedKey) => {
    
  const objToVal = (val, currentIndentWithoutSpasialSymbols, bracketIndent) => {
    const lines = _.isObject(val) ? Object.entries(val).map(([key, value]) => [ '{', `${currentIndentWithoutSpasialSymbols}${key}: ${value}`, `${bracketIndent}}`,].join('\n')) : val;
    return lines;
  }
    if (typedKey.type === 'deleted') {
      return `${currentIndent}- ${typedKey.key}: ${objToVal(typedKey.value, currentIndentWithoutSpasialSymbols, bracketIndent)}`;
    }
    if (typedKey.type === 'added') {
      //console.log(typedKey.value);
      return `${currentIndent}+ ${typedKey.key}: ${objToVal(typedKey.value, currentIndentWithoutSpasialSymbols, bracketIndent)}`;
    }
    if (typedKey.type === 'unchanged') {
      return `${currentIndent}  ${typedKey.key}: ${typedKey.value}`;
    }
    if (typedKey.type === 'changed') {
      //console.log(typedKey.key);
      return `${currentIndent}- ${typedKey.key}: ${objToVal(typedKey.value1, currentIndentWithoutSpasialSymbols, bracketIndent)}\n${currentIndent}+ ${typedKey.key}: ${objToVal(typedKey.value2, currentIndentWithoutSpasialSymbols, bracketIndent)}`;
    }
    if (typedKey.type === 'nested') {
      //console.log(typedKey.key);
      return `${currentIndent}  ${typedKey.key}: ${iter(typedKey.children, spaceCount, depth + 1, replacer)}`;
    }
    //if (_.isObject(typedKey.value)) {
      //return objToVal(typedKey.value, currentIndentWithoutSpasialSymbols, bracketIndent);
    //}
  });
  return [ '{', ...sortedEntries, `${bracketIndent}}`,].join('\n');
}



const getComparedLines = (filepath1, filepath2) => {
  const typedKeys = getType(filepath1, filepath2);
  const iterdiff = iter(typedKeys);
  return iterdiff;
  //return typedKeys;
};

export default getComparedLines;





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

  
  //const entries1 = _.entries(filepath1);
  //const entries2 = _.entries(filepath2);
  //const allEntr = [ ...entries1, ...entries2 ];
  //return ['{', iter(allEntries), '}'].join('\n');
  //return JSON.stringify(promdiff(filepath1, filepath2));
  //return promdiff(filepath1, filepath2);