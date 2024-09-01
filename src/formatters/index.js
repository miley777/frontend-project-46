import getComparedLines  from './stylish.js';
import getLines from './plain.js';
import { getType } from '../typedKeys.js';

const chooseFormater = (formatName, parsing1, parsing2) => {
  const data = getType(parsing1, parsing2);
  switch (formatName) {
        case 'stylish':
          return getComparedLines(parsing1, parsing2);
        case 'plain':
          return getLines(parsing1, parsing2);
        case 'json':
          return JSON.stringify(data);
      }
} 

export default chooseFormater;
