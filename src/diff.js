import _ from 'lodash';

//нужно добавить тип прямо тат в обьект чтобы там было написано { type: *here is type*, ...iter(something)}

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







//const labeledKeys = (filepath1, filepath2, allEntr) => {
   // //const keys1 = _.keys(filepath1);
    // //const keys2 = _.keys(filepath2);
    ////const uniqKeys = _.uniq([ ...keys1, ...keys2 ]);
    ////const sortedKeys = _.sortBy(uniqKeys);
    ////const enrties1 = _.entries(filepath1);
    ////const entries2 = _.entries(filepath2);
    ////const result = {};
    ////const allEntr = [ ...entries1, ...entries2 ];
    //const fgh = allEntr.map(([key, value]) => {
      //if (!Object.hasOwn(filepath1, key)) {
        //result[key] = 'added';
      //} else if (!Object.hasOwn(filepath2, key)) {
       // result[key] = 'deleted';
      //} else if (filepath1[key] !== filepath2[key]) {
       // result[key] = 'changed';
     // } else if (filepath1[key] == filepath2[key]){
       // result[key] = 'unchanged';
      //} else if (_.isObject(value)){
        //result[key] = 'nested';
        //return labeledKeys(filepath1, filepath2, value);
      //}
    
   // });


    //for (const key of sortedKeys) {
      //if (!Object.hasOwn(filepath1, key)) {
        //result[key] = 'added';
      //} else if (!Object.hasOwn(filepath2, key)) {
        //result[key] = 'deleted';
      //} else if (filepath1[key] !== filepath2[key]) {
        //result[key] = 'changed';
      //} else if (filepath1[key] == filepath2[key]){
        //result[key] = 'unchanged';
      //} else {
        //result[key] = 'nested';
      //}
    //}
  
  //return fgh;
  //};