import stylish from './stylish.js';
import plain from './plain.js';

const chooseFormater = (formatName, data) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      return new Error(`Format: ${formatName} is underfined`);
  }
};

export default chooseFormater;
