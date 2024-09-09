import getStylish from './stylish.js';
import getPlain from './plain.js';

const chooseFormater = (formatName, data) => {
  switch (formatName) {
    case 'stylish':
      return getStylish(data);
    case 'plain':
      return getPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      return new Error(`Format: ${formatName} is underfined`);
  }
};

export default chooseFormater;
