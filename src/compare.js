import _ from 'lodash';

const getSortedKeys = (filepath) => {
  const getDataKeys = _.keys(filepath);
  const getKeysSorted = _.sortBy(getDataKeys);
  return getKeysSorted;
}
 const arr = {};
const getFunk = (getDataKeys1, getDataKeys2, filepath1, filepath2) => {
  if ((getDataKeys1 === getDataKeys2) && (filepath1.getDataKeys1 === filepath2.getDataKeys2)) {
    arr['  ' + getDataKeys1] = filepath1.getDataKeys1;
  } else if ((getDataKeys1 === getDataKeys2) && (filepath1.getDataKeys1 !== filepath2.getDataKeys2)) {
    arr['- ' + getDataKeys1] = filepath1.getDataKeys1;
    arr['+ ' + getDataKeys2] = filepath1.getDataKeys2;
  } else if ((getDataKeys1 !== getDataKeys2)) {
    arr['- ' + getDataKeys1] = filepath1.getDataKeys1;
  } else if /// как отразить что ориентировать нужно не только на первый , но и на второй массив и как отразить что все должно быть по алфавиту 
}

const getComparedFiles = (filepath1, filepath2) => {
  const sortedKeys1 = getSortedKeys(filepath1);
  const sortedKeys2 = getSortedKeys(filepath2);
  // как то повторить функцию, чтобы все не осталось не обработанного элемента с обеих сторон
  const result = getFunk(sortedKeys1, sortedKeys2);
  console.log(result);
};

export default getComparedFiles;